
const lyricalController = require('../controllers/lyricalController')

const express = require('express')
const lyricalRoutes = express.Router()

lyricalRoutes.post('/',lyricalController.create)

lyricalRoutes.get('/login',lyricalController.login)

lyricalRoutes.get('/tags',lyricalController.tags)

lyricalRoutes.get('/moods',lyricalController.moods)

lyricalRoutes.put('/:id/putlyrical',lyricalController.delete)

lyricalRoutes.delete('/:id/delete',lyricalController.delete)

lyricalRoutes.delete('/:id/deletelyrical',lyricalController.deletelyrical)


// lyricalRoutes.get('/:userId/getlyrical',lyricalController.search)

// lyricalRoutes.get('/search/:lyricalId',lyricalController.searchOne)






module.exports = lyricalRoutes
