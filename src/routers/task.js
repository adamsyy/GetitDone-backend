const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const Task = require('../models/task')
const auth = require('../middleware/auth')
const { query } = require('express')

router.get('/tasks', auth, async (req, res) => {
    const match={

    }

    if(req.query.completed){
        match.completed=req.query.completed=='true'
    }
    try {

        await req.user.populate({
            path:'tasks',
            match,
            options:{
limit:parseInt(req.query.limit),
skip:parseInt(req.query.skip)
            }
        });

        console.log(req.user.tasks)
        res.send(req.user.tasks)
    } catch (e) {
        res.status(404).send(e)
    }




})


router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findOne({
            _id,
            owner: req.user._id
        })
        res.send(task)
    } catch (e) {
        res.status(404).send(e)
    }


})




router.post('/tasks', auth, async (req, res) => {

    const task = new Task({
        ...req.body,
        owner: req.user._id,
    })
    try {
        await task.save()
        res.send(task)

    } catch (e) {
        res.status(404).send(e)
    }




})





router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowed = ["description", "completed"]
    const isvalidop = updates.every((update) => {
        return allowed.includes(update)
    })

    if (!isvalidop) {
        return res.send("field not present")
    }
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            owner: req.user._id
        })

        // const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        //     new: true,
        //     runValidators: true
        // })
        if (!task) {
            return res.send("task doesnt exist")
        }
        updates.forEach((update) => {
            task[update] = req.body[update]
        })
        task.save()

        res.send(task)

    } catch (e) {
        return res.send(e)
    }
})




router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({
            _id: req.params.id,
            owner: req.user._id,
        })
        if (!task) {
            return res.send("no task found")
        }
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})






module.exports = router