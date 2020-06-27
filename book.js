const express = require('express')
const bodyParser = require('body-parser')
var mysql = require('mysql')

const app = express();

var connection=mysql.createConnection({
    host: 'localhost',
    user: 'narattom',
    password: '98714r',
    database: 'books'
});

connection.connect(function(err){
    if(err) {
        throw err;
    }
    console.log("Connected");
})

app.use(bodyParser.json());

app.post('/add_book',(req,res)=>{
    console.log(req.body)
    let {book_name,author,} =req.body;

    if(!book_name) return res.status(400).json('book name can not be blank');
    if(!author) return res.status(400).json('author can not be blank');

    var data =[
        [book_name,author]
    ]
    var query=connection.query("insert into book(name,author) values ? ",[data],
    function(err,rows){
        if(err){
            res.status(400).json('sorry! unable to add');
            console.log("error insering %s",err);
        }
        res.status(200).json('book added successfully');
        
    });
});

app.get('/books',(req,res)=>{
    var query=connection.query("select * from book", 
    function(err,rows){
        if(err){
            res.status(400).json('sorry! could not get the data');
        }
        console.log(JSON.stringify(rows));
        res.status(200).json(rows);

        
    });

});

app.listen(3000,()=>{
    console.log('books app is running on port 3000')
})


