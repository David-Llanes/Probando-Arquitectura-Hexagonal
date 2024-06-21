import { Request, Response, NextFunction } from "express"
import { UserByIdFinder } from "../../application/user-by-id-finder"
import { UserNotFound } from "../../domain/errors/user-not-found"

export class UserGetController {
  constructor(private readonly userByIdFinder: UserByIdFinder) {}

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
}
