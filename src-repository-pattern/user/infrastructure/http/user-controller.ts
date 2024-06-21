/* ESTE CONTROLADOR ES TODO EN UNO, PERO NO SIGUE EL PRINCIPIO DE RESPONSABILIDAD UNICA */

import { Request, Response, NextFunction } from "express"
import { UserByIdFinder } from "../../application/user-by-id-finder"
import { UserCreator } from "../../application/user-creator"
import { UserNotFound } from "../../domain/errors/user-not-found"
import { UserNotCreated } from "../../domain/errors/user-not-created"

export class UserController {
  constructor(
    private readonly userByIdFinder: UserByIdFinder,
    private readonly userCreator: UserCreator
  ) {}

  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userByIdFinder.run(req.params.id)
      res.json(user)
    } catch (error) {
      if (error instanceof UserNotFound) {
        return res.status(404).json({ message: error.message })
      }
      next(error)
    }
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userCreator.run(req.body)
      res.json(user)
    } catch (error) {
      if (error instanceof UserNotCreated) {
        return res.status(404).json({ message: error.message })
      }
      next(error)
    }
  }
}
