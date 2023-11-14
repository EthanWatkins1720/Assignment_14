const express = require("express");
const app = express();
const joi = require("joi");
app.use(express.static("public"));
app.use(express.json());

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/index.html");
});

let albums = [
    {
        _id: 1,
        name: "The Wall",
        band: "Pink Floyd",
        genre: "Rock",
        year: 1973,
        members: ["David Gilmour","Roger Waters","Nick Mason", "Richard Wright"],
        picture: "./images/wall.jpeg"
    },
    {
        _id: 2,
        name: "Led Zeppelin IV",
        band: "Led Zeppelin",
        genre: "Rock",
        year: 1971,
        members: ["John Bonham", "John Paul Jones", "Jimmy Page", "Robert Plant"],
        picture: "../images/IV.jpeg"
    },
    {
        _id: 3,
        name: "The Protomen",
        band: "The Protomen",
        genre: "Indie Rock",
        year: 2005,
        members: ["Raul Panther III","Murphy Weller","Commander B. Hawkins", "Sir Dr. Robert Bakker", "Shock Magnum", "Gambler Kirkdouglas", "Reanimator Lovejoy", "K.I.L.R.O.Y."],
        picture: "../images/protomen.jpeg"
    },
    {
        _id: 4,
        name: "Relaxer",
        band: "Alt-J",
        genre: "Pop",
        year: 2017,
        members: ["Joe Newman","Thom Sonny Green","Gus Unger-Hamilton"],
        picture: "../images/relaxer.jpeg"
    },
    {
        _id: 5,
        name: "Soul Punk",
        band: "Patrick Stump",
        genre: "Pop",
        year: 2011,
        members: ["Patrick Stump"],
        picture: "../images/punk.jpeg"
    },
    {
        _id: 6,
        name: "Vegas",
        band: "The Crystal Method",
        genre: "Electronic",
        year: 1997,
        members: ["Scott Kirkland","Ken Jordan"],
        picture: "../images/vegas.jpeg"
    },
];
app.get("/api/data", (req, res) => {
    res.json(albums);
});

app.listen(3000, () => {
    console.log("How can I help you?")
});