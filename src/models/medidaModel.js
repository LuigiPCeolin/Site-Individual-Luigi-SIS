var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {
    instrucaoSql = `select fkTitulo, count(fkTitulo) as 'qtd' from votosTitulos group by fkTitulo;  `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas
}