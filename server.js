const express = require('express');
const cors= require('cors');
const mysql= require('mysql');


const app = express();
//conaction to connect to mysql 
const db =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Giselle230',
    database: 'ecom_proj'
});
//now we are actually conecting it 
db.connect(err =>{
    if(err){
        return err
    }else{
        console.log("mysql db connection succesful.")
    }
})

//grab all of our products 
app.get('/Products', (req, res)=>{
    db.query('SELECT * FROM Products', (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.use(cors());
app.use(express.json());

app.listen(4002, ()=>{
    console.log(`server listening on port 4002`)
})