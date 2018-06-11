// Cities 

const cork = []; // Cork, Ireland 
const nyc = []; // NYC, United States
const mumbai = []; // Mumbai, India
const kathmandu = []; // Kathmandu, India
const ubud = []; // Ubud, Bali, Indonesia   

fetch('http://api.openweathermap.org/data/2.5/group?id=2965139,5128581,1283240,1275339,1622846&units=metric&APPID=c0653f0b4a60be8b7ba25f3324b59d78')
    .then(response => {
        return response.json();
    })
    .then(myJson => {
        cork.push(myJson.list['0']);
        nyc.push(myJson['1']);
        kathmandu.push(myJson['2']);
        mumbai.push(myJson['3']);
        ubud.push(myJson['4']);
    }).then(() => {

        console.log(cork['0'].name);

    });