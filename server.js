let express = require('express');
let app = express();
let port = 3000;
let bodyparser = require('body-parser') ;

app.set( 'view engine','ejs') ;

let myobject = {
    nom : "monobjet" ,
    valeur : 10
}

app.use( '/views',express.static(__dirname + '/views')); //redirectviews
app.use('/js',express.static( __dirname + '/node_modules/jquery/dist'));
app.use('/js',express.static( __dirname + '/node_modules/@popperjs/core/dist/umd'));
app.use(express.static(__dirname + '/www'));

app.use(bodyparser.urlencoded({extended : false }));
app.use(bodyparser.json());

app.listen(port, () => {
    console.log('Le serveur est en route');
    console.log(`Serveur listening at http://localhost:${port}`);
})

app.get('/', (req , res, next) => {
    res.render('index.ejs',{monobjet : myobject});
});

app.post('/test',(req,res,next ) => {
    console.log(req.body.name); 
});



