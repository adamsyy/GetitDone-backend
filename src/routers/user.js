const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const Task = require('../models/task')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')

const { remove } = require('../models/user')


router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send("logged out")
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get("/users/me", auth, async (req, res) => {
    res.send(req.user)

})

router.post('/users', async (req, res) => {


    const user = new User(req.body)


    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({
            user:user.getpublicprofile(),
            token
        })
    } catch (e) {
        res.status(400).send(e)
    }



})


router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findbyCredential(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({
            user,
            token
        })

    } catch (e) {
        res.send(e)
    }
})









router.patch('/users/me',auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowed = ['name', 'email', 'password', 'age'];
    const isvalidop = updates.every((update) => {
        return allowed.includes(update)
    })

    if (!isvalidop) {
        return res.status(400).send("invalid update")
    }
    try {
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        //     new: true,
        //     runValidators: true
        // })
     
        updates.forEach((update) => {
            req.user[update] = req.body[update]

        })
        await req.user.save()
       
        res.send(req.user)

    } catch (e) {
        res.status(400).send(e)
    }
})


router.delete('/users/me',auth, async (req, res) => {
    try {
         await req.user.remove()


        res.send(req.user)
    } catch (e) {
        res.status(500).send(e)
    }
})






module.exports = router