const Annotations = require("../models/AnnotationData"); //alterar conteudo da anotacao

module.exports = {
  async update(request, response) {
    const { id } = request.params;
    const { notes } = request.body;

    const annotation = await Annotations.findOne({ _id: id });

    if (notes) {
      annotation.notes = notes; //se no body alterar algo (true), atualiza o notes, sobscreve. se nao tiver nada nao altera., tem q ter algo no body

      await annotation.save();
    }

    return response.json(annotation);
  },
};
