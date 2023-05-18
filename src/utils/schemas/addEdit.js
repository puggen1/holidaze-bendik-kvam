import * as yup from "yup";
const addEditSchema = yup.object({
  name: yup.string().required("Name is required"),
  maxGuests: yup.number().min(1).max(100).required("Max Guests is required"),
  price: yup.number().required("Price is required").integer(),
  description: yup.string().required("Description is required"),
});

export default addEditSchema;