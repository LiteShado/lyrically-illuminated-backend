
const models = require('../models')
const axios = require('axios')
const lyricalController = {}

lyricalController.search = async (req,res) => {
    try {
        let search = await axios.get(`http://api.chartlyrics.com/apiv1.asmx/SearchLyricText?lyricText=string`)
    //    console.log(search)
       console.log(search.data)
       res.send(search.data)
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}
lyricalController.searchOne = async (req,res) => {
    try {
        let search = await axios.get(`http://api.chartlyrics.com/apiv1.asmx/SearchLyricText?lyricText=string`)
        res.send(search.data)
    } catch (error) {
        res.json({error})
    }
}
lyricalController.save = async (req,res) => {
    try {
        const [lyricalToSave, created] = await models.lyric.findOrCreate({
            where:{
                lyricId: req.params.lyricId
            },
            defaults:{
                lyricalId: req.params.lyricalId
            }
        })
        // const lyricalToSave = await models.lyrical.create({

        //         lyricalId: req.params.lyricalId
        // })
        let user = await models.user.findOne({
            where: {
                id: req.params.userId
            }
        })
        await user.addlyrical(lyricalToSave)
        let results = await user.getlyrical()
        res.json({lyricalToSave, user, results})
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}
