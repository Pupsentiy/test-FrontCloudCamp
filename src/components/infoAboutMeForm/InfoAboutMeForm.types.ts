import {
  Control,
  UseFormRegister,
  FieldErrors,
  UseFormSetValue,
} from "react-hook-form";

export type Name = {
  value: string;
};

export type TInfoAboutMeForm = {
  nickname: string;
  name: string;
  sername: string;
  advantages: Array<Name>;
  about: string;
  radioGroup: number;
  checkbox: number[];
};

export type TStepsProps = {
  control: Control<TInfoAboutMeForm, string>;
  register: UseFormRegister<TInfoAboutMeForm>;
  errors: FieldErrors<TInfoAboutMeForm>;
  setValue?: UseFormSetValue<TInfoAboutMeForm>;
  checkedSelect?: boolean;
};
