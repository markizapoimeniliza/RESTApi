

const express = require('express')
const router = express.Router()
const followerDB = require('../models/follower')
const {followersGet,followerGetOne,postFollowers,followerPatch,followerDelete} = require('../controllers/followers.js')
// const {middle} = require('../explore')



    
//followersGet - by default
//middleware BEFORE ALL REQ AND RESPONSES
router.route('/')
.get(followersGet)
.post(postFollowers)

//middleware - SEPARATE DB   all - for simple things
router.route('/:id')
.get(middle,followerGetOne)
.patch(middle,followerPatch)
.delete(middle,followerDelete)


// .patch(followersPatch)
// .delete(followerDelete)

async function middle(req,res,next){
    const {id} = req.params
    let follower
    try{
        //await FIRSTLY FIND BY ID - objects inside DB
        follower = await followerDB.findById(id)  
        if(follower == null){
            return res.status(404).json(`Not found`)
        }
    }
    catch(err){
        res.status(500).json(`Error`)
    }
    //sent <OBJECT response>.follower(by id) = follower.id (all properties)
    //CREATE A PROPERTY INSIDE THIS OBJECT
    res.person = follower
    next()
    
}


module.exports = router