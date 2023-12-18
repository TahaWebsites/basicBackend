const express = require('express');
const mongoose = require('mongoose');
const register = require('./src/models/register')
const app = express();
const ejs = require('ejs');
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.set('view engine', 'ejs')


mongoose.connect('mongodb+srv://admin:tahaistheboss@dev.zb2ylxs.mongodb.net/UserDatabase?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to database')
}).catch((err)=>{
    {
        console.log('errorrrrrrrrr')
    }
})

app.get('/', (req, res)=>{
    res.render('login')
})

app.get('/signup', (req, res)=>{
    res.render('signup')
})

app.post('/signup', (req, res)=>{
    const data = new register({
        username: req.body.username,
        password: req.body.password
    })
    const registered = data.save();
    console.log('Data Added')
})

app.post('/login', async (req, res) => {
    const password = req.body.password;
  
    try {
      const check = await register.findOne({ username: req.body.username });
  
      if (check) {
  
        if (password === check.password) {
          res.render('home', { person: req.body.username });
        } else {
          res.send('Incorrect password');
        }
      } else {
        res.send('User does not exist');
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  

app.listen(port, ()=>{
    console.log('hosted on server 3000')
})