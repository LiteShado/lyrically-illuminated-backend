// require('dotenv').config()
// const userRoutes = require('./routes/userRoutes')

// const jwt = require('jsonwebtoken')
// const userRoutes = require('./routes/userRoutes')

const express = require('express')
const app = express()

const rowdy = require('rowdy-logger')
const { mood } = require('./controllers/userController')
const routesReport = rowdy.begin(app)

app.use(express.json())
app.use(require('cors')())


const models = require('./models')

// app.use('/users', userRoutes)

const tags = async (req, res) => {
  try {
    const tag = await models.tag.findAll()
      res.json({ tag })
    } catch (error) {
    res.status(400).json({ error: 'nuthin' })
    }
}
app.get('/user/tags', tags)

const moods = async (req, res) => {
    try {
      const mood = await models.mood.findAll()
        res.json({ mood })
      } catch (error) {
      res.status(400).json({ error: 'nuthin' })
      }
  }
  app.get('/user/moods', moods)

const createUser = async (req, res) => {
    try {
      const user = await models.user.create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        mood: req.body.mood,
        tag: req.body.tag
      })
      let tag = await models.tag.findOrCreate({
          where: {
              tag: req.body.tag
          }
      })
      let mood = await models.mood.findOrCreate({
          where: {
              mood: req.body.mood
          }
      })

    res.json({ message: 'signup successful', user, tag, mood })
    } catch (error) {
      res.status(400)
      res.json({ error: 'email already taken' })
    }
  }
  app.post('/user', createUser)


  const assctaguser = async (req,res) => {
    try {
        const tag = await models.tag.findOne({
            where: {
                id: req.params.tagId
            }
        })

        const user = await models.user.findOne({
            where: {
                id: req.params.userId
            }
        })
        await tag.addUser(user)

        res.json({
            tag, user
        })
    }   catch (error) {
        res.json({ error: error.message})
    }
  }
  app.put('/tag/:tagId/user/:userId', assctaguser)


/////test route
const getUser = async(req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                id: req.params.id
            }
        })

    res.json({ message: 'heres the user', user })
    } catch (error) {
      res.status(400)
      res.json({ error: 'cant get em' })
    }
  }
  app.get('/:id', getUser)
//////////////

  const login = async (req, res) => {
    try {
      const user = await models.user.findOne({
        where: {
          email: req.body.email
        }
      })
        console.log(user)
        console.log(req.body.email)
        console.log(req.body.password)

      if (user.password === req.body.password) {
        res.json({ message: 'login success', user})
      } else {
        res.status(401).json({ error: 'login failed' })
      }
    } catch (error) {
      res.status(400)
      res.json({ error: 'login failed' })
    }
  }

  const getProfile = async (req, res) => {
    try {

      const user = await models.user.findOne({
        where: {
          id: req.body.id
          ////should it be query instead of body?
        }
      })
      if (user.id !== null) {
        console.log('user found')
      res.json({ message: 'user found', user: user})
    } else if (user.id === null) {
      res.status(401)
      res.json({error: 'No user found'})
    }
    } catch (error) {
      res.status(400)
      res.json({error: 'No user found'})
    }
  }

  app.get('/user/profile', getProfile)
  app.get('/user/login', login)




  const deleteUser = async (req, res) => {
    try {
      const user = await models.user.destroy({
          where: {
            id: req.params.id
          }
        })
        res.json({ message: 'delete success', user})
    } catch (error) {
      res.status(400).json({ error: 'delete failed' })
    }
  }

  app.delete('/user/delete/:id', deleteUser)

  const getlyrical = async (req, res) => {
    try {

      const user = await models.user.findOne({
        where: {
          id: req.body.id
          ////should it be query instead of body?
        }
      })
      if (user.id !== null) {
        console.log('user found')
      res.json({ message: 'user found', user: user})
    } else if (user.id === null) {
      res.status(401)
      res.json({error: 'No user found'})
    }
    } catch (error) {
      res.status(400)
      res.json({error: 'No user found'})
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

        res.json({ message: 'delete success', user})
    //   } else {
    //     res.status(401).json({ error: 'delete failed' })
    //   }
    } catch (error) {
      res.status(400).json({ error: 'delete failed' })
    }
  }

  app.delete('/user/delete/lyrical/:id', deletelyrical)


  const putlyrical = async (req, res) => {
    try {
        const user = await models.user.findOne({
        where: {
            id: req.body.id
            }
        })
        console.log(id)

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

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    routesReport.print()
    console.log(`listening on port ${PORT}`)
    })


// app.use('./user', userRoutes)
