const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/',(req, res) => {
  res.render('home')
});



router.get('/reportes',(req, res) => {
  res.render('reportes')
});

router.get('/registroVenta',(req, res) => {
  res.render('registroVenta')
});


router.get('/proveedores',(req, res) => {
  fetch('http://localhost:7001/listaproveedores')
  .then(resp => resp.json())
  .then(resp => {
    res.render('proveedores', {
        resp
    })
  })
});

router.get('/adquisiciones',(req, res) => {
  res.render('adquisiciones')
});

router.get('/almacenamiento',(req, res) => {
  res.render('almacenamiento')
});

router.get('/cotizaciones',(req, res) => {
  res.render('cotizaciones')
});

router.get('/cuadroComparativo',(req, res) => {
  res.render('cuadroComparativo')
});

router.get('/actaAdjudicacion',(req, res) => {
  res.render('actaAdjudicacion')
});

router.get('/distribucion',(req, res) => {
  res.render('distribucion')
});

router.get('/inventarioFisico',(req, res) => {
  res.render('inventarioFisico')
});

router.get('/Vencimientos',(req, res) => {
  res.render('Vencimientos')
});

router.get('/MaxMin',(req, res) => {
  res.render('MaxMin')
});

router.get('/inventarioFisicoV',(req, res) => {
  res.render('inventarioFisicoV')
});

router.get('/suministrosFraccionales',(req, res) => {
  res.render('suministrosFraccionales')
});

router.get('/ajustesNegativos',(req, res) => {
  res.render('ajustesNegativos')
});

router.get('/RegistroAlmacen',(req, res) => {
  res.render('RegistroAlmacen')
});
 // medicamentos
var datosAsig;
router.get('/verAs', (req, res) => {
  fetch('http://localhost:7001/listaasig')
  .then(resp => resp.json())
  .then(resp => {
    datosAsig = resp
    res.redirect('/Medicamentos')
  })
});

router.get('/Medicamentos',(req, res) => {
  fetch('http://localhost:7001/listamed')
  .then(resp => resp.json())
  .then(resp => {
    res.render('Medicamentos', {
      resp,
      datosAsig
    })
  })
});

router.post('/regmed',(req, res) => {
  var datos = req.body;
  var enviar = {
  method: 'POST',
  body: JSON.stringify(datos),
  headers: {
    'Content-type' : 'application/json'
   }    
  };
  fetch('http://localhost:7001/medicamentos', enviar)
  .then(resp => resp.json())
  .catch(error => console.error('Error', error))
  .then(resp => {
    res.redirect('/verAs')
  })

});

router.get('/Articulos',(req, res) => {
  res.render('Articulos')
});

router.get('/Servicios',(req, res) => {
  res.render('Servicios')
});

router.get('/GrupoAsig',(req, res) => {
  fetch('http://localhost:7001/listaasig')
  .then(resp => resp.json())
  .then(resp => {
    res.render('GrupoAsig', {
        resp
    })
  })
});

router.post('/grupoAsig', (req, res) => {
  var datos = {
    codigo: req.body.codigo,
    descripcion: req.body.descripcion
  }
  var enviar = {
  method: 'POST',
  body: JSON.stringify(datos),
  headers: {
    'Content-type' : 'application/json'
   }    
  };
  fetch('http://localhost:7001/grupoasig', enviar)
  .then(resp => resp.json())
  .catch(error => console.error('Error', error))
  .then(resp => {
    res.redirect('/GrupoAsig')
  })

}); 

router.get('/Almacenes',(req, res) => {
  res.render('Almacenes')
});

router.get('/apertura',(req, res) => {
  res.render('apertura')
});



//apis
//router.post('/new-entry', (req, res) =>{
  //  console.log(req.body);
    //res.send('received');
//});

module.exports = router;