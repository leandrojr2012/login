exports.middlewareGlobal = (req, res, next) =>{
    //res.locals.erros = req.flash('erros')
    console.log('MIDDLEWARE')
    next()
}