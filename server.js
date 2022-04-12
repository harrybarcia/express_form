const express=require("express");
const app=express();
const bodyParser=require('body-parser');

// middleware
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.render("index.ejs")
})

const userRoute=require('./routes/User');
app.use('/user', userRoute);


app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});
