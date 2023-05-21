import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(5, "Too short!")
    .max(1000, "To long!")
    .required("Name is required"),
  last_name: yup
    .string()
    .min(5, "Too short!")
    .max(1000, "To long!")
    .required("Last name is required"),
  prefix: yup
    .string()
    .min(3, "Too short!")
    .max(3, "To long!")
    .required("Prefix is required"),
  phone_number: yup
    .string()
    .min(9, "Too short!")
    .max(9, "To long!")
    .required("Phone is required"),
  email: yup
    .string()
    .email("Email must be a valid")
    .required("Email is required"),
  password: yup
    .string()
    .min(3, "Too short!")
    .max(1000, "To long!")
    .required("Password is required"),
  confirmpass: yup.string().required("Please retype your password."),
});
