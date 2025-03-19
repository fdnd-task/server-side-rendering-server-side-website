// Import the npm package Express (from the node_modules folder created by npm)
// This package was installed via `npm install` and is listed as a dependency in package.json
import express from 'express'

// Import the Liquid package (also installed as a dependency via npm)
import { Liquid } from 'liquidjs';

console.log('You might need to change something below')
// Perform a fetch to the data you need
// const apiResponse = await fetch('...')

// Read the JSON object from the fetch response, which we can work with
// const apiResponseJSON = await apiResponse.json()

// Optionally check the data in your console
// (Note: this is NOT the browser console, but the NodeJS console in your terminal)
// console.log(apiResponseJSON)


// Create a new Express application, where we configure the server
const app = express()

// Make working with form data a bit more convenient
app.use(express.urlencoded({extended: true}))

// Use the 'public' folder for static files (resources like CSS, JavaScript, images, and fonts)
// Files in this folder can therefore be used by the browser
app.use(express.static('public'))

// Set Liquid as the view engine
const engine = new Liquid();
app.engine('liquid', engine.express());

// Set the folder containing your Liquid templates
// Note: the browser cannot load these files directly (like with HTML files before)
app.set('views', './views')

// Create a GET route for the index (usually done at the root, '/')
app.get('/', async function (request, response) {
    // Render index.liquid from the Views folder
    // Optionally pass data to it
    response.render('index.liquid')
})

// Create a POST route for the index; for example, to handle form submissions
// Currently, we’re not doing anything with it, but you can experiment if you want
app.post('/', async function (request, response) {
    // You could save data here, modify it, or do whatever you need
    // There is no handling for a POST yet, so redirect the visitor back to '/'
    response.redirect(303, '/')
})

// Set the port number for Express to listen on
// Locally, this is port 8000; if hosted somewhere, it’s probably port 80
app.set('port', process.env.PORT || 8000)

// Start Express, retrieving the port number we just set
app.listen(app.get('port'), function () {
    // Show a message in the console and include the port number
    console.log(`Application started on http://localhost:${app.get('port')}`)
})
