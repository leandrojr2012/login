const db = require('../db/_dataBase')
const bcryptjs = require('bcryptjs')
const flash = require('connect-flash')


async function cadastrarUsuario(nome, sobrenome, email,  nascimento, senha, confSenha){
    return new Promise(async ( resolve, reject) =>{

        const emailIgual = await db('cadastro').where({email})

        if(nome == '' || sobrenome == '' || email == '' || nascimento == '' || senha == '' || confSenha == ''){
            reject('Nenhum campo pode ficar em branco!')
            return;
        }else if(emailIgual.length > 0){
            reject('Email existente!')
            return
        }else if(senha != confSenha){
            reject('Senhas nao conferem!')
            return
        }
        else{   
            const senhas = bcryptjs.hashSync(senha, 8)
            await db.insert({nome, sobrenome, email, nascimento, senha:senhas})
            .into("cadastro")
            .then (data =>{
                resolve()
            }).catch(err => {
                console.log(err)
            })
        }
    })
}
/*inserirUsuario('leandro', '')

if(erros.length > 0 ){
    console.log(erros.length)
}*/

//console.log(Object.keys(erros).length)

//module.exports = erros
exports.erros

module.exports = cadastrarUsuario

