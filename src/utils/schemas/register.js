import * as yup from 'yup';
import { emailRegex, usernameRegex } from '../constants';


const registerSchema = yup.object({
    name: yup.string().required("Please enter your name").matches(usernameRegex, "Only letters and numbers are allowed").min(3, "Name needs to be 3 characters or more"),
    email: yup.string().email().lowercase().matches(emailRegex, "only emails ending with @stud.noroff.no is allowed").required(),
    password: yup.string().min(8, "Password needs to be 8 charactes or more").required("Please enter a password"),
    //valid image url
    avatar: yup.string().url("Please enter a valid image url"),
})
export default registerSchema;