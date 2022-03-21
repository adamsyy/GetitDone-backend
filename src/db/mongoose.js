const mongoose = require('mongoose');
//const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');

// const User = mongoose.model('User', {
//     name: {
//         type: String,

//     },
//     age: {
//         type: Number
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         validate(value) {
//             if (value.length < 6) {
//                 throw new Error('less than 6')
//             }
//             if (validator.contains(value, "password")) {
//                 throw new Error('contains simple guessable stuff')
//             }
//         }
//     }

// })

// const me = new User({
//     name: 'melki',
//     age: 32,
//     password: "12345678",
// })
// me.save().then((r) => {
//     console.log(r)
// }).catch((e) => {
//     console.log(e)
// })

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required:true,
//         trim:true,
//     },
//     completed: {
//         type: Boolean,
//         default:false,
//     },      
//     email:{type:String,
//         required:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('bad piller')
//             }
//         }
//     }
// })

// const gym = new Task({
//     description: "drink milk",
//     email:"adam@gmail.com"
// })

// gym.save().then((r) => {
//     console.log('sett')
// }).catch((e) => {
//     console.log(e)
// })