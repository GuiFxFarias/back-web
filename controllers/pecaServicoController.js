const pecaServicoModel = require("../models/pecaServicoModel.js");

class PecaServController {
  // Método para criar um novo serviço
  async newPecaService(req, res) {
    try {
      // Validação básica dos dados recebidos
      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
          sucesso: false,
          erro: "Dados do serviço não fornecidos",
        });
      }

      const resposta = await pecaServicoModel.criarServico(req.body);

      return res.status(201).json({
        sucesso: true,
        mensagem: "Serviço criado com sucesso",
        dados: resposta,
      });
    } catch (erro) {
      console.error("Erro ao criar serviço:", erro);
      return res.status(500).json({
        sucesso: false,
        erro: erro.message,
      });
    }
  }
}

module.exports = new PecaServController();
