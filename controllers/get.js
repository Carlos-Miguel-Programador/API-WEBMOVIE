const express = require('express');

//IMPORTANDO O SCRIPT QUE RETORNA QUANTOS USUÁRIOS TEM NO BANCO DE DADOS
const n_users = require('../db/counter');

const router = express.Router();

router.get('/usuarios', async (req, res)=>{
    //OBTENDO O VALOR PASSADO PELO PARAMETRO pag=n    
    const {pag=1} = req.query;

        //IMPORTANDO O SCRIPT COM A TABELA
        const table = require('../db/table');

        //IMPORTANDO O SCRIPT COM A CONEXÃO COM BANCO DE DADOS
        const db = require('../db/connection');

        //VERIFICANDO SE A TABELA ESTÁ CRIADA CASO CONTRÁRIO ELA CRIA A TABELA
        db.sync()
        .then(()=>{

            table.count()
            .then(cadastrados=>{
                //VERIFICANDO SE HÁ USUÁRIOS CADASTRADOS NO BANCO DE DADOS
                if(cadastrados > 0){
                    const total_users = cadastrados;
                    const limit = 20;
                    let total_pages = Math.ceil(total_users/limit);
                    const first_value=(pag*limit)-limit;
                    const last_value=(limit);

                    //SELECIONA TODOS OS DADOS QUE ESTÃO NO BANCO DE DADOS
                    table.findAll({
                        limit: [first_value, last_value],
                        attributes: ['ID', 'Nome', 'Senha', 'Data_Inscricao']
                    }).then(usuarios=>{
                        //VERIFICA SE O NUMERO DE PÁGINA NÃO EXISTE
                        if(pag > total_pages){
                            return res.status(404).json({
                                resultado: "nenhum dados está disponível nesta página"
                            });
                        }

                        //CASO O NÚMERO DE PÁGINA EXISTA
                        return res.json({
                            usuarios,
                            paginas: total_pages,
                            pagina_atual: Number(pag),
                            cadastrados:  cadastrados
                        });
                    })
                    //SE OCORRER UM ERRO DURANTE O PROCESSO
                    .catch(()=>{
                        return res.status(404).json({
                            resultado: "Ocorreu um erro carregue a página!!!"
                        });
                    })
                }
                //CASO NÃO HAJA USUÁRIOS NO BANCO DE DADOS
                else{
                    return res.status(404).json({
                        resultado: "nenhum usuário cadastrado"
                    });
                }
            })

        })
        

        
      
});

module.exports = router;