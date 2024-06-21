import { IUser, User } from "../../domain/user"
import { UserRepository } from "../../domain/user-repository"

const USER_COLLECTION: IUser[] = [
  {
    id: "1",
    name: "Kakashi Hatake",
  },
  {
    id: "2",
    name: "Naruto Uzumaki",
  },
  {
    id: "3",
    name: "Sasuke Uchiha",
  },
]

export class InMemoryUserRepository implements UserRepository {
  async getById(id: string): Promise<User | null> {
    console.log("Get user by id in InMemoryUserRepository")
    const user = USER_COLLECTION.find((user) => user.id === id)

    return user ? new User(user.id, user.name) : null
  }

  async create(user: User): Promise<User | null> {
    console.log("Create user in InMemoryUserRepository")
    const newUser = {
      id: user.id,
      name: user.name,
    }

    USER_COLLECTION.push(newUser)

    return new User(newUser.id, newUser.name)
  }
}
