import { Router } from "express"
import { HealthController } from "./health-controller"

const healthRouter = Router()
const healthController = new HealthController()

healthRouter.get("/", healthController.getHealth.bind(healthController))

export { healthRouter }

// El .bind() es necesario para que el método getHealth() pueda acceder a la instancia de HealthController (this).
