import { TNubmer, TLink, TSelectOption } from "./constants.types";

export const EMAIL_REGEXP: RegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PHONE_REGEXP: RegExp = /^((|\+7|)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/;
export const NAME_REGEXP: RegExp = /^([а-яё\s]+|[a-z\s]+)$/iu;
export const NICKNAME_REGEXP: RegExp = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;

export const links: TLink[] = [
  { id: 0, title: "Telegram", link: "https://t.me/pupsentiy" },
  { id: 1, title: "GitHub", link: "https://github.com/Pupsentiy" },
  {
    id: 2,
    title: "Resume",
    link: "https://spb.hh.ru/resume/0c6fb202ff09c9670c0039ed1f48307a6e7978",
  },
];

export const selectOptions: TSelectOption[] = [
  { id: 0, title: "man" },
  { id: 1, title: "woman" },
];

export const numbers: TNubmer[] = [
  { id: 0, num: 1 },
  { id: 1, num: 2 },
  { id: 2, num: 3 },
];

export const BASE_URL:string = 'https://api.sbercloud.ru'