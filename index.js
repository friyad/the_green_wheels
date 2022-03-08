const express = require('express')
const app = express()
require('dotenv').config()
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId
var cors = require('cors')
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ce1yc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



async function run() {
    try {
        await client.connect();
        const database = client.db("theGreenWheels");
        const allBicycleCollection = database.collection("allBicycles");
        const reviewsCollection = database.collection("reviews");
        const ordersCollection = database.collection("orders");

        // ---------------------Bicycles---------------------
        // Get 6 Bycycles for display in home
        app.get("/homeBicycles", async (req, res) => {
            const cursor = allBicycleCollection.find({})
            const result = await cursor.limit(6).toArray()
            res.json(result)
        })
        //Get All Bicycles for displya on the Bicycle Route
        app.get("/bicycles", async (req, res) => {
            const cursor = allBicycleCollection.find({})
            const result = await cursor.toArray()
            res.json(result)
        })
        //Get a (1) Bycycle to display in the byclce details
        app.get("/bicycleDetails/:detailsID", async (req, res) => {
            const id = req.params.detailsID;
            const query = { _id: ObjectId(id) }
            const result = await allBicycleCollection.findOne(query)
            res.json(result)
        })


        // ---------------------Reviews---------------------
        app.get("/reviews", async (req, res) => {
            const cursor = reviewsCollection.find({})
            const result = await cursor.toArray()
            res.json(result)
        })



        // ----------------------Orders----------------------
        // Post a Order from Shipping
        app.post("/order", async (req, res) => {
            const order = req.body;
            const result = await ordersCollection.insertOne(order)
            res.json(result)
        })
        // Get all Orders to display in the My Orders
        app.get("/orders/:email", async (req, res) => {
            const userEmail = { userEmail: req.params.email };
            const cursor = ordersCollection.find(userEmail)
            const result = await cursor.toArray();
            res.json(result)
        })
        // Delete a Order from
        app.delete("/orders/:orderID", async (req, res) => {
            const id = req.params.orderID
            const query = { _id: ObjectId(id) }
            const result = await ordersCollection.deleteOne(query)
            res.json(result)
        })



    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);






app.get('/', (req, res) => {
    res.send('Hello World! This is Green Wheels')
})

app.listen(port, () => {
    console.log('Your port is: ', port)
})