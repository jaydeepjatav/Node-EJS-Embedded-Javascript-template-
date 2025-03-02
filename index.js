    const express = require("express");
    const app = express();
    const path = require("path");

    const port = 8800; 

    app.use(express.static(path.join(__dirname , "/public")));
    app.set("view engine", "ejs");


    app.get("/", (req,res) => {
    res.render("home.ejs");
    });

    app.get("/rolldice", (req,res) => {
    res.render("rolldice.ejs");
    });

    app.get("/ig/:username", (req,res) => {
    let {username } =req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    if(data){
    res.render("instagram.ejs", {data });
    }else{
    res.render("error.ejs");
    }
    });

    app.listen(port, () => {
    console.log(`this is listen port ${port}`);
    })