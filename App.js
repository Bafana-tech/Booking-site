/**
 * author: Bafana Mhlahlo
 * 28 Nov 2021
 * Creating a server and send in our templates
 */

// Setting express
const express = require('express');
const { title } = require('process');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

//express app
const app = express();

//set engine
app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 

// parse application/json
app.use(bodyParser.json())

//Listening to requests
Port =process.env.PORT || 3000 
app.listen(Port);



app.get('/', (req,res) => {
    res.render('index',{title: 'Check Availability'});
});



app.get('/about', (req,res) => {
    res.render('about', {title: 'Know about us'});
});

app.get('/details', (req,res) => {
    res.render('details', {title: 'Customer details'});
})

app.get('/enquire', (req,res) =>{
    res.render('enquries');
});

app.post('/send', (req,res) =>{

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'thewebsitec@gmail.com',
          pass: 'minobafana@1'
        }
      });

      var email = req.body.email;
      var name = req.body.name;
      var mailOptions = {
        from: 'thewebsitec@gmail.com',
        to: email,
        subject: 'Booking Confirmation',
        text: 'Hey ' + name + '\n\nYou have successfully booked a room with us.\nYour ref no 4561546DBDXA present it upon arrival.\nPrice is R730 per night.\n\nKind regards\nBafana Mhlahlo',
      };    

});

// 404 page redirect
app.use((req, res) =>{
    res.status(404).render('404');
});
