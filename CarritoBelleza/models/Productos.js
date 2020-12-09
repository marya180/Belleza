const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    imagen: {
        type: String,
        trim: true,
    },
    titulo: {
        type: String,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    precio: {
        type: String,
        trim: true
    },
    cantidad: {
        type: String,
        trim: true
    }
    
});

module.exports  = mongoose.model('Producto', productoSchema);
