import mongoose from 'mongoose'
import { Value as ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'
import Task from '../models/Task'

class DbContext {
  Tasks = mongoose.model('Task', Task)
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
