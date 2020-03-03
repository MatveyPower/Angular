var express = require("express")
var app = express()

var server = require('http').createServer(app)
var router = express.Router();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    next();
});
const data = [{
    "id": 1,
    "title": 'suka',
    "data": 'Misha',
    "date": 27 - 12 - 12,
    "succes": true
},
]
app.get("/data", function (req, res) {
    res.send(JSON.stringify(data));
    res.end();
});
var bodyParser = require('body-parser')
app.use(bodyParser())
app.post("/data", function (req, res) {

    if (req.body) {
        // console.log(req.body)
        if (req.body.type == 'add') {

            data.push(req.body.body)


        } else {
            if (req.body.type == 'del') {

                for (let i in data) {
                    if (data[i].id == req.body.body.id) {
                        data.splice(i, 1)
                    }

                }




            } else
            
                if (req.body.type == 'edit') {
                    
                    data[req.body.body]['succes'] = true;
                } else if (req.body.type == 'edit1') {
                    
                    data[req.body.body]['succes'] = false;
                }
                else {
                    if (req.body.type == 'editPhone') {


                        for (let i in data) {
                            if (data[i].id == req.body.body.id) {
                                data[i].title = req.body.body.title;
                                data[i].vendorCode = req.body.body.vendorCode;
                                data[i].price = req.body.body.price;
                                data[i].manufacturer = req.body.body.manufacturer;
                                data[i].yearIssue = req.body.body.yearIssue;
                                data[i].mpx = req.body.body.mpx;
                                data[i].screenResolution = req.body.body.screenResolution;
                                data[i].numberOrders = req.body.body.numberOrders;
                            }
                        }

                    }
                }
        }
    }
})

app.listen(3000);

