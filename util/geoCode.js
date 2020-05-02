const req  = require('request');

const GeoCode =(address,callback) =>{
    const urlMapBox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYWpkZXY5MCIsImEiOiJjazdsdGRuZDYwYTIzM3BzMndvbnFqZHgyIn0.x7AuiTlP44Ns3ZAn-vfWkA';
    req({url:urlMapBox,json:true},(error,response)=>{
    if(error){
        callback('error while connecting',undefined);
    }
    else if(response.body.features.length ===0){
        callback('invalid location',undefined);
    }
    else 
    {
        callback(undefined,{
            longitude:response.body.features[0].center[0],
            lattitude:response.body.features[0].center[1],
            location: response.body.features[0].place_name
        });
    }
});
}



module.exports= GeoCode;