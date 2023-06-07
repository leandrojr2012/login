const Jwt = require('jsonwebtoken')

function eAdmin(req, res, next){
    try {
        let decoded = Jwt.verify(req.session.token, 'leandro');
        if(decoded){
            next()
        }
    } catch (e) {
        res.redirect('/login')
    }
}
    
module.exports = eAdmin




















//const {promisify} = require('util')
//const {token} = require('../service/usuarioLogar')


    /*if(!authorization){
        return res.status(400).json({
            erro:true,
            mensagem: "Erro: Necesario realizar o login para acessar essa pagina! Falta o teken"
        })
    }

    const [, token] = authorization.split(' ')

    try{
        const dados =jwt.verify(token, 'leandro' )
        const {id, email} = dados
        req.idusuario = id
        req.email = email
        return next()
    }catch(e){
        return res.status(401).json({
            erro:true,
            mensagem: "Erro: Necesario realizar o login para acessar essa pagina! Falta o teken"})
     }*/


/*module.exports = {
    eAdmin: async function (req, res, next){
        const authHeaders = req.headers.authorization
        console.log(authHeaders)
        if(!authHeaders){
            return res.status(400).json({
                erro:true,
                mensagem: "Erro: Necesario realizar o login para acessar essa pagina! Falta o teken"
            })
        }

        try{
            const decode = await promisify(jwt.verify)(token, "leandro")
            req.
        }catch(err){
            console.log(err)
        }
    }
}*/