
const userController = require('../controllers/userController')

const express = require('express')
const userRoutes = express.Router()

userRoutes.post('/user', userController.create)
userRoutes.post('/user/logout',userController.logout)
userRoutes.post('/user/login',userController.login)
userRoutes.get('/:id', userController.getUser)
userRoutes.get('/', userController.getNull)
userRoutes.get('/user/profile',userController.profile)
userRoutes.get('/user/mood',userController.mood)
userRoutes.get('/user/tag',userController.tag)
userRoutes.put('/user/edit',userController.update)
userRoutes.delete('/user/:userId/delete',userController.delete)

module.exports = userRoutes
