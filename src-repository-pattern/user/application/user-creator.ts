import { UserNotCreated } from "./../domain/errors/user-not-created"
import { User } from "../domain/user"
import { UserRepository } from "../domain/user-repository"

export class UserCreator {
  constructor(private readonly userRepository: UserRepository) {}

  async run({ id, name }: { id: string; name: string }): Promise<User> {
    const newUser = new User(id, name)
    const user = await this.userRepository.create(newUser)

    if (!user) {
      throw new UserNotCreated("User not created")
    }

    return user
  }
}
