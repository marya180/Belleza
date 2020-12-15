const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const contactoSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
    },
    correo: {
        type: String,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    },
    mensaje: {
        type: String,
        trim: true
    }
    
});

module.exports  = mongoose.model('Contacto', contactoSchema);
