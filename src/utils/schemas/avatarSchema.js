import * as yup from "yup";

const avatarSchema = yup.object({
  url: yup.string().required("Url is required"),
});

export default avatarSchema;
