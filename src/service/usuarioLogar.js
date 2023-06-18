const db = require('../db/_dataBase')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const SECRET = 'leandro'

async function loginUsuario(emailUser, senha){
    return new Promise(async ( resolve, reject) =>{

        const user = await db.select('idcadastro', 'nome', 'email', 'senha').from('cadastro').where({email: emailUser})

        let emailBd  
        let senhaBd
        let idBd 
        let data = new Date()

        for(let i=0; i<user.length; i++){
            if(user[i].email){
                emailBd = user[i].email
            }
        }

        for(let i=0; i<user.length; i++){
            if(user[i].senha){
                senhaBd = user[i].senha
            }
        }

        for(let i=0; i<user.length; i++){
            if(user[i].idcadastro){
                idBd = user[i].idcadastro
            }
        }

        if(emailUser == "" || senha == ""){
            reject('Nenhum campo pode ficar em branco!')
            return;
        }
        else if(emailBd !== emailUser){
            reject('Usuario ou senha incorreto! email nao existe')
        }
        else if(!(bcryptjs.compareSync(senha, senhaBd))){
            reject('Usuario ou Senha incorreto! senha incorreta')
        }
        else{            
            let token = jwt.sign({idBd}, SECRET, {
            expiresIn: 60
            })
            await db.insert({idBd, data})
            .into("login")
            .then (data =>{
               resolve(token + idBd)  
            }).catch(err => {
               console.log(err)
            })
            console.log(token + idBd)
        }
    })
}

module.exports = loginUsuario