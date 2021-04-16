const express = require('express')
const app = express()

const rowdy = require ('rowdy-logger')
const routesReport = rowdy.begin(app)
const userRoutes = require('./routes/userRoutes')

app.use(express.json())
app.use(require('cors')())

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`port running on ${port}`)
  routesReport.print()
})

app.use('/user',userRoutes)

// const tags = async (req, res) => {
//   try {
//     const tag = await models.tag.findAll()
//       res.json({ tag })
//     } catch (error) {
//     res.status(400).json({ error: 'nuthin' })
//     }
// }
// app.get('/user/tags', tags)

// const moods = async (req, res) => {
//     try {
//       const mood = await models.mood.findAll()
//         res.json({ mood })
//       } catch (error) {
//       res.status(400).json({ error: 'nuthin' })
//       }
//   }
//   app.get('/user/moods', moods)

// const createUser = async (req, res) => {
//     try {
//       const user = await models.user.create({
//         email: req.body.email,
//         password: req.body.password,
//         name: req.body.name,
//         mood: req.body.mood,
//         tag: req.body.tag
//       })
//       // let tag = await models.tag.findOrCreate({
//       //     where: {
//       //         tag: req.body.tag
//       //     }
//       // })
//       // let mood = await models.mood.findOrCreate({
//       //     where: {
//       //         mood: req.body.mood
//       //     }
//       // })

//     res.json({ message: 'signup successful', user })
//     } catch (error) {
//       res.status(400)
//       res.json({ error: 'test2' })
//     }
//   }
//   app.post('/', createUser)


//   const login = async (req, res) => {
//     try {
//       const user = await models.user.findOne({
//         where: {
//           email: req.body.email
//         }
//       })
//         console.log(user)
//         console.log(req.body.email)

//       if (user.password === req.body.password) {
//         res.json({ message: 'login success', user: user})
//         console.log('good job')
//       } else {
//         res.status(401).json({ error: 'login failed' })
//         console.log('nope')
//       }
//     } catch (error) {
//       res.status(400)
//       res.json({ error: 'login failed' })
//     }
//   }
//   app.post('/login', login)

//   const logout = async (req, res) => {
//     try  {
//             const response = await axios.post('https://lyrically-illuminated.herokuapp.com/user/logout', {
//         })
//         console.log(response)
//         localStorage.clear()
//         localStorage.removeItem('userId')
//     } catch (error) {
//       res.status(400)
//       res.json({ error: 'logout failed' })
//     }
//   }

//   app.post('/logout', logout)

//   const getProfile = async (req, res) => {
//     try {
//       const user = await models.user.findOne({
//         where: {
//           id: req.body.id
//         }
//       })
//       if (user.id !== null) {
//         console.log('user found')
//       res.json({ message: 'user found', user: user})
//     } else if (user.id === null) {
//       res.status(401)
//       res.json({error: 'No user found'})
//     }
//     } catch (error) {
//       res.status(400)
//       res.json({error: 'No user found'})
//     }
//   }

//   app.get('/:id/profile', getProfile)

//   const updateProfile = async (req, res) => {
//     try {
//       let updates = req.body
//         let user = await models.user.findOne({
//             where: {
//                 id: req.body.id
//             }
//         })
//         let final = await user.update(updates)
//             res.json({final})
//         } catch (error) {
//             res.status(401)
//             res.json({error})
//         }
//     }
//   app.put('/:id/edit', updateProfile)


//   const deleteUser = async (req, res) => {
//     try {
//       const user = await models.user.destroy({
//           where: {
//             id: req.body.id
//           }
//         })
//         res.json({ message: 'delete success', user})
//     } catch (error) {
//       res.status(400).json({ error: 'delete failed' })
//     }
//   }

//   app.delete('/:id/delete', deleteUser)

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => {
//     routesReport.print()
//     console.log(`listening on port ${PORT}`)
//     })


// // app.use('/users', userRoutes)
