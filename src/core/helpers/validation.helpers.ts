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
  .required("Обязательное поле");

export const telShema = yup
  .string()
  .matches(PHONE_REGEXP, "Номер телефона недействителен")
  .required("Обязательное поле");

export const nameShema = yup
  .string()
  .matches(NAME_REGEXP, "Имя должно состоять только из букв")
  .max(50, "Не более 50 символов")
  .required("Обязательное поле");

export const nickNameShema = yup
  .string()
  .matches(NICKNAME_REGEXP, "Могут быть просто буквы и цифры")
  .max(30, "Не более 30 символов")
  .required("Обязательное поле");
export const aboutShema = yup
  .string()
  .max(200, "Не более 200 символов")
  .required("Обязательное поле");

export const advantagesShema = yup.array().of(
  yup.object({
    value: yup
      .string()
      .matches(NAME_REGEXP, "только буквы")
      .required("Обязательное поле"),
  })
);

const checkboxGroupSchema = yup
  .array()
  .min(1, "Обязательное поле должно иметь хотя бы 1 элемент");

const radioGroupShema = yup
  .number()
  .required("Обязательное поле, нужно выбрать один эелемент");

export const signInSchema = yup.object().shape({
  email: emeilSchema,
  phoneNumber: telShema,
});

export const infoAboutMeFormShema = yup.object().shape({
  nickname: nickNameShema,
  name: nameShema,
  sername: nameShema,
  advantages: advantagesShema,
  checkbox: checkboxGroupSchema,
  radioGroup: radioGroupShema,
  about: aboutShema,
});
