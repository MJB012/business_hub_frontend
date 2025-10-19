import * as yup from "yup";

export class UserEntity {
  email: string = '';
  password: string = '';
  full_name: string = '';
  business_name: string = '';
  business_type: string = '';

  static yupLoginSchema() {
    return yup.object().shape({
      email: yup
        .string()
        .trim()
        .email("Invalid email format")
        .required("Email is required"),
      password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    });
  }

  static yupSignUpSchema() {
    return yup.object().shape({
      full_name: yup
        .string()
        .trim()
        .required("Full name is required"),
      email: yup
        .string()
        .trim()
        .email("Invalid email format")
        .required("Email is required"),
      password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      business_name: yup
        .string()
        .trim()
        .required("Business name is required"),
      business_type: yup
        .string()
        .required("Business type is required"),
    });
  }
}