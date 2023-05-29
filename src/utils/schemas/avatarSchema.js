import * as yup from "yup";
/**
 * @description - Schema for avatar forma
 */
const avatarSchema = yup.object({
  url: yup.string().required("Url is required"),
});

export default avatarSchema;
