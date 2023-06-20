const loginUsuario = require('../service/usuarioLogar')
const cadastrarUsuario = require('../service/usuarioCadastrar')
const Jwt = require('jsonwebtoken')
const db = require('../db/_dataBase')
let error_msg


exports.cadastro = (req, res) => {  
    res.render('cadastrar', {error_msg})
}

exports.login = (req, res) => {
    res.render('logar', {error_msg}/*, {erros}*/)
}

exports.loginOut = (req,res) => { 
req.session.destroy()
res.send('Obrigado! Visite novamente') 
}

exports.lista = async (req, res) => {
    const rows = await db.select('nome')
    .from('cadastro')
    .where({'idcadastro':res.locals.usuarioLogado})
    res.render('listar', {rows, usuarioLogado: res.locals.usuarioLogado ?? false
    })
}

exports.postCadastro = (req, res) =>{
    
    const dados = req.body
    const nome = dados.nome
    const sobrenome = dados.sobrenome
    const email = dados.email
    const nascimento = dados.nascimento
    const senha = dados.senha
    const confSenha = dados.confirmaSenha

    cadastrarUsuario(nome, sobrenome, email, nascimento, senha, confSenha)
    .then(()=>{
        return res.redirect('/') 
    }).catch((erros) => {console.log(erros)
        error_msg = erros
        return res.redirect('cadastrar')
    })
}

exports.postLogar = (req, res) => {

    const emailUser = req.body.email
    const senha = req.body.senha

    loginUsuario(emailUser, senha)  
      .then(jwt =>{
        req.session.token = jwt
        res.redirect('/')        
    }).catch((erros) => {console.log(erros)
        error_msg = erros
        return  res.redirect('login')
       
    })
}