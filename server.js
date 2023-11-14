const express = require("express");
const app = express();
const joi = require("joi");
app.use(express.static("public"));
app.use(express.json());

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/data", (req, res) => {
    let albums = [];
    albums[0] = {
        name: "The Wall",
        band: "Pink Floyd",
        genre: "Rock",
        year: "1973",
        members: ["David Gilmour","Roger Waters","Nick Mason", "Richard Wright"],
        picture: "./images/wall.jpeg"
    };
    albums[1] = {
        name: "Led Zeppelin IV",
        band: "Led Zeppelin",
        genre: "Rock",
        year: "1971",
        members: ["John Bonham", "John Paul Jones", "Jimmy Page", "Robert Plant"],
        picture: "../images/IV.jpeg"
    };
    albums[2] = {
        name: "The Protomen",
        band: "The Protomen",
        genre: "Indie Rock",
        year: "2005",
        members: ["Raul Panther III","Murphy Weller","Commander B. Hawkins", "Sir Dr. Robert Bakker", "Shock Magnum", "Gambler Kirkdouglas", "Reanimator Lovejoy", "K.I.L.R.O.Y."],
        picture: "../images/protomen.jpeg"
    };
    albums[3] = {
        name: "Relaxer",
        band: "Alt-J",
        genre: "Pop",
        year: "2017",
        members: ["Joe Newman","Thom Sonny Green","Gus Unger-Hamilton"],
        picture: "../images/relaxer.jpeg"
    };
    albums[4] = {
        name: "Soul Punk",
        band: "Patrick Stump",
        genre: "Pop",
        year: "2011",
        members: ["Patrick Stump"],
        picture: "../images/punk.jpeg"
    };
    albums[5] = {
        name: "Vegas",
        band: "The Crystal Method",
        genre: "Electronic",
        year: "1997",
        members: ["Scott Kirkland","Ken Jordan"],
        picture: "../images/vegas.jpeg"
    };

    res.json(albums);
});

app.listen(3000, () => {
    console.log("How can I help you?")
});