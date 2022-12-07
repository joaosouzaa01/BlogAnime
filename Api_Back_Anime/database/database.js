const Sequelize = require('sequelize');

    const connection = new Sequelize(
        'api_anime_bd',
        'root',
        '',
        {
            host: 'localhost',
            dialect: 'mysql'
        }
    );

    // NO MYSQL EXECUTAR OS SEGUINTES COMANDO PARA CRIAR O BANCO
    // CREATE DATABASE api_anime_bd;
    // USE api_anime_bd

module.exports = connection;