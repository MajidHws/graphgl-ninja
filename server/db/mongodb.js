const mongoose = require('mongoose')

const dbName = 'library'
const url = `mongodb://127.0.0.1:27017/${dbName}`

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, () => {
    console.log('Mongoose is connected')
})