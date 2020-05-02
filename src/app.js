const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
console.log(__dirname);
console.log(__filename);

//folders 
const publicDirName = path.join(__dirname,'../public');
const templatePath = path.join(__dirname,'../templates/views');
const partilaPath = path.join(__dirname,'../templates/partials');
const foreCast = require('../util/foreCast');
const geoCode = require('../util/geoCode');

//static directory
app.use(express.static(publicDirName));

//register partials
hbs.registerPartials(partilaPath);

// handlebars config
app.set("view engine","hbs")
app.set("views",templatePath)



app.get('',(req,res) => {
    res.render('index',{
         title:"ok123",
         name: "msd",
         cretatedByName: "srt"
    });
});

app.get('/weather',(req,res) => {
    //res.render('weather',{
    //    title:"ok123",
    //    cretatedByName: "srt1"
    //});
    const location = req.query.location;
    console.log("location="+location);
    if(location){
        geoCode(location,(error,{longitude,lattitude,location}) =>{
            console.log('location='+ location);
        
            foreCast(longitude,lattitude,(error,data)=>{
                console.log('error='+error);
                console.log('data='+JSON.stringify(data));
                res.send({
                    foreCast : data.summary,
                    location: location
                });

            })
        });
    }
    else{
        res.send({
            error : "invalid location"
        });
    }
});

app.get('/about',(req,res) => {
    res.render('about',{
        title:"ok123",
        cretatedByName: "srt2"
    });
});

app.get('/help',(req,res) => {
    res.render('help',{
        title:"ok123",
        cretatedByName: "srt3"
    });
});

app.get('/*',(req,res) => {
    res.send("404, Not found");
});

app.listen(5000, () => {
    console.log('server started in port 5000');
});