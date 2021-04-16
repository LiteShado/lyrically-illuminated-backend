
const models = require('../models')

const userController = {}

userController.create = async (req, res) => {
    try {
      const user = await models.user.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        mood: req.body.mood,
        tag: req.body.tag
      })

      res.json({ message: 'ok', user })
    } catch (error) {
      res.status(400)
      res.json({ error: 'not' })
    }
  }

userController.profile = async (req, res) => {
    try {
      const user = await models.user.findOne({
        where: {
            id: req.body.id
        }
      })

      res.json({ message: 'ok', user })
    } catch (error) {
      res.status(400)
      res.json({ error: 'email already taken' })
    }
  }

// userController.getNull = async (req, res) => {
//     try {
//       const user = await models.user.findOrCreate({
//         where: {
//             name: null,
//             email: null,
//             tag: null,
//             password: null,
//             mood: null
//         }
//       })

  //     res.json({ message: 'loggedout', user })
  //   } catch (error) {
  //     res.status(400)
  //     res.json({ error: 'email already taken' })
  //   }
  // }


userController.login = async (req,res) => {
    const user = await models.user.findOne({
        where: {
            email: req.body.email
        }
    })
    if(user && (user.password === req.body.password)) {
        res.status(200)
        res.json({id: user.id, name: user.name})
    } else{
        res.status(401)
        res.json({error: 'invalid credentials'})
    }
}

userController.logout = async (req,res) => {
    const userId = await models.user.findOne({
        where: {
            id: req.body.id
        },
    })
    localStorage.removeItem('userId')
    localStorage.clear()
    console.log(userId)
    if(userId === null) {
        res.status(200)
        console.log('logged out')
    } else {
        res.status(401)
        res.json({error: 'invalid credentials'})
    }
}

userController.update = async (req,res) => {
try {

    let updates = req.body
    let user = await models.user.findOne({
        where: {
            id: req.body.id
        }
    })
        let final = await user.update(updates)
        res.json({final})
    } catch (error) {
        res.status(401)
        res.json({error})
    }
}

userController.delete = async(req,res) => {
    try {
        let user = await models.user.findOne({
            where: {
                id: req.params.id
            }
        })
        await user.destroy()
        res.json({ message: 'user deleted'})
        res.json({user})
    } catch (error) {
        res.json({error})
    }
}
userController.tag = async (req,res) => {
  try {
      let user = await models.tag.findOne({
          where: {
              id: req.params.userId
          }
      })
      let tag = await models.tag.create({
          where: {
              tag: req.body.tag
          }
      })
      console.log(user, tag)
      tag = tagSpacee.value
      res.json({message: 'user, tag'})
  } catch (error) {
      res.json({error})
  }
}

userController.mood = async (req,res) => {
  try {
      let user = await models.user.findOne({
          where: {
              id: req.params.userId
          }
      })
      let mood = await models.mood.create({
          where: {
              mood: req.body.mood
          }
      })
      console.log(user, mood)
      mood = moodSpacee.value
      res.json({message: 'user, mood'})
  } catch (error) {
      res.json({error})
  }
}


module.exports = userController;
