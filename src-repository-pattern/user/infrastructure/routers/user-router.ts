import { Router } from "express"
import { userGetController, userPutController } from "../dependencies"
// import { userController } from "../dependencies"

const userRouter = Router()

userRouter.get("/:id", userGetController.getUserById.bind(userGetController))
userRouter.put("/", userPutController.createUser.bind(userPutController))

export { userRouter }
