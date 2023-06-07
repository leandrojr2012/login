const loginUsuario = require('../service/usuarioLogar')
const cadastrarUsuario = require('../service/usuarioCadastrar')
//const {erros} = require('../service/usuarioLogar')
const Jwt = require('jsonwebtoken')
const db = require('../db/_dataBase')
let iduser


exports.cadastro = (req, res) => {
    res.render('cadastrar')
}

exports.login = (req, res) => {    
    res.render('logar'/*, {erros:erros}*/)
}

exports.loginOut = (req,res) => { 
req.session.destroy()
res.send('Obrigado! Visite novamente') 
}

exports.lista = async (req, res) => {
    const rows = await db.select('nome')
    .from('usuario')
    .where({'idusuario':iduser})
    res.render('listar', {rows})
    console.log(rows)
}

exports.postCadastro = (req, res) =>{
    
    const dados = req.body
    const nome = dados.nome
    const email = dados.email
    const senha = dados.senha

    cadastrarUsuario(nome,  email, senha)
    .then(()=>{
        return res.render('cadastrar')
    }).catch((err) => {console.log(err)
        return  res.status(400).json({
            erro:true,
            mensagem:err
        })
    })

}

exports.postLogar = (req, res) => {

    const emailUser = req.body.email
    const senha = req.body.senha

    loginUsuario(emailUser, senha)  
      .then(jwt =>{
        const id = jwt.slice(-1)
        iduser = Number(id)
        jwt = jwt.slice(0, jwt.length -1)
        req.session.token = jwt
        res.redirect('/')        
    }).catch((err) => {console.log(err)
        return  res.status(400).json({
            erro:true,
            mensagem:err
        })
    })
}