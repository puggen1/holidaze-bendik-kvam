import * as yup from 'yup';
import { emailRegex } from '../constants';


export const loginSchema = yup.object({
    email: yup.string().email().lowercase().matches(emailRegex, "only emails ending with @stud.noroff.no is allowed").required(),
    password: yup.string().min(8, "Password needs to be 8 charactes or more").required()
})
