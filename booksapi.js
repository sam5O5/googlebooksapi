const express = require('express');
const axios = require('axios');
// var bodyparser = require('body-parser');
// const { urlencoded } = require('body-parser');
const app = express();

const PORT = 5500;
let data;
let dataa;
let isbn = "9781480995468"; 

app.use(express.json());
app.use(express.urlencoded());
// const search =


// app.use(express.static('public'));

// app.get('/index.html', (req, res) =>{
//    res.sendFile( __dirname + '/index.html')
// }) 
 
// app.post('/index.html', (req, res) => {
//    console.log(req.body);
// })
// let isbn = search.value
let url = "https://www.googleapis.com/books/v1/volumes?q=" + isbn;


const getData = async () => {
   try{
      data = await axios.get(url);
      const num = data.data.totalItems;
      console.log("Number of books found are : " + num)
      const id = data.data.items[0].id;
      const title = data.data.items[0].volumeInfo.title;
      const authors = data.data.items[0].volumeInfo.authors[0];
      const pageCount = data.data.items[0].volumeInfo.pageCount;
      const category = data.data.items[0].volumeInfo.categories;
      const maturityrating = data.data.items[0].volumeInfo.maturityRating;

      console.log("id is :"+ id);
      console.log("title is :" +title);
      console.log("authors are :" +authors);
      console.log("pagecount is :"+ pageCount);
      console.log("category :" + category);
      console.log("maturityrating is :"+ maturityrating);
   }
   catch(error){
      console.log("Error : ", error);
   }
}

getData()

// app.get("/", (req, res) => {
//    res.send(data.totalItems);
// })

app.listen(PORT, function (){
   console.log(`Server is running on port PORT:${PORT}`);
})