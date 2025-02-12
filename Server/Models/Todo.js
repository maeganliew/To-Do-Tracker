const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({ /*creates a schema that defines how the documents in the todos collection should be structured*/
    task: String,
    done: {
        type: Boolean,
        default: false
    }
})

const TodoModel = mongoose.model("todos", TodoSchema) /*creates a model from the schema, todos is the name of table*/
module.exports = TodoModel