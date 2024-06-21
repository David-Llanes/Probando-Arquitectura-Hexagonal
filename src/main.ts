import { config } from "./config"
import { healthRouter } from "./health/health-router"
import { userRouter } from "./infrastructure/user-route"
import "./load-env-vars"
import express from "express"
import { errorHanldler } from "./middleware"

function app() {
  const app = express()

  app.disable("x-powered-by")
  app.use(express.json())

  app.use("/health", healthRouter)
  app.use("/user", userRouter)

  app.use(errorHanldler)

  const PORT = config.server.port
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })
}

app()
