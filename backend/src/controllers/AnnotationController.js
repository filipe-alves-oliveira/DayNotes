//controllers: camada responsável por lidar com as requisições do usuário, ela q vai gerenciar todas as acoes realizadas vindas do front (client).
//responsavel por trabalhar nas acoes de resposta das nossas requisicoes de registro, criar, deletar anotacoes.

const { request } = require("express");
const Annotations = require("../models/AnnotationData");

module.exports = {
  async read(request, response) {
    //operacao externa, executar de forma assincrona, esperar uma resposta - bd assync, espera a info voltar do bd e popular nossa variavel.
    const annotationList = await Annotations.find(); //find - todas as infos do banco de dados
    return response.json(annotationList);
  },

  async create(request, response) {
    const { title, notes, priority } = request.body; //extrair do corpo da requisicao essas 3 variaveis.
    if (!notes || !title) {
      return response
        .status(400)
        .json({ Error: "Necessário um titulo/anotação." });
    }

    const annotationCreated = await Annotations.create({
      title,
      notes,
      priority,
    });
    return response.json(annotationCreated);
  },

  async delete(request, response) {
    const { id } = request.params;
    const annotationDeleted = await Annotations.findOneAndDelete({ _id: id });

    if (annotationDeleted) {
      return response.json(annotationDeleted);
    }

    return response
      .status(401)
      .json({ error: "Não foi encontrado o registro para deletar!" });
  },
};
