const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data');
const subscribers = require('./models/subscribers');

// Connect to DATABASE
const DATABASE_URL = "mongodb://localhost/subscribers";
mongoose.connect("mongodb+srv://amitcse13:science@cluster0.0ayupdm.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    try{
    await subscriberModel.deleteMany({},{wtimeout:50000});
    console.log("Deleted all subscribers");

    // console.log(connection)

    const newdata= await subscriberModel.insertMany(data)
    console.log('Added ${newdata.length} New subscribers');
    }catch(err)
    {("Unable to refresh data"),err}
    finally{
    await mongoose.disconnect();
    console.log("disconnected");
}}
refreshAll();