const express = require('express');
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const usuarioController = require('./src/controllers/usuarioController')
const eAdmin = require('./src/middleware/auth')

route.get('/', homeController.index)
route.get('/logado/:id', homeController.index)
route.get('/cadastrar', usuarioController.cadastro)
route.get('/login', usuarioController.login)
route.get( '/loginOut', usuarioController.loginOut)
route.get('/listar/', eAdmin, usuarioController.lista)
route.post('/cadastrar', usuarioController.postCadastro)
route.post('/logar', usuarioController.postLogar)

module.exports = route