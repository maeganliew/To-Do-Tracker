const express = require('express') //web framework for Node.js, used to build backend servers and APIs
const mongoose = require('mongoose') //provides a way to interact with MongoDB through JavaScript objects
const cors = require('cors')
const TodoModel = require('./Models/Todo')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/test')

//add route is to create new task, then will return newly created task as result
app.post('/add', (req, res) => { {/*req: request body sent from client (frontend) to the server, res: response that will be sent from server back to client*/}
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result => res.json(result)) /*create method returns promise, once promise is fullfiled, it resolves to the result. create returns the content that is being added*/
    .catch(err => res.json(err))
})

app.get('/get', (req, res) => {
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
    const {id} = req.params;
    
    TodoModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
}) 

app.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is Running")
})