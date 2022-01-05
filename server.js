let express = require('express');
let app = express();
let port = 3000;
let bodyparser = require('body-parser') ;

app.set( 'view engine','ejs') ;

let myobject = {
    best : 0 ,
    current : 0
}

app.use( '/views',express.static(__dirname + '/views')); //redirectviews
app.use(express.static(__dirname + '/www'));

app.use(bodyparser.urlencoded({extended : false }));
app.use(bodyparser.json());

app.listen(port, () => {
    console.log('Le serveur est en route');
    console.log(`Serveur listening at http://localhost:${port}`);
})

app.get('/', (req , res, next) => {
    res.render('index.ejs',{best : myobject});
    res.render('index.ejs',{current : myobject});
});

app.post('/test',(req,res,next ) => {
    console.log(req.body.bestsc);
    console.log(req.body.currentsc); 
    myobject = {
        best : req.body.bestsc ,
        current : req.body.currentsc
    }
    res.redirect('/');
});




