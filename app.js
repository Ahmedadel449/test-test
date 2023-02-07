var express =require('express');
var cors = require('cors');
var bodyParser = require('body-parser')

const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', function 
(req, res) {
    res.send("Ahmed adel");
}) 
    app.listen(process.env.PORT || '3000');