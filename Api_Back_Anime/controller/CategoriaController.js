const express = require('express');

const router = express.Router();

const modelCategoria = require('../model/CategoriaModel');


router.get('/listarCategoria', (req, res) => {


    modelCategoria.findAll()
        .then(
            (categorias) => {
                return res.status(200).json(categorias);
            }
        ).catch(
            (erro) => {
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados da categoria',
                    erroBancoDados: erro
                });
            }
        );

});


router.get('/listarCategoria/:id', (req, res) => {

    let { id } = req.params;

    modelCategoria.findByPk(id)
        .then(
            (categoria) => {
                res.status(200).json(categoria);
            }
        ).catch(
            (erro) => {
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados de categoria',
                    erroBancoDados: erro
                });
            }
        );

});

router.post('/inserirCategoria', (req, res) => {


    let { nome_categoria } = req.body;


    modelCategoria.create(
        { nome_categoria }
    ).then(
        () => {
            return res.status(201).json({
                erroStatus: false,
                menssagemStatus: 'Categoria inserida com sucesso!'
            });
        }
    ).catch(
        (erro) => {
            return res.status(400).json({
                erroStatus: true,
                erroMessagem: 'Houve um erro ao cadastrar a categoria',
                erroBancoDados: erro
            });
        }
    );

});

router.put('/alterarCategoria', (req, res) => {

    let { id, nome_categoria } = req.body;

    modelCategoria.update(
        { nome_categoria },
        { where: { id } }
    ).then(() => {

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Categoria alterada com sucesso!'
        });

    }).catch(
        (erro) => {
            return res.status(400).json({
                erroStatus: true,
                erroMessagem: 'Houve um erro ao alterar a categoria',
                erroBancoDados: erro
            });
        }
    );

});

router.delete('/excluirCategoria/:id', (req, res) => {

    let { id } = req.params;

    modelCategoria.destroy(
        { where: { id } }
    ).then(() => {

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Categoria excluida com sucesso!'
        });

    }).catch(
        (erro) => {
            return res.status(400).json({
                erroStatus: true,
                erroMessagem: 'Houve um erro ao excluir a categoria',
                erroBancoDados: erro
            });
        }
    );

});

module.exports = router;