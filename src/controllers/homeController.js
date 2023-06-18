const db = require('../db/_dataBase')
//const eAdmin = require('../middleware/auth')

exports.index = (req, res) => {
    res.render('index')
}

/*exports.index = async (req, res) => {
    const rows = await db.select('idcadastro', 'nome')
    .from('cadastro')
    .where({'idcadastro':req.params.id})
res.render('indexLogin', {rows:rows})
}*/