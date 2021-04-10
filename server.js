// require('dotenv').config()

const express = require('express');
const app = express();

// const jwt = require('jsonwebtoken')

const rowdy = require('rowdy-logger')
const routesReport = rowdy.begin(app)

app.use (express.json())
app.use(require('cors')())

const createUser = async (req, res) => {
    try {
      const user = await models.user.create({
        email: req.body.email,
        password: req.body.password
      })

      res.json({ message: 'signup successful', user })
    } catch (error) {
      res.status(400)
      res.json({ error: 'email already taken' })
    }
  }
  app.post('/user', createUser)

  const login = async (req, res) => {
    try {
      const user = await models.user.findOne({
        where: {
          email: req.body.email
        }
      })

      if (user.password === req.body.password) {
        res.json({ message: 'login success', user})
      } else {
        res.status(401).json({ error: 'login failed' })
      }
    } catch (error) {
      res.status(400).json({ error: 'login failed' })
    }
  }
  app.get('/user/login', login)

  const tags = async (req, res) => {
    try {
      const user = await models.user.findOne({
        where: {
          email: req.body.email
        }
      })

      if (user.password === req.body.password) {
        res.json({ message: 'login success', user})
      } else {
        res.status(401).json({ error: 'login failed' })
      }
    } catch (error) {
      res.status(400).json({ error: 'login failed' })
    }
  }
  app.get('/user/tags', tags)

  const mood = async (req, res) => {
    try {
      const user = await models.user.findOne({
        where: {
          email: req.body.email
        }
      })

      if (user.password === req.body.password) {
        res.json({ message: 'login success', user})
      } else {
        res.status(401).json({ error: 'login failed' })
      }
    } catch (error) {
      res.status(400).json({ error: 'login failed' })
    }
  }
  app.get('/user/moods', mood)


  const deleteUser = async (req, res) => {
    try {
      const user = await models.user.findOne({
        where: {
          email: req.body.email
        }
      })

      if (user.password === req.body.password) {
        res.json({ message: 'delete success', user})
      } else {
        res.status(401).json({ error: 'delete failed' })
      }
    } catch (error) {
      res.status(400).json({ error: 'delete failed' })
    }
  }
  app.delete('/user/delete', deleteUser)

  const getlyrical = async (req, res) => {
    try {
      const user = await models.user.findOne({
        where: {
          email: req.body.email
        }
      })

      if (user.password === req.body.password) {
        res.json({ message: 'login success', user})
      } else {
        res.status(401).json({ error: 'login failed' })
      }
    } catch (error) {
      res.status(400).json({ error: 'login failed' })
    }
  }
  app.get('/user/getlyrical', getlyrical)


  const deletelyrical = async (req, res) => {
    try {
      const user = await models.user.findOne({
        where: {
          email: req.body.email
        }
      })

      if (user.password === req.body.password) {
        res.json({ message: 'login success', user})
      } else {
        res.status(401).json({ error: 'login failed' })
      }
    } catch (error) {
      res.status(400).json({ error: 'login failed' })
    }
  }
  app.delete('/user/deletelyrical', deletelyrical)


  const putlyrical = async (req, res) => {
    try {
      const user = await models.user.findOne({
        where: {
          email: req.body.email
        }
      })

      if (user.password === req.body.password) {
        res.json({ message: 'login success', user})
      } else {
        res.status(401).json({ error: 'login failed' })
      }
    } catch (error) {
      res.status(400).json({ error: 'login failed' })
    }
  }
  app.put('/user/putlyrical', putlyrical)







const port = process.env.PORT || 3001;

app.listen (port, () => {
    console.log(`Listening on port ${port}`)
routesReport.print()
})
