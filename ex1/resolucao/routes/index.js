var express = require('express');
var router = express.Router();
const Casamento = require('../controllers/casamento')

// alinea 1,3,4,5
router.get('/casamentos', function(req, res, next) {
    if (req.query.nome)
    {
      Casamento.consultarNome(req.query.nome)
        .then(dados => res.status(200).jsonp(dados))
        .catch(e => res.status(500).jsonp({error:e}))
    }

    else if (req.query.byAno)
    {
      Casamento.consultarByAno()
        .then(dados => res.status(200).jsonp(dados))
        .catch(e => res.status(500).jsonp({error:e}))
    }
    
    else if (req.query.ano)
    {
      Casamento.consultarAno(req.query.ano)
        .then(dados => res.status(200).jsonp(dados))
        .catch(e => res.status(500).jsonp({error:e}))
    }

    else
    {
      Casamento.listar()
        .then(dados => res.status(200).jsonp(dados))
        .catch(e => res.status(500).jsonp({error:e}))
    }
    
});

//alinea 2
router.get('/casamentos/:id', function(req,res,next) {
    Casamento.consultar(req.params.id)
      .then(dados => res.status(200).jsonp(dados))
      .catch(e => res.status(500).jsonp({error:e}))
})



module.exports = router;
