export class UserNotCreated extends Error {
  constructor(message: string = "User not created.") {
    super(message)
    this.name = "UserNotCreated"
  }
}
