const req  = require('request');
const foreCast =(longitude,lattitude,callback) =>{
const url = 'https://api.darksky.net/forecast/f2dcbbd9b799a53acece060db15c1b52/'+longitude+','+lattitude;
    req({url,json: true},(error,response)=>{
        if(error)
        {
             //console.log(error);
             callback(error,undefined);
        }   
        else
        {
         //.log(response.body.currently);
          callback(undefined,response.body.currently);
        }
    })
};

module.exports = foreCast;
 