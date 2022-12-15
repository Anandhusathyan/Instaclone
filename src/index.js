// for connecting to db and establishing server connection

const app = require('./app')
const mongoose = require("mongoose");

const db = mongoose.connect('mongodb://localhost/new',{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})
app.listen(3000, () => console.log('Server running......'));