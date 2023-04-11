import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  user: yup
    .string()
    .min(5, "Too short!")
    .max(1000, "To long!")
    .required("User is required"),
  email: yup
    .string()
    .email("Email must be a valid")
    .required("Email is required"),
  password: yup
    .string()
    .min(5, "Too short!")
    .max(1000, "To long!")
    .required("Password is required"),
  passwordConfirm: yup
    .string()
    .required("Please retype your password.")
    .oneOf([yup.ref("password")], "Your passwords do not match."),
});
