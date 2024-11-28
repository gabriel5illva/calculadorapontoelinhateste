const mysql = require('mysql2');

// 1. Configuração da conexão
const connection = mysql.createConnection({
    host: 'localhost',       
    user: 'root',            
    password: 'sua_senha',   
    database: 'UserProjectsDB'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados com sucesso!');
});