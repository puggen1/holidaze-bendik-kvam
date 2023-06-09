import * as yup from "yup";
/**
 * @description - Schema for add and edit form
 */
const addEditSchema = yup.object({
  name: yup.string().required("Name is required"),
  maxGuests: yup.number().min(1).max(100).required("Max Guests is required"),
  price: yup
    .number()
    .integer()
    .min(0, "cannot be negative")
    .typeError("price must be a number")
    .required("Price is required"),
  description: yup.string().required("Description is required"),
});

export default addEditSchema;
