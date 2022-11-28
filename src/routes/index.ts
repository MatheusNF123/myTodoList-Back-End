import { Application } from "express";

import userRoutes from "./user.routes"
import folderRouter from "./folder.routes"
import taskRouter from "./task.routes"

export default (app: Application) => {
  app.use(userRoutes)
  app.use(folderRouter)
  app.use(taskRouter)

}