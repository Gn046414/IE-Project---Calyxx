#
# This is a Shiny web application. You can run the application by clicking
# the 'Run App' button above.
#
# Find out more about building applications with Shiny here:
#
#    http://shiny.rstudio.com/
#


# install.packages("plotly")
# install.packages("dplyr")   
# install.packages("countrycode")
# install.packages("ggplot2")
# install.packages("highcharter")
# install.packages("readxl")
#install.packages("gganimate")
#install.packages("gifski")
library("readxl")
library("reshape2")


#The required libraries are being used
library(shiny)  		 #used for shiny app					
library(plotly)      #used for making interactive plots
library(ggplot2)     #used for creating plots
library(highcharter) #used for interactive plots
library(dplyr)       #used faster data manipulations
library(gganimate)
library(gifski)

# for getting working directory

#Master file is read and named it final_master variable 
final_master <- read_excel("Data-tables-Australia-s-welfare-2019-Family-domestic-and-sexual-violence-snapshot.xlsx", sheet = 3)

new <-melt(final_master, id.vars = "Year", measure.vars = c("Male", "Female"))


# User Interface 
ui <- fluidPage(
    
    titlePanel(""),
    mainPanel(
        
        tabsetPanel(type = "tabs",
                    #TAB 1
                    tabPanel("Recorded victims of sexual assault per 100,000 of the population, by sex, 2010 to 2018",plotlyOutput("lineplot"))
                   
                    
        )
        
    )
)

# for server
server <- function(input,output) {

    output$lineplot<-renderPlotly({ggplot(data=new, aes(x=Year, y=value, group=variable)) +
            labs(x = "Year ")+
            labs(y="Victimisation Rate")+
            geom_line(color="red")+
            geom_point()+
            transition_reveal(Year)
        #animate(output$lineplot) 
        
           #animate(output$lineplot, duration = 5, fps = 20, width = 200, height = 200, renderer = gifski_renderer())
           #anim_save("output.gif")
    })
    

    
}

# plotting the graph using shiny app
shinyApp(ui, server)
