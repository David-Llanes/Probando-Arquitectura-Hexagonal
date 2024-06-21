import { Request, Response } from "express"
import { WelcomeEmailSender } from "../application/welcome-email-sender"

export class UserController {
  constructor(private readonly welcomeEmailSender: WelcomeEmailSender) {}

  async sendWelcomeEmail(req: Request, res: Response) {
    const { id } = req.params

    await this.welcomeEmailSender.sendWelcomeEmail(id)
    res.send("Welcome email sent")
  }
}
