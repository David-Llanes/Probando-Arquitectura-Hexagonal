import { User } from "../../domain/user"
import { UserRepository } from "../../domain/user-repository"

export class MongoUserRepository implements UserRepository {
  create(user: User): Promise<User | null> {
    throw new Error("Method not implemented.")
  }
  async getById(id: string): Promise<User | null> {
    console.log("MongoUserRepository")

    throw new Error("Method not implemented.")
  }
}
