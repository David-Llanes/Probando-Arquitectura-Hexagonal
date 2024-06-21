import { User } from "../domain/user"
import { UserRepository } from "../domain/user-repository"

const fakeUsers = [
  {
    id: "1",
    email: "david.llanes1019@gmail.com",
  },
  {
    id: "2",
    email: "naruto@gmail.com",
  },
]

export class InMemoryUserRepository implements UserRepository {
  getById(id: string): Promise<User | null> {
    const user = fakeUsers.find((user) => user.id === id)
    if (!user) {
      return Promise.resolve(null)
    }

    return Promise.resolve(new User(user.id, user.email))
  }
}
