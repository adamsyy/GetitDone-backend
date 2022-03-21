// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const objectID=mongodb.objectID  ''
const {
    MongoClient,
    ObjectID
} = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
// const id=new ObjectID()

// const doc = {
//     name: "Neapolitan pizza",
//     shape: "round"
// };

MongoClient.connect(connectionURL, (error, client) => {
    if (error) {
        return console.log(error)
    } else {
console.log('woking')
        const db = client.db(databaseName)
        //    db.collection('users').insertOne({_id:id,name:"jasim","age":19},(error,result)=>{
        //        if(error){return console.log(error)}
        //        console.log(id.getTimestamp())
        //        console.log(id.id.length)
        //    })
        // db.collection('users').insertMany(
        // [    {
        //     name:"hisam",
        //     age:22,
        //         },
        //         {
        //             name:"manu",age:33,
        //         }]
        // ,(error,result)=>{
        //     console.log(result)
        // })
        // db.collection('tasks').insertMany([{
        //         description: "add money",
        //         completed: true
        //     }, {
        //         description: "hit the gym",
        //         completed: false
        //     }, {
        //         description: "read book",
        //         completed: true
        //     }


        // ], (error, result) => {
        //     if (!error) {
        //         console.log(result)
        //     } else {
        //         return console.log('error')
        //     }
        // })
        // db.collection('users').find({name:"adam"}).count((error,users)=>{
        // console.log(users)  
        // })

        
        // db.collection('tasks').find({completed:false}).toArray((error,task)=>{
        // console.log(task)
        // })


        // db.collection('users').updateOne({
        //     name: "adam"
        // }, {
        //     $set: {
        //         name: "sambu"
        //     }

        // }).then((result) => {
        //     console.log("set")
        // }).catch((err) => {
        //     console.log("bad aki")

        // })
//  


    }
})