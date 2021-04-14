
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

userController.get = async (req, res) => {
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
        let user = await models.user.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({ message: 'user deleted'})
        res.json({user})
    } catch (error) {
        res.json({error})
    }
}

// userController.tags = async (req,res) => {
//     try {
//         let user = await models.tag.findOne({
//             where: {
//                 id: req.params.userId
//             }
//         })
//         let tag = await models.tag.findOne({
//             where: {
//                 id: req.params.userId
//             }
//         })
//         console.log(user)
//         res.json({message: 'user'})
//     } catch (error) {
//         res.json({error})
//     }
// }

// userController.mood = async (req,res) => {
//     try {
//         let user = await models.mood.findOne({
//             where: {
//                 id: req.params.userId
//             }
//         })
//         console.log(user)
//         res.json({message: 'user'})
//     } catch (error) {
//         res.json({error})
//     }
// }

module.exports = userController;
