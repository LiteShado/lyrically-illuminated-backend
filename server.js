// require('dotenv').config()
// const userRoutes = require('./routes/userRoutes')

// const jwt = require('jsonwebtoken')
// const userRoutes = require('./routes/userRoutes')

const express = require('express')
const app = express()

const rowdy = require('rowdy-logger')
const routesReport = rowdy.begin(app)

app.use(express.json())
app.use(require('cors')())

const models = require('./models')

// app.use('/users', userRoutes)

const createUser = async (req, res) => {
    try {
      const user = await models.user.create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        mood: req.body.mood,
        tag: req.body.tag
      })

      res.json({ message: 'signup successful', user })
    } catch (error) {
      res.status(400)
      res.json({ error: 'email already taken' })
    }
  }
  app.post('/user', createUser)



const getUser = async(req, res) => {
    try {
        const user = await models.user.findOne({
            id: req.params.id
        })

    res.json({ message: 'heres the user', user })
    } catch (error) {
      res.status(400)
      res.json({ error: 'cant get em' })
    }
  }
  app.get('/', getUser)


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
      const user = await models.tag.findAll({
        id: req.params.id
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

  const moods = async (req, res) => {
    try {
        const user = await models.mood.findAll({
            id: req.params.id
        })

      if (user.password === req.body.password) {
        res.json({ message: 'these are the moods', user})
      } else {
        res.status(401).json({ error: 'login failed' })
      }
    } catch (error) {
      res.status(400).json({ error: 'login failed' })
    }
  }
  app.get('/user/moods', moods)


  const deleteUser = async (req, res) => {
    try {
      const user = await models.user.findOne({
          where: {
            id: req.params.id
          }

        })
        destroy({
            where: {
              id
            }
  })

    //   if (user.password === req.body.password) {
        res.json({ message: 'delete success', user})
    //   } else {
    //     res.status(401).json({ error: 'delete failed' })
    //   }
    } catch (error) {
      res.status(400).json({ error: 'delete failed' })
    }
  }
  app.delete('/user/delete', deleteUser)

  const getlyrical = async (req, res) => {
    try {
      const user = await models.user.findOne({
        where:
            {id:id}
      })

      if (user.password === req.body.password) {
        res.json({ message: 'find success', user})
      } else {
        res.status(401).json({ error: 'find failed' })
      }
    } catch (error) {
      res.status(400).json({ error: 'find failed' })
    }
  }
  app.get('/user/getlyrical', getlyrical)


  const deletelyrical = async (req, res) => {
    try {
        const user = await models.user.destroy({
          where: {
            id: req.params.id
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
  app.delete('/user/deletelyrical', deletelyrical)


  const putlyrical = async (req, res) => {
    try {
        const user = await models.user.findAll({
        where: {
            id: req.params.id
            },
        })
        
        const updateUser = model.user.update({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            mood: req.body.mood,
            tag: req.body.tag
        })
        res.status(200).json({ message: 'update successful', updateUser })
        //   if (user.password === req.body.password) {
            //     res.json({ message: 'update successful', user})
            //   } else {
                //     res.status(401).json({ error: 'update failed' })
                //   }
            } catch (error) {
                res.status(400).json({ error: 'update failed' })
    }
  }
  app.put('/user/putlyrical', putlyrical)





  // app.post('.user', createUser)

const PORT = process.env.port || 3001

app.listen(PORT, () => {
    routesReport.print()
    })
    console.log(`Listening on port ${PORT}`)


// app.use('./user', userRoutes)
