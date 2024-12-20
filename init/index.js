const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

main().then(() => {
    console.log('connected to DB');
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "671a3cc14358bf6744911ba2" })); // Actually this line of code is written especially to add a new field owner to every data object
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();