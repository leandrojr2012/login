const Jwt = require('jsonwebtoken')

function eAdmin(req, res, next){
    try {
        let decoded = Jwt.verify(req.session.token, 'leandro');
        if(decoded){
            res.locals.usuarioLogado = decoded.idBd
            next()
        }
    } catch (e) {
        res.redirect('/login')
    }
}
    
module.exports = eAdmin