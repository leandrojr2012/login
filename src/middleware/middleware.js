exports.middlewareGlobal = (req, res, next) =>{
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    console.log('MIDDLEWARE')
    next()
}