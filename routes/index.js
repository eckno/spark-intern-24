
///this is our index route file. you can create multiple route files inside the route folder.
const _ = require("underscore");
const express = require('express');
const router = express.Router();

const countries = require("countryjs");

const users = [];
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
    const country_short_name = (req.query.names !== "" && req.query.names !== 'undefined') ? req.query.names : "empty";
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

router.get("/users", (req, res) => {
    return res.json(users);
})

//////CREATING POST REQUESTS
router.post("/register", (req, res) => {
    let response = {};
    const user_data = req.body;
    if(user_data !== null && Object.keys(user_data).length > 0){
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;
        const confirm_password = req.body.confirm_password;

        if(email === ""){
            response['email'] = "Please provide an email address.";
        }
        if(username === ""){
            response['username'] = "Please provide a username.";
        }
        if(password === ""){
            response['password'] = "Please provide a secured password.";
        }
        if(confirm_password === ""){
            response['confirm_password'] = "Please confirm your password.";
        }

        if(password !== confirm_password){
            response['password'] = "Kindly make sure your password's are thesame";
        }

        users.push(user_data);

        if(users.length > 0){
            response['success'] ="You have been successfully registered. Congratulations";
        }

    } else{
         response = {error: "you have provided an empy data. Please check your form"};
    }

    if(response !== "" || response !== null){
        return res.json(response)
    }
    
    return res.json({error: "Oops! something went wrong please check your request and try again."});
});

router.post("/login", (req, res) => {
    //
})

//dont forget to always export

module.exports = router;