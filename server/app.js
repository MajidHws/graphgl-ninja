const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const faker = require('faker')
const app = express()

const Author = require('./models/author')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (req.method === 'OPTIONS') {
        req.header('Access-Control-Allow-Methods', 'PUT, PATCH, POST, GET, DELETE');
        return res.status(200).json({})
    }

    next();
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    require('./db/mongodb')
    console.log('SERVER IS UP AND RUNNING 4000');

    // for(let i = 0; i < 50; i++){
    //     Author.create({
    //         name: faker.name.findName(),
    //         age: Math.random() * 20
    //     })
    // }
    
})