
const userController = require('../controllers/userController')

const express = require('express')
const userRoutes = express.Router()

userRoutes.post('/user', userController.create)
// userRoutes.post('/user', userController.getUser)
userRoutes.post('/user/login',userController.login)
// userRoutes.delete('/user/:id', userController.delete)
// userRoutes.get('/:userId/getlyrical',userController.getlyrical)
// userRoutes.delete('/:id', userController.deletelyrical)
// userRoutes.put('/:userId/putlyrical', userController.putlyrical)
// userRoutes.get('/:userId/tags',userController.tags)
// userRoutes.get('/:userId/moods',userController.moods)
