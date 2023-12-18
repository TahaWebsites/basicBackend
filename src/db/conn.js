const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:tahaistheboss@dev.zb2ylxs.mongodb.net/userdetails?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to database')
}).catch((err)=>{
    {
        console.log('errorrrrrrrrr')
    }
})