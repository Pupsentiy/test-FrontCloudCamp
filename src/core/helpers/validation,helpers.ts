import * as yup from "yup";
import {
  EMAIL_REGEXP,
  NAME_REGEXP,
  NICKNAME_REGEXP,
  PHONE_REGEXP,
} from "../constants/constants";

export const emeilSchema = yup
  .string()
  .email("Некорректный адрес электронной почты")
  .matches(EMAIL_REGEXP, "Введите адрес электронной почты")
  .required("Заполните поле");

export const telShema = yup
  .string()
  .matches(PHONE_REGEXP, "Номер телефона недействителен")
  .required("Заполните поле");

export const nameShema = yup
  .string()
  .matches(NAME_REGEXP, "Имя должно состоять только из букв")
  .max(50, "Не более 50 символов")
  .required("Заполните поле");

export const nickNameShema = yup
  .string()
  .matches(NICKNAME_REGEXP, "Могут быть просто буквы и цифры")
  .max(30, "Не более 30 символов")
  .required("Заполните поле");

export const signInSchema = yup.object().shape({
  email: emeilSchema,
  phoneNumber: telShema,
  nickname: nickNameShema,
  name: nameShema,
  sername:nameShema,
  advantages:nameShema
});
