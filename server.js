const express=require("express");
const app=express();

// const locations=[]

const locationRoute=require('./routes/Location')
app.use('/location', locationRoute)


app.set('view-engine', 'ejs' )

app.use(express.urlencoded({extended:false}) ) 

app.get('/', (req, res)=>{
    res.render("home.ejs")
})


app.post('/add_location', (req, res)=>{
    res.render('location_add.ejs', {location:req.body.location, adress:req.body.adress})
})


app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});

