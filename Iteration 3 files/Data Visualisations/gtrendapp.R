#
# This is a Shiny web application. You can run the application by clicking
# the 'Run App' button above.
#
# Find out more about building applications with Shiny here:
#
#    http://shiny.rstudio.com/
#

#install.packages("shinymaterial")

#install.packages("countrycode")   
#install.packages("ggplot2")   

# Define UI for application that draws a histogram
library(shiny)
library(shinymaterial)
library(plotly)
library(gtrendsR)
library(countrycode)
library(ggplot2)

ui <- material_page(title = "Google Trends ",
                    tags$br(),
                    material_row(
                        material_column(
                            width = 3,
                            material_card(
                                title = "Choose a Word",
                                depth = 4,
                                
                                material_dropdown(
                                    input_id = "vec1",
                                    label = "Select Trends",
                                    choices = list(
                                        "Domestic Abuse",
                                        "Domestic Violence",
                                        "Child Safety",
                                        "Women Safety"
                                ),
                                selected = "Domestic Abuse"
                                ),
                                material_dropdown(
                                    input_id = "geography",
                                    label = "Country",
                                    choices = list(
                                        "Worldwide",
                                        "Afghanistan",
                                        "Albania",
                                        "Algeria",
                                        "Angola",
                                        "Argentina",
                                        "Armenia",
                                        "Australia",
                                        "Austria",
                                        "Azerbaijan",
                                        "Bahamas",
                                        "Bahrain",
                                        "Bangladesh",
                                        "Belarus",
                                        "Belgium",
                                        "Botswana",
                                        "Brazil",
                                        "Bulgaria",
                                        "Burkina Faso",
                                        "Burundi",
                                        "Cambodia",
                                        "Cameroon",
                                        "Canada",
                                        "Chad",
                                        "Chile",
                                        "China",
                                        "Colombia",
                                        "Cuba",
                                        "Cyprus",
                                        "Czech Republic",
                                        "Denmark",
                                        "Djibouti",
                                        "Ecuador",
                                        "Egypt",
                                        "Equatorial Guinea",
                                        "Eritrea",
                                        "Estonia",
                                        "Ethiopia",
                                        "Finland",
                                        "France",
                                        "Gabon",
                                        "Gambia",
                                        "Georgia",
                                        "Germany",
                                        "Ghana",
                                        "Greece",
                                        "Hong Kong",
                                        "Hungary",
                                        "Iceland",
                                        "India",
                                        "Indonesia",
                                        "Iran",
                                        "Iraq",
                                        "Ireland",
                                        "Israel",
                                        "Italy",
                                        "Jamaica",
                                        "Japan",
                                        "Jordan",
                                        "Kazakhstan",
                                        "Kenya",
                                        "Kiribati",
                                        "Korea (North)",
                                        "Korea (South)",
                                        "Kuwait",
                                        "Kyrgyzstan",
                                        "Lebanon",
                                        "Liberia",
                                        "Libya",
                                        "Macedonia",
                                        "Madagascar",
                                        "Malawi",
                                        "Malaysia",
                                        "Mali",
                                        "Malta",
                                        "Mexico",
                                        "Morocco",
                                        "Mozambique",
                                        "Namibia",
                                        "Nepal",
                                        "Netherlands",
                                        "New Zealand",
                                        "Niger",
                                        "Nigeria",
                                        "Norway",
                                        "Oman",
                                        "Pakistan",
                                        "Paraguay",
                                        "Peru",
                                        "Philippines",
                                        "Poland",
                                        "Portugal",
                                        "Qatar",
                                        "Romania",
                                        "Russian Federation",
                                        "Rwanda",
                                        "Saudi Arabia",
                                        "Senegal",
                                        "Serbia",
                                        "Sierra Leone",
                                        "Singapore",
                                        "Somalia",
                                        "South Africa",
                                        "Spain",
                                        "Sudan",
                                        "Swaziland",
                                        "Sweden",
                                        "Switzerland",
                                        "Syria",
                                        "Taiwan",
                                        "Tajikistan",
                                        "Tanzania",
                                        "Thailand",
                                        "Togo",
                                        "Tunisia",
                                        "Turkey",
                                        "Turkmenistan",
                                        "Uganda",
                                        "Ukraine",
                                        "United Arab Emirates",
                                        "United Kingdom",
                                        "United States",
                                        "Uzbekistan",
                                        "Venezuela",
                                        "Viet Nam",
                                        "Yemen",
                                        "Zaire",
                                        "Zambia",
                                        "Zimbabwe"
                                    ),
                                    selected = "Australia"
                                ),
                                material_dropdown(
                                    input_id = "period",
                                    label = "Time Period",
                                    choices = c(
                                        "Last day",
                                        "Last seven days",
                                        "Last 30 days",
                                        "Last 12 months",
                                        "Last five years"
                                    ),
                                    selected = "Last five years"
                                ),
                                submitButton("Submit")
                                
                             

                            )
                        ),
                        material_column(
                            width = 8,
                            material_card(
                                title = "Google Trends",
                                depth = 1.2,
                                plotlyOutput("gtrends_plot")
                            )
                        )
                    ))

server <- function(input, output, session) {
    ### Get Country Code
    geo <- reactive({
        if (input$geography == "Worldwide") {
            ""
        }
        
        else{
            countrycode(input$geography, 'country.name', 'iso2c')
        }
        
    })
    
    ### Time
    start_date <- reactive({
        if (input$period == "Last five years") {
            "today+5-y"
        }
        else if (input$period == "Last 12 months") {
            "today 12-m"
        }
        else if (input$period == "Last 30 days") {
            "today 1-m"
        }
        else if (input$period == "Last seven days") {
            "now 7-d"
        }
        else if (input$period == "Last  day") {
            "now 1-d"
        }
    })
    
    
    out <- reactive({
        if (length(input$vec1) > 0) {
            unlist(strsplit(input$vec1, ","))
        }
    })
    

    trend <- reactive({
        if (length(input$vec1 != 0))
            req(input$vec1)
        {
            gtrends(keyword = out(),
                    time = start_date(),
                    geo = geo())
            }
    })
    
    #Plot the Trend
    output$gtrends_plot <- renderPlotly({
        plot(trend())
    })
    
}

# Run the application 
shinyApp(ui = ui, server = server)
