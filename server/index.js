const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const UC = require('./userController');
const PC = require('./postController');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(express.static( `${__dirname}/../build` ));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB is running')
}).catch(error => {
    console.error('Error on massive', error)
})

app.post('/api/auth/register', UC.registerUser);
app.get('/api/posts', PC.getPosts);
app.put('/api/post', PC.updatePost);

const path = require('path')
app.get('*', (req, res)=>{
 res.sendFile(path.join(__dirname, '../build/index.html'));
})

const PORT = 4500;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} 🐱`)
})