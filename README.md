# Todo Web App

This is a Todo Web App which allows the user to create tasks and shows them in a very organised and in a very structured format. The user can delete the tasks once finished with a simple click on the items present on the list.
The Web-App is made using Node JS, Express, Pug(template engine), CSS, JavaScript and MongoDB for database. 


## Requirements

 - Node and npm
 - MongoDB- Install mongoDB -
 - [https://www.mongodb.com/download-center/community](https://www.mongodb.com/download-center/community)

## Installation

 1. Clone this repository:  https://github.com/aniketkishore100/To-Do-List-app.git
 2. Install the application and all the requirements by- `npm install`
 3. Create a file path : "C:\data\db" (this is where the data and the collections will be stored)
 4. Start the database : 
  `C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe` and leave it running.
  
 5. Start the server in another terminal `node app.js`
 6. View the Todo app in browser at `http://localhost:3004`

## Code Structure

 - **app.js** - Controls all the imports and the library for the app.
 - **controller/todocontroller.js** - Contains all the routes for the API.
 - **public/assets** - Contains the static files i.e CSS and JS for front-end.
 - **views/index.pug** - Consists of the template engine file for the HTML code.

