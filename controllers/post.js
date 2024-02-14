const db = require('../db/connection');
const table = require('../db/table');
const counter = require('../db/counter');
const Express = require('express');

const rounter = Express();

rounter.post('/usuarios', async (req, res)=>{
    const recepted_data = req.body;

    await db.sync()
    .then(()=>{
        //VERIFICANDO SE OS DADOS JÁ EXISTEM NA TABELA
        const Users = table.findAll();
    
        Users
        .then(d=>{        
            let count = 0
            counter.then(length=>{
                for(count; count<length; count++)
                {
                    if(recepted_data.Nome.toLowerCase() == d[count].dataValues.Nome.toLowerCase()){
                        return res.json({
                            mensagem: "Este usuário já existe"
                        });
                    }
                }
                //INSERINDO DADOS NA TABELA
                table.create(
                    recepted_data
                );
                return res.json({
                    mensagem: "Usuário cadastrado com sucesso!!!",
                    recepted_data
                });
                
            })
        })
    })
    .catch(()=>{
        //CASO OCORRA UM ERRO DURANTE A INSERÇÃO
        return res.status(500).json({
            mensagem: "Não foi possível cadastrar!!!"
        });
    });
});

module.exports = rounter;