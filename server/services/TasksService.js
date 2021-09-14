import { BadRequest } from '../utils/Errors'
import { dbContext } from '../db/DbContext'

class TasksService {
  async getTasks() {
    try {
      return await dbContext.Tasks.find()
    } catch (error) {
      throw new BadRequest(error)
    }
  }

  async getTaskById(taskId) {
    try {
      const task = await dbContext.Tasks.find({ id: taskId })
      if (!task) {
        throw new Error('Invalid ID!')
      } return task
    } catch (error) {
      throw new BadRequest(error)
    }
  }

  async createTask(body) {
    try {
      return await dbContext.Tasks.create(body)
    } catch (error) {
      throw new BadRequest(error)
    }
  }

  async editTask(body, userId) {
    try {
      return await dbContext.Tasks.findOneAndUpdate({ creatorId: userId }, body)
    } catch (error) {
      throw new BadRequest(error)
    }
  }

  async deleteTask(taskId) {
    try {
      await dbContext.Tasks.findOneAndDelete({ id: taskId })
    } catch (error) {
      throw new BadRequest(error)
    }
  }
}

export const tasksService = new TasksService()
