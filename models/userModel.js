const conexao = require("../conexao.js");

class UserModel {
  executaQuery(sql, parametros) {
    return new Promise((res, rej) => {
      conexao.query(sql, parametros, (error, results) => {
        if (error) {
          console.log("Erro na query: " + error);
          return rej(error);
        }
        return res(results);
      });
    });
  }

  buscarUsers(email, senha) {
    const sql = `SELECT * FROM usuarios WHERE Email = ? AND Senha = ?`;
    return this.executaQuery(sql, [email, senha]);
  }

  // atualizar(atendimentoAtualizar, id) {
  //   const sql = "UPDATE atendimentos SET ? WHERE id = ?";
  //   return this.executaQuery(sql, [atendimentoAtualizar, id]);
  // }

  // deletar(id) {
  //   const sql = "DELETE FROM atendimentos WHERE id = ?";
  //   return this.executaQuery(sql, id);
  // }
}

module.exports = new UserModel();
