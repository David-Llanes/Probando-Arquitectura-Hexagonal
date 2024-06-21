import { Request, Response } from "express"

export class HealthController {
  getHealth(req: Request, res: Response) {
    res.send("OK")
  }
}
