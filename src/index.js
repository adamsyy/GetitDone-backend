const express = require('express')
const app = express()
require('./db/mongoose')
const port = process.env.port || 3000
const User = require('./models/user')
const Task = require('./models/task')

 

// app.use((req,res,next)=>{
//     if(req.method=='GET'){
// res.send('GET REQUESTS ARE DISABLED')
//     }else{
//         next()
//     }
 
// })
// const {
//     send
// } = require('express/lib/response')
// const {
//     Router
// } = require('express')
//dont remember what that was for 
app.use(express.json())
const userrouter = require('./routers/user')
app.use(userrouter)
const taskrouter = require('./routers/task')
const res = require('express/lib/response')
app.use(taskrouter)








app.listen(port, () => {
    console.log("setttey")
})


// const jwt=require('jsonwebtoken')
// const myfunction=async()=>{
// const token= jwt.sign({_id:'abc123'},'thisisadam',{
//     expiresIn:'90 days'
// })
// console.log(jwt.verify(token,'thisisadam'))

// }

// myfunction()