
const models = require('../models')

const userController = {}

userController.create = async (req, res) => {
    try {
      const user = await models.user.create({
        name: req.user.name,
        email: req.user.email,
        password: req.user.password
      })

      res.json({ message: 'ok', user })
    } catch (error) {
      res.status(400)
      res.json({ error: 'email already taken' })
    }
  }

userController.get = async (req, res) => {
    try {
      const user = await models.user.findOne({
        where: {
            email: req.body.email
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

userController.delete = async(req,res) => {
    try {
        let user = await models.user.findOne({
            where: {
                id: req.params.id
            }
        })
        await user.destroy()

        res.json({ message: 'user deleted'})
    } catch (error) {
        res.json({error})
    }
}
userController.getlyrical = async (req,res) => {
    try {
        let user = await models.lyric.findOne({
            where: {
                id: req.params.userId
            }
        })
        let lyrical = await user.getlyrical()
        console.log('lyrical', lyrical)
        res.json({
            lyrical
        })
    } catch (error) {
        res.json({error})
    }

}

userController.deletelyrical = async (req,res) => {

    try {
        let user = await models.lyric.findOne({
            where: {
                id: req.params.userId
            }
        })
        let lyric = await models.lyric.findOne({
            where: {
                id: req.params.lyricId
            }
        })
        console.log(lyric)
        await user.deletelyrical(lyric)
        res.json({message: 'deleted'})
    } catch (error) {
        res.json({error})
    }
}

userController.putlyrical = async (req,res) => {

    try {
        let user = await models.lyric.findOne({
            where: {
                id: req.params.userId
            }
        })
        let lyric = await models.lyric.findOne({
            where: {
                id: req.params.lyricId
            }
        })
        console.log(lyric)
        await user.putlyrical(lyric)
        res.json({message: 'put lyrica'})
    } catch (error) {
        res.json({error})
    }
}

userController.tags = async (req,res) => {

    try {
        let user = await models.tag.findOne({
            where: {
                id: req.params.userId
            }
        })
        let tag = await models.tag.findOne({
            where: {
                id: req.params.tagId
            }
        })
        console.log(mood)
        await user.tag(tag)
        res.json({message: 'tag'})
    } catch (error) {
        res.json({error})
    }
}

userController.mood = async (req,res) => {

    try {
        let user = await models.mood.findOne({
            where: {
                id: req.params.userId
            }
        })
        let mood = await models.mood.findOne({
            where: {
                id: req.params.moodId
            }
        })
        console.log(mood)
        await user.mood(mood)
        res.json({message: 'mood'})
    } catch (error) {
        res.json({error})
    }
}

module.exports = userController
