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
  app.post('/', createUser)

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
  app.get('/login', login)

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
  app.get('/tags', tags)

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
  app.get('/moods', mood)


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
  app.delete('/:id/delete', deleteUser)

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
  app.get('/:id/getlyrical', getlyrical)


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
  app.delete('/:id/deletelyrical', deletelyrical)


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
  app.put('/:id/putlyrical', putlyrical)







const port = process.env.PORT || 3001;

app.listen (port, () => {
    console.log(`Listening on port ${port}`)
routesReport.print()
})
