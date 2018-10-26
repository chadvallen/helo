const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(express.static( `${__dirname}/../build` ));

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB is running')
}).catch(error => {
    console.error('Error on massive', error)
})


const path = require('path')
app.get('*', (req, res)=>{
 res.sendFile(path.join(__dirname, '../build/index.html'));
})

const PORT = 4500;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} 🐱`)
})