const express = require("express");
const exphbs  = require("express-handlebars");
const app = express();

const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
 
// Import routes and give the server access to them.
const heroRoutes = require("./controllers/heroesController.js");

app.use(heroRoutes);
 
app.listen(PORT, () => {
    console.log("App is running http://localhost:" + PORT)
});