
///this is our index route file. you can create multiple route files inside the route folder.

const express = require('express');
const router = express.Router();

const countries = require("countryjs");

//route for our index page.

// router.get("/", (req, res) => {
//     //lets render our ejs page
//     res.render("index", (req, {
//         title: "Index Page"
//     }));
// });

router.get("/countries", (req, res) => {
    const all_c = countries.all();
    return res.json(all_c);
});

router.get("/country_info", (req, res) => {
    const country_short_name = (req.query.name !== "" && req.query.name !== 'undefined') ? req.query.name : "empty";
    if(country_short_name == "" || country_short_name == undefined){
        return res.json({error: "You have provided no data"});
    }

    const info = countries.info(country_short_name);
    return res.json(info);

});

router.get("/states", (req, res) => {
    const country_short_name = (req.query.name !== "" && req.query.name !== 'undefined') ? req.query.name : "empty";
    if(country_short_name == "" || country_short_name == undefined){
        return res.json({error: "You have provided no data"});
    }

    const states = countries.states(country_short_name);

    return res.json(states);
})

router.get("/counter", (req, res) => {
    let response = [];
    let i = 0;
    for(i = 1; i <= 10; i++){
        response.push(i);
    }

    return res.json(response);
})


//dont forget to always export

module.exports = router;