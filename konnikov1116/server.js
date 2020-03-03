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
    "id": 0,
    "title": "iphoneX",
    "vendorCode": "12abcr",
    "price": 60000,
    "manufacturer": "Apple",
    "category": 'Телефоны',
    "weight": 24,
    "quantity": "1920"
}, {
    "id": 1,
    "title": "iphoneX",
    "vendorCode": "12abcr",
    "price": 60000,
    "manufacturer": "Apple",
    "category": 'Телефоны',
    "weight": 24,
    "quantity": "1920"
}]
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


                    data[req.body.body]['quantity']++;


                }
                else

                    if (req.body.type == 'edit1') {


                        data[req.body.body]['quantity']--;


                    } else {
                        if (req.body.type == 'editGood') {


                            for (let i in data) {
                                if (data[i].id == req.body.body.id) {
                                    data[i].title = req.body.body.title;
                                    data[i].vendorCode = req.body.body.vendorCode;
                                    data[i].price = req.body.body.price;
                                    data[i].manufacturer = req.body.body.manufacturer;
                                    data[i].category = req.body.body.category;
                                    data[i].weight = req.body.body.weight;
                                    data[i].quantity = req.body.body.quantity;

                                }
                            }

                        }
                    }
        }
    }
})

app.listen(3000);

