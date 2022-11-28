import { RequestHandler } from "express";
import * as yup from "yup"
import CustomError from "../Error/customError";

type TValidation = (schema: yup.SchemaOf<any>) => RequestHandler

  const validation:TValidation = (schema) => async (req,_res,next) => {
   try {
      await schema.validate(req.body, {abortEarly: true})
     next()
   } catch (err) {
     const yupError = err as yup.ValidationError
     throw new CustomError(yupError.message, 400)
   }
  }

  export default validation


