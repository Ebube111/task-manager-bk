

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
         return console.log('unable to connect to database')
    }

    const db = client.db(databaseName)
        
    // // db.collection('users').updateOne({
    // //     _id: new ObjectID("5ebead568241f42c84eec4bc")
    // // }, {
    // //     $set: {
    // //         name: 'Mike'
    // //     }
    // // }).then((result) => {
    // //     console.log(result)
    // // }).catch((error) => {
    // //     console.log(error)
    // // })
    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then(result => {
    //     console.log(result.modifiedCount)
    // }).catch(error => {
    //     console.log(error)
    // // }) 
    // db.collection('users').deleteMany({
    //     Age: 22
    // }).then(result => {
    //     console.log(result)
    // }).catch(error =>{
    //      console.log(error)   
    // })
    db.collection('tasks').deleteMany({
        description: "buying of yam"
    }).then(result=> {
        console.log(result)
    }).catch(error => {
        console.log(error)
    })

})