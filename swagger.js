import swaggerAutogen from "swagger-autogen"


const doc = {
    info: {
        title : "IzyDrive API",
        description : "Open Documentation for IzyDrive Api"
    },
    host : "localhost:3000",
    schemes : ['http'],
    security: {
        ApiTokenAuth: {
            type: "apiKey",
            in: "header",
            name: "token",
        }
    },
    tags : [
        {
            "name": "Api Root",
            "description": "Return the state of the API"
        },
        {
            "name": "User",
            "description": "User management"
        },
        {
            "name": "Car",
            "description": "Car management"
        },
        {
            "name": "Rent", 
            "description": "Rent management"
        },
        {
            "name": "Park",
            "description": "Park management"
        },
        {
            "name": "incident",
            "description": "Incident management"
        }
    ],
    components: {
        schemas: {
            User: {
                first_name: "John",
                last_name: "Doe",
                email: "johndoe@mail.com",
                address: {
                    street: "1 rue de la paix",
                    city: "Paris",
                    zipcode: "75000"
                },
                birthdate: "1990-01-01",
                phone: "0606060606",
                password: "password",
                id_card: {
                    image_kit_id: "123456789",
                    image_kit_url: "https://www.imagekit.io/123456789",
                },
                driver_license: {
                    image_kit_id: "123456789",
                    image_kit_url: "https://www.imagekit.io/123456789",
                },
                role: "user"
            },
            Car: {
                category: "SUV",
                model : "Audi Q5",
                brand: "Audi",
                availibility: true,
                park : {
                    park_id: "001",
                },
                doc : {
                    insurance: "Axa",
                    certificate: "carte grise",
                },
                car_image: {
                    left_side: {
                        image_kit_id: "123456789",
                        image_kit_url: "https://www.imagekit.io/123456789",
                    },
                    right_side: {
                        image_kit_id: "123456789",
                        image_kit_url: "https://www.imagekit.io/123456789",
                    },
                    front_side: {
                        image_kit_id: "123456789",
                        image_kit_url: "https://www.imagekit.io/123456789",
                    },
                    back_side: {
                        image_kit_id: "123456789",
                        image_kit_url: "https://www.imagekit.io/123456789",
                    }
                },
                specs:  {
                    engine: "diesel",
                    gearbox: "automatic",
                    seats: 5,
                    doors: 5
                }
            },
            Park : {
                phone: "0606060606",
                address: {
                    street: "1 rue de la paix",
                    city: "Paris",
                    zipcode: "75000"
                }
            },
            Incident: {
                alert_date: "2021-01-01",
                car:{
                    car_id: "001",
                },
                date: "2021-01-01",
                user: {
                    user_id: "001",
                },
                photos : "https://www.imagekit.io/123456789",
                remarks: "incident description"
            },
            Rent: {
                start_date: "2021-01-01",
                end_date: "2021-01-01",
                has_started: true,
                price: 100,
                car: {
                    car_id: "001",
                },
                user: {
                    user_id: "001",
                },
                park: {
                    park_id: "001",
                },
                incident: true,
                starting_pics_car : {
                    left_side: {
                        image_kit_id: "123456789",
                        image_kit_url: "https://www.imagekit.io/123456789",
                    },
                    right_side: {
                        image_kit_id: "123456789",
                        image_kit_url: "https://www.imagekit.io/123456789",
                    },
                    front_side: {
                        image_kit_id: "123456789",
                        image_kit_url: "https://www.imagekit.io/123456789",
                    },
                    back_side: {
                        image_kit_id: "123456789",
                        image_kit_url: "https://www.imagekit.io/123456789",
                    }
                },
                ending_pics_car : {
                    left_side: {
                        image_kit_id: "123456789",
                        image_kit_url: "https://www.imagekit.io/123456789",
                    },
                    right_side: {
                        image_kit_id: "123456789",
                        image_kit_url: "https://www.imagekit.io/123456789",
                    },
                    front_side: {
                        image_kit_id: "123456789",
                        image_kit_url: "https://www.imagekit.io/123456789",
                    },
                    back_side: {
                        image_kit_id: "123456789",
                        image_kit_url: "https://www.imagekit.io/123456789",
                    }
                }
            }
        }
    }
}

const outputFile = './swagger_output.json'
const endpointsFiles = ['./server.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./server.js')
})                

            




