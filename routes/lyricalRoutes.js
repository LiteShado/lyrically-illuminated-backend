
const express = require('express')
const lyricalRoutes = express.Router()

const lyricalController = require('../controllers/lyricalController')

lyricalRoutes.get('/user/tags',lyricalController.tags)

lyricalRoutes.get('/user/moods',lyricalController.moods)


module.exports = lyricalRoutes
