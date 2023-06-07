const db = require('../db/_dataBase')
//const eAdmin = require('../middleware/auth')

exports.index = (req, res) => {
    res.render('index')
}

/*exports.index = async (req, res) => {
    const rows = await db.select('idusuario', 'nome')
    .from('usuario')
    .where({'idusuario':req.params.id})
res.render('index', {rows:rows, eAdmin: eAdmin})
}*/