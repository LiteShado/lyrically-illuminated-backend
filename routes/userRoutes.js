
const userController = require('../controllers/userController')

const express = require('express')
const userRoutes = express.Router()

userRoutes.post('/', userController.create)
userRoutes.post('/login',userController.login)
userRoutes.delete('/:id/delete', userController.delete)
userRoutes.get('/:id/getlyrical',userController.getlyrical)
userRoutes.delete('/:id/deletelyrical', userController.deletelyrical)
userRoutes.put('/:id/putlyrical', userController.putlyrical)
userRoutes.get('/tags',userController.tags)
userRoutes.get('/moods',userController.moods)
