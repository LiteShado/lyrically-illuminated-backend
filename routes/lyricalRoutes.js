
const lyricalController = require('../controllers/lyricalController')

const express = require('express')
const lyricalRoutes = express.Router()

lyricalRoutes.post('/search/:lyrical',lyricalController.search)

lyricalRoutes.post('/:userId/save/:lyricalId', lyricalController.save)

lyricalRoutes.get('/search/:lyricalId',lyricalController.searchOne)




module.exports = lyricalRoutes
