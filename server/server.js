
var cors = require('cors');
const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(cors()) 
app.use(express.json());


const db = mysql.createConnection({
    user: 'root',
    host: "localhost",
    password: 'password',
    database: "loginsystem"
});

app.post('/create', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        'INSERT INTO users (username, email, password) VALUES (?,?,?)', 
        [username, email, password], (err, result) => {
            if(err){
                console.log(err)
            } else {
                res.send("Values Inserted")
            }
        }
    );
});

app.listen(3000, () => {
    console.log("server is running");
})