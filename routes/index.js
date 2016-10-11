module.exports = function(app) {
    app.get('/', (req, res) => {
    
    var resObj = {
        'IP' : req.headers['x-forwarded-for'],
        'browser' : req.headers['user-agent'],
        'language' :  req.headers['accept-language'].split(';')[0]  
    }

   res.end(JSON.stringify(resObj))
})
}