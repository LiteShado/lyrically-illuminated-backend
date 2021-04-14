
const models = require('../models')
const axios = require('axios')

const { response } = require('express')

const lyricalController = {}

let tagSpace = document.querySelector('.moodList1')
let tagSpacee = tagSpace.innerText
let moodSpace = document.querySelector('.tagList1')
let moodSpacee = moodSpace.innerText

lyricalController.tags = async (req,res) => {
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

lyricalController.moods = async (req,res) => {
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

module.exports = lyricalController
