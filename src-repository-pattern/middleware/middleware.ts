import { NextFunction, Request, Response } from "express"

export const errorHanldler = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof Error) {
    console.error(error)
    res.status(500).send("Something went wrong!")
  }
}
