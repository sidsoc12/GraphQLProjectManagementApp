const express = require('express');
const colors = require('colors');
const cors = require('cors')
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const app = express();
const port = process.env.PORT || 5000;
const schema = require('./schema/schema')
const connectDB = require('./config/db')

//Connect to Database
connectDB();
app.use(cors())
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Server running on ${port}`))