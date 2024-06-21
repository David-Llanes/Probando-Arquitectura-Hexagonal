import "./core/config/load-env-vars"
import { config } from "./core/config/config"
import { healthRouter } from "./health/health-router"
import express from "express"

import { errorHanldler } from "./middleware/middleware"
import { userRouter } from "./user/infrastructure/routers/user-router"

function app() {
  const app = express()

  app.disable("x-powered-by")
  app.use(express.json())

  app.use("/health", healthRouter)
  app.use("/users", userRouter)

  app.use(errorHanldler)

  const PORT = config.server.port
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })
}

app()
