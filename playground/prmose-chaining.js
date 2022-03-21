require('../src/db/mongoose')

const User=require('../src/models/user')

//ObjectId("61fd31d39472bcdd9d3d8d57")
 User.findByIdAndUpdate("61fd31d39472bcdd9d3d8d57",{"name":"pappuse"}).then((user)=>{
     console.log(user)
     return User.countDocuments({"password":"adamoommen"})
 }).then((count)=>{
     console.log("count is"+count)
 }).catch((e)=>{
     console.log('aah endo error')
 })