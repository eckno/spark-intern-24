
///this is our index route file. you can create multiple route files inside the route folder.

const express = require('express');
const router = express.Router();

//route for our index page.

router.get("/", (req, res) => {
    //lets render our ejs page
    res.render("index", (req, {
        title: "Index Page"
    }));
});


//dont forget to always export

module.exports = router;