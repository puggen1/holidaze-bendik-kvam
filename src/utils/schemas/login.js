import * as yup from "yup";
import { emailRegex } from "../constants";
/**
 * @description - Schema for login form
 */
export const loginSchema = yup.object({
  email: yup
    .string()
    .email()
    .lowercase()
    .matches(emailRegex, "only emails ending with @stud.noroff.no is allowed")
    .required(),
  password: yup.string().required(),
});
