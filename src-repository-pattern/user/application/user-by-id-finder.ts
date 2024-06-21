import { UserNotFound } from "../domain/errors/user-not-found"
import { User } from "../domain/user"
import { UserRepository } from "../domain/user-repository"

export class UserByIdFinder {
  constructor(private readonly userRepository: UserRepository) {}

  async run(id: string): Promise<User> {
    const user = await this.userRepository.getById(id)

    if (!user) {
      throw new UserNotFound(`No se encontó el usuario con id ${id}.`)
    }

    return user
  }
}
