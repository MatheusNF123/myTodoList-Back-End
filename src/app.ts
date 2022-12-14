import express from "express";
import 'express-async-errors';
import routers from './routes'
import MiddleError from "./middleware/errorMiddleware"
const cors = require('cors');

class App {
  public app: express.Express;
  public router = routers;
  
  constructor(){
    this.app = express()
    this.app.use(cors())
    this.app.use(express.json());

    this.app.get('/', (req, res) => res.json({ok: true}))
    this.router(this.app)
    
    this.app.use(MiddleError.errorMidleware)
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

// "dev": "nodemon --watch \"./src/**\" --transpile-only --files ./src/server.ts"

export {App}