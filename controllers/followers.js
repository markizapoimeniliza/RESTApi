


const followerDB = require('../models/follower')
// const route = require('../routers/followers')

//backend

//get all
//get one
//create one
//update one
//delete one

//get all
const followersGet = async (req,res) => {
    try{
    // await res.status(200).json({success: `yes`, data: `All Followers` })
    const followers = await followerDB.find()
    res.status(200).json(followers)
    }
    catch (err){
        res.status(500).json(err.message)
    }
}

// // get one
const followerGetOne = (req,res) => {
    // const {id} = req.params
    res.json(res.person.name)
}

//create one
const postFollowers = async (req,res) => {
    const {name, subscription, date} = req.body
    const follower = new followerDB({
        name: name,
        annualSubcription: subscription,
        subscribeDate: date
    })
    try{
    const savedFollower = await follower.save()
    res.status(201).json(savedFollower)
    }
    catch(err){
        //problems with client's inputs
        res.status(400).send(err.message)
    }

}


//update one
//find -> map
const followerPatch = async (req,res) => {
    if(req.body.name!= null){
        //IN RES.PERSON.NAME save REQ.BODY.NAME
        res.person.name = req.body.name
    }
    if(req.body.annualSubcription!= null){
        res.person.annualSubcription = req.body.annualSubcription
    }

    try{
        const saved = await res.person.save()
        res.status(300).json(saved)
    }
    catch(err){
        res.status(400).send(err.message)
    }
}

//delete one 
//find -> filter
const followerDelete = async (req,res) => {
    try{
        await res.person.remove()
        res.json(`Deleting a follower`)
    }
    catch(err){
        res.status(404).send(err.message)
    }
}



module.exports = {
    followersGet,
    postFollowers,
    followerGetOne,
    followerPatch,
    followerDelete
}