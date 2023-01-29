const mongoose = require("mongoose"); //Cada esquema é mapeado para uma coleção do MongoDB e define a forma dos documentos dentro dessa coleção.

const AnnotationDataSchema = new mongoose.Schema({
  title: String,
  notes: String,
  priority: Boolean,
});

mongoose.set("strictQuery", true);

module.exports = mongoose.model("Annotations", AnnotationDataSchema); // atribuind a estrutura do model com o nome annotation //exportar para ser visivel para todo node.js
