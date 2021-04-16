
const userController = require('../controllers/userController')

const express = require('express')
const userRoutes = express.Router()

userRoutes.post('/', userController.create)
userRoutes.post('/logout',userController.logout)
userRoutes.post('/login',userController.login)
userRoutes.delete('/:userId', userController.delete)
// userRoutes.get('/', userController.getNull)
userRoutes.get('/profile',userController.profile)
userRoutes.get('/:id/mood',userController.mood)
userRoutes.get('/:id/tag',userController.tag)
userRoutes.put('/edit/:userId',userController.update)

module.exports = userRoutes
