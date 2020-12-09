const Producto = require('../models/Productos');

exports.principal= (req, res) => {
    res.render('index');
},

exports.formulario= (req, res) => {
    res.render('formulario.html');
    
},
exports.contacto= (req, res) => {
    
    res.render('contacto.html');
    
};


exports.nuevoProducto = async (req, res, next )  => {

   
    const producto = new Producto(req.body);
    
    try {
        await producto.save();
        res.json({ mensaje : 'El producto se agregó correctamente'}); 
    } catch (error) {
        console.log(error);
        next();
    }
}



exports.obtenerProducto = async (req, res, next) => {
    try {
        const producto = await Producto.find({});
        res.json(producto);
    } catch (error) {
        console.log(error);
        next();
    }
}


exports.obtenerProducto = async (req, res, next) => {
    try {
        const producto = await Producto.findById(req.params.id);
        res.json(producto);
    } catch (error) {
        console.log(error);
        next();
    }
}


exports.actualizarProducto = async (req, res, next) => {
    try {
        const producto = await Producto.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json(producto);
    } catch (error) {
        console.log(error);
        next();
    }
}


exports.eliminarProducto = async(req, res, next) => {
    try {
        await Producto.findOneAndDelete({_id : req.params.id});
        res.json({mensaje: 'El producto fue eliminado'})
    } catch (error) {
        console.log(error);
        next();
    }
}
exports.nuevoContacto = async (req, res, next )  => {

   
    const producto = new Producto(req.body);
    
    try {
        await producto.save();
        res.json({ mensaje : 'El contacto se agregó correctamente'}); 
    } catch (error) {
        console.log(error);
        next();
    }
}



exports.obtenerContacto = async (req, res, next) => {
    try {
        const producto = await Producto.find({});
        res.json(producto);
    } catch (error) {
        console.log(error);
        next();
    }
}


exports.obtenerContacto = async (req, res, next) => {
    try {
        const producto = await Producto.findById(req.params.id);
        res.json(producto);
    } catch (error) {
        console.log(error);
        next();
    }
}


exports.actualizarContacto = async (req, res, next) => {
    try {
        const producto = await Producto.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json(producto);
    } catch (error) {
        console.log(error);
        next();
    }
}


exports.eliminarContacto = async(req, res, next) => {
    try {
        await Producto.findOneAndDelete({_id : req.params.id});
        res.json({mensaje: 'El contacto fue eliminado'})
    } catch (error) {
        console.log(error);
        next();
    }
}