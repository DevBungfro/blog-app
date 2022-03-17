require("dotenv").config()
const express = require('express');
const app = express();
const path = require("path");
const dataDir = path.resolve(`${process.cwd()}${path.sep}`);

app.set("view engine", "ejs");
app.use("/", express.static(path.resolve(`${dataDir}${path.sep}assets`)));

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT)
})