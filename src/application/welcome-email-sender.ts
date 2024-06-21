import { EmailSender } from "../domain/email-sender"
import { UserRepository } from "../domain/user-repository"

export class WelcomeEmailSender {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly emailSender: EmailSender
  ) {}

  async sendWelcomeEmail(id: string) {
    const user = await this.userRepository.getById(id)

    if (!user) {
      throw new Error(`User with id ${id} not found`)
    }

    await this.emailSender.send(user.email, "Welcome!")

    // console.log(`Sending welcome email to ${id}: ${user.email}`)
  }
}

// Los casos de uso deben ser TRANSACCIONALES
