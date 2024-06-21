import { UserCreator } from "./../application/user-creator"
import { UserByIdFinder } from "../application/user-by-id-finder"
import { InMemoryUserRepository } from "./repositories/in-memory-user-repository"
import { UserGetController } from "./controllers/user-get-controller"
import { UserPutController } from "./controllers/user-put-controller"
import { UserController } from "./http/user-controller"

// Repositories
const inMemoryUserRepository = new InMemoryUserRepository()

// Use cases
const userByIdFinder = new UserByIdFinder(inMemoryUserRepository)
const userCreator = new UserCreator(inMemoryUserRepository)

// Controllers
export const userGetController = new UserGetController(userByIdFinder)
export const userPutController = new UserPutController(userCreator)
// export const userController = new UserController(userByIdFinder, userCreator)
