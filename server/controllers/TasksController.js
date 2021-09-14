import BaseController from '../utils/BaseController'
import { tasksService } from '../services/TasksService'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class TasksController extends BaseController {
  constructor() {
    super('api/tasks')
    this.router
      .get('', this.getTasks)
      .get('/:id', this.getTaskById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createTask)
      .put('/:id', this.editTask)
      .delete('/:id', this.deleteTask)
  }

  async getTaskById(req, res, next) {
    try {
      res.send(await tasksService.getTaskById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async getTasks(req, res, next) {
    try {
      res.send(await tasksService.getTasks())
    } catch (error) {
      next(error)
    }
  }

  async createTask(req, res, next) {
    try {
      // NOTE don't forget this you'll be sad
      req.body.creatorId = req.userInfo.id
      res.send(await tasksService.createTask(req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteTask(req, res, next) {
    try {
      // NOTE you can use req.userInfo.id to make sure someone is who they say they are when they try to delete something
      res.send(await tasksService.deleteTask(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async editTask(req, res, next) {
    try {
      res.send(await tasksService.editTask(req.body, req.userInfo.id))
    } catch (error) {
      next(error)
    }
  }
}
