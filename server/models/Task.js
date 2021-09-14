import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Task = new Schema({
  id: { type: Schema.Types.ObjectId, required: true },
  description: { type: String, required: true }
})

export default Task
