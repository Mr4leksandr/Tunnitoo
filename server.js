const express = require("express");
const request = require("request");

const app = express();
app.set('view engine', "ejs");
app.use(express.static("public"));

app.get('/', function(req, res){
request(`https://restcountries.eu/rest/v2/name/eesti`, function(error, response, body){
        let data = JSON.parse(response.body);

        res.render('index', {
            name: data[0].name,
            region: data[0].region,
            subregion: data[0].subregion,
            callingCodes: data[0].callingCodes[0],
            languages: data[0].languages[0].name,
            population: data[0].population,
            topLevelDomain: data[0].topLevelDomain[0],
            alpha3Code: data[0].alpha3Code,
            currencies: data[0].currencies[0].symbol,
            flag: data[0].flag
        });
    });
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started at 3000")
});