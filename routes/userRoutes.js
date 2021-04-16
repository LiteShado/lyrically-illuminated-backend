
const userController = require('../controllers/userController')

const express = require('express')
const userRoutes = express.Router()

userRoutes.post('/', userController.create)
userRoutes.post('/logout',userController.logout)
userRoutes.post('/login',userController.login)
userRoutes.delete('/:id', userController.delete)
// userRoutes.get('/', userController.getNull)
userRoutes.get('/:id/profile',userController.profile)
userRoutes.get('/:id/mood',userController.mood)
userRoutes.get('/:id/tag',userController.tag)
userRoutes.put('/:id/edit',userController.update)

module.exports = userRoutes
