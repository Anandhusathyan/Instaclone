const postRoute = require('express').Router()
// const PostModel = require('./models/postDataModal.js')


postRoute.get('/PostData', (req,res) => {
    console.log('done')
    res.send('working')
})
module.exports = postRoute;