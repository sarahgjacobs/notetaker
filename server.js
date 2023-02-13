const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = 3001;
const routes = require('./routes');

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'));
app.use(routes);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

