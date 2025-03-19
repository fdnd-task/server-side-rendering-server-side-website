// app.js
const express = require('express');
const { Liquid } = require('liquidjs');
const axios = require('axios');

const app = express();
const engine = new Liquid();

// Set up Liquid as the view engine
app.engine('liquid', engine.express());
app.set('views', './views');
app.set('view engine', 'liquid');

// Serve static files from the public directory
app.use(express.static('public'));

// Helper function to fetch data from a given endpoint
const fetchData = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data.data; // adjust if your API returns data differently
    } catch (error) {
        console.error(`Error fetching from ${url}:`, error);
        return null;
    }
};

app.get('/', async (req, res) => {
    try {
        const [
            artObjects,
            artists,
            museums,
            styles,
            locations,
            materials,
            techniques
        ] = await Promise.all([
            fetchData('https://fdnd-agency.directus.app/items/fabrique_art_objects'),
            fetchData('https://fdnd-agency.directus.app/items/fabrique_artist'),
            fetchData('https://fdnd-agency.directus.app/items/fabrique_museum'),
            fetchData('https://fdnd-agency.directus.app/items/fabrique_style'),
            fetchData('https://fdnd-agency.directus.app/items/fabrique_location'),
            fetchData('https://fdnd-agency.directus.app/items/fabrique_materials'),
            fetchData('https://fdnd-agency.directus.app/items/fabrique_techniques')
        ]);

        // Render the index view with the fetched data
        res.render('index', {
            artObjects,
            artists,
            museums,
            styles,
            locations,
            materials,
            techniques
        });
    } catch (error) {
        console.error('Error in route /:', error);
        res.status(500).send('An error occurred while fetching data.');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
