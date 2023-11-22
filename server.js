const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://darshan:XYBOWl3ehpTBodm6@cluster0.ceinm0p.mongodb.net/interview?retryWrites=true&w=majority').then(() => {
    console.log('Database Connection Successful');
}).catch(err => {
    console.log('connect: error');
    throw err
});

const app = require('./app');

app.listen(5200, function () {
    console.log("server running on 5200");
});