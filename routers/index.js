const express = require('express');
const router = express.Router();


//importar el controlador
const controlador=require('../controllers/controlador');



module.exports = function () {

    //rutas del servido
    router.get('/', controlador.principal);
    router.use('/formulario', controlador.formulario);
    router.get('/contacto', controlador.contacto);


     router.post('/pedido', controlador.nuevoProducto);

    
    router.get('/pedido',
    controlador.obtenerProducto
    );
 
    router.get('/pedido/:id',
    controlador.obtenerProducto
    )

    
    router.put('/pedido/:id',
    controlador.actualizarProducto
    );


    router.delete('/pedido/:id',
    controlador.eliminarProducto
    );


   
     router.post('/contacto', controlador.nuevoContacto);

    router.get('/contacto',
    controlador.obtenerContacto
    );
    
    router.get('/producto/:id',
    controlador.obtenerContacto
    )

    
    router.put('/contacto/:id',
    controlador.actualizarContacto
    );

   
    router.delete('/contacto/:id',
    controlador.eliminarContacto
    );


    
    return router;
}