import {  object, string } from 'yup';
import { passwordRegexStrong } from './Regex';

export const validationSchemaSignIn = object().shape({
  email:
    string()
      .email("Invalid email")
      .required("Email is required"),
  password: string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
export const validationSchemaRegister = object().shape({
  name:
    string()
      .min(6, "Name should be more than 6 characters long")
      .max(20)
      .required("Name is required"),
  email:
    string()
      .email("Invalid email")
      .required("Email is required"),
  password:
    string()
      .min(8, "Password must be at least 8 characters long")
      .matches(passwordRegexStrong, "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character")
      .required("Password is required"),
});

