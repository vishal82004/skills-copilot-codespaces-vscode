//create a web server

//require the express module
const express = require('express');
const fs = require('fs');
//create a new web server
const app = express();

app.use(express.json());
//create a new route
app.get('/comments', (req, res) => {
  //read the comments.json file
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      //if there is an error, send a 500 internal server error
      res.status(500).send('An internal server error occurred');
    }
    //send back the data as a JSON object
    res.json(JSON.parse(data));
  });
});
//create a new route
app.post('/comments', (req, res) => {
  //read the comments.json file
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      //if there is an error, send a 500 internal server error
      res.status(500).send('An internal server error occurred');
    }
    //parse the data as a JSON object
    const comments = JSON.parse(data);
    //add the new comment to the comments array
    comments.push(req.body);
    //write the updated comments array back to the file
    fs.writeFile('comments.json', JSON.stringify(comments), (err) => {
      if (err) {
        //if there is an error, send a 500 internal server error
        res.status(500).send('An internal server error occurred');
      }
      //send a 201 created status code
      res.status(201).send('Comment added successfully');
    });
  });
});
//create a new route
app.get('/comments/:id', (req, res) => {
  //read the comments.json file
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      //if there is an error, send a 500 internal server error
      res.status(500).send('An internal server error occurred');
    }
    //parse the data as a JSON object
    const comments = JSON.parse(data);
    //find the comment with the specified id
    const comment = comments.find((c) => c.id === parseInt(req.params.id));
    //if the comment is not found, send a 404 not found status code