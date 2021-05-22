#
# This is a Shiny web application. You can run the application by clicking
# the 'Run App' button above.
#
# Find out more about building applications with Shiny here:
#
#    http://shiny.rstudio.com/
#

library(shiny)
#install.packages("tm")
library(tm)
#install.packages("wordcloud")
library(wordcloud)
#install.packages("memoise")
library(memoise)
library(gtrendsR)
library(dplyr)


Getword <- memoise(function(keywords,geo) 
    {
    res <- gtrends(keyword=keywords,
                   geo = geo
                  )
    res
    cd <- res$related_topics
    cd2 <- count(cd, value)
    cd2


})

#Getword("Domestic Violence","AU")

# Define UI for application that draws a histogram
ui <- fluidPage(
    # Application title
    titlePanel("Word Cloud"),
    
    sidebarLayout(
        # Sidebar with a slider and selection inputs
        sidebarPanel(
            textInput("text1", "Type a word:",
                      value ="Domestic Violence" ),
            
            textInput("text2", "Give a Country Code:",
                        value =  "AU" ),
                        
            
            #textInput("text3", "Choose time:",
             #           value =  ""),
            actionButton("update", "Change"),
            hr(),
            sliderInput("freq",
                        "Minimum Frequency:",
                        min = 1,  max = 50, value = 5),
            sliderInput("max",
                        "Maximum Number of Words:",
                        min = 1,  max = 200,  value = 30)
        ),
        
        # Show Word Cloud
        mainPanel(
            plotOutput("plot")
        )
    )
)

# Define server logic required to draw a histogram
server <- function(input, output, session) {
    # Define a reactive expression for the document term matrix
    terms <- reactive({
        # Change when the "update" button is pressed...
        input$update
        # ...but not for anything else
        isolate({
            withProgress({
                setProgress(message = "Processing Information...")
                Getword(input$text1,input$text2)
            })
        })
    })
   

    # Make the wordcloud drawing predictable during a session
    wordcloud_rep <- repeatable(wordcloud)
  
    output$plot <- renderPlot({
        v <- terms()
        wordcloud_rep(v$value, v$n, scale=c(2,0.5),
                      min.freq = input$freq, max.words=input$max,
                      colors=brewer.pal(8, "Dark2")
                      )
    })
}
# Run the application 
shinyApp(ui = ui, server = server)
