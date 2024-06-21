import { Request, Response, NextFunction } from "express"
import { UserCreator } from "../../application/user-creator"
import { UserNotCreated } from "../../domain/errors/user-not-created"

export class UserPutController {
  constructor(private readonly userCreator: UserCreator) {}

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
