const express = require('express')
const router = express.Router();
const path = require('path');
const app = express()
const port = 3000

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
  });

var brands = ['Acura', 'Alfa Romeo', 'AMC', 'Aston Martin', 'Audi',
'Avanti', 'Bentley', 'BMW', 'Buick', 'Cadillac', 'Chevrolet',
'Chrysler', 'Daewoo', 'Daihatsu', 'Datsun', 'DeLorean', 'Dodge',
'Eagle', 'Ferrari', 'FIAT', 'Fisker', 'Ford', 'Freightliner', 'Geo',
'GMC', 'Honda', 'HUMMER', 'Hyundai', 'Infiniti', 'Isuzu', 'Jaguar',
'Jeep', 'Kia', 'Lamborghini', 'Lancia', 'Land Rover', 'Lexus',
'Lincoln', 'Lotus', 'Maserati', 'Maybach', 'Mazda', 'McLaren',
'Mercedes­Benz', 'Mercury', 'Merkur', 'MINI', 'Mitsubishi', 'Nissan',
'Oldsmobile', 'Peugeot', 'Plymouth', 'Pontiac', 'Porsche', 'RAM',
'Renault', 'Rolls­Royce', 'Saab', 'Saturn', 'Scion', 'smart', 'SRT',
'Sterling', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Triumph',
'Volkswagen', 'Volvo', 'Yugo'];

var arrayLength = brands.length;


router.get('/cars', function(req, res){
    var queryparam = req.originalUrl;
    queryparam = queryparam.split("?");
    queryparam = queryparam[1]
    res.send(search(queryparam));
});

function search(id) {
    var new_brands = []
    for (var i = 0; i < arrayLength; i++){
        if((brands[i].toLowerCase()).includes(id.toLowerCase())){
            new_brands.push(brands[i]);
        }

    }
    return(new_brands);

};

app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))