var express = require('express');
var router = express.Router();
var axios = require('axios')

token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExMTExMjIyMyIsImxldmVsIjoyLCJlbnRpZGFkZSI6ImVudF9BM0VTIiwiZW1haWwiOiJwcmkyMDIwQHRlc3RlLnVtaW5oby5wdCIsImlhdCI6MTYxMDk4MzgyNiwiZXhwIjoxNjExMDEyNjI2fQ.wBvmfJOgvySbXUM5w_JwOGc4g1K8KOrORUj5cCThrw8tr2JUVEYbGxbNiSjcs58-8vAS7lw2s6RbPwgC-02RDe12rfOqchEfJt5MF9-TyGTeJi95zV-sYDZ5hn08Loop6sjQ64vqjmymdmYWppz9AbYJo74MqVRQJJJZloF3jq31MgN6YjShcEzDsaS3f1kec6bXsqw3M2dc1kXGJKab8cOgBMAQEyWXmFjK9vDhzFKeE-SvAfSG9ATsnf2CDzsT_6x_pdhB1CQm2Pa3PXKTOf9mQX6hFHz7T44TxAsob_YrvEFqTp9_xMONEz3LEEnukT3AHfK9v45V3lqoT6m5Dg"

router.get('/', function(req, res, next) {
  axios.get(' http://clav-api.di.uminho.pt/v2/classes?nivel=1&token=' + token)
    .then(resp => {
      res.render('index', { data: resp.data });
    }).catch(error => {
      res.write('<p> Falha a obter a lista... </p>');
      res.end();
    })
  
});

router.get('/classes/:id', function(req,res,next) {
  axios.get('http://clav-api.di.uminho.pt/v2/classes/c' + req.params.id + '?token=' + token)
    .then(resp => {
      console.log(resp.data)
      res.render('classes', {data: resp.data, previous: req.query.prev});
    }).catch(error => {
      res.write('<p> Falha a obter informação...</p>');
      res.end();
    })
})

module.exports = router;
