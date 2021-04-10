
const lyricalController = require('../controllers/lyricalController')

const express = require('express')
const lyricalRoutes = express.Router()

lyricalRoutes.post('/user',lyricalController.create)

lyricalRoutes.get('/user/login',lyricalController.login)

lyricalRoutes.get('/user/tags',lyricalController.tags)

lyricalRoutes.get('/user/moods',lyricalController.moods)

lyricalRoutes.put('/user/putlyrical',lyricalController.putlyrical)

lyricalRoutes.get('/user/getlyrical',lyricalController.getlyrical)

lyricalRoutes.delete('/user/delete',lyricalController.delete)

lyricalRoutes.delete('/user/deletelyrical',lyricalController.deletelyrical)


// lyricalRoutes.get('/:userId/getlyrical',lyricalController.search)

// lyricalRoutes.get('/search/:lyricalId',lyricalController.searchOne)




module.exports = lyricalRoutes
