'use strict';

import mongoose from 'mongoose';

var ChildSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  fecha_nacimiento: Date,
  usuario: String,
  active: Number
});

export default mongoose.model('Child', ChildSchema);
