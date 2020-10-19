import express from 'express';
import bodyParser from 'body-parser';
import 'express-async-errors'
import path from 'path';
import {Pergunta} from './models/Pergunta'

// import models from './models';

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    Pergunta.findAll({raw: true, order: [
        ['id', 'DESC']
    ]}).then((perguntas) => {
        res.render("index", {
            perguntas: perguntas
        });
    })
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
})

app.post('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;4
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/');
    });

});

app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id;
    Pergunta.findOne({
        where: { id: id }
    }).then(pergunta => {
        if(pergunta != undefined) {
            res.render("pergunta", {
                pergunta: pergunta
            })
        } else {
            res.redirect("/")
        }
    })

})

app.listen(3334, () => {
    console.log("App rodando");
});
