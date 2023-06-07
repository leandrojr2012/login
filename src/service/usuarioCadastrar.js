const db = require('../db/_dataBase')
const bcryptjs = require('bcryptjs')
//const flash = require('connect-flash')


//let erros = []
async function cadastrarUsuario(nome, email, senha){
    return new Promise(async ( resolve, reject) =>{

        const nomeIgual = await db('usuario').where({nome})
        const emailIgual = await db('usuario').where({email})

        if(nome == "" || email == "" || senha == ""){
            reject('Nenhum campo pode ficar em branco!')
            //erros.push('Nenhum campo pode ficar em branco!')
            return;
        }
        else if(nomeIgual.length > 0){
            reject('Nome existente!')
        }
        else if(emailIgual.length > 0){
            reject('Email existente!')
        }
        /*else if(erros.length > 0){ 
        req.flash('erros', erros)
        req.session.save(function(){
           return res.redirect('back')
        })
        return
        }*/
        else{   
            const senhas = bcryptjs.hashSync(senha, 8)
            await db.insert({nome, email, senha:senhas})
            .into("usuario")
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

module.exports = cadastrarUsuario

