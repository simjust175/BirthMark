const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3400;

app.use("");

app.listen(port, ()=>{
    console.log(`Birthmark sever running on port: ${port}`);
});