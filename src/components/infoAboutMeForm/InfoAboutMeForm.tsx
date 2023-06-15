import { FC, FormEvent } from "react";
import classNames from "classnames";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useForm,
  Controller,
  Control,
  FieldErrors,
  UseFormRegister,
  SubmitHandler,
} from "react-hook-form";

import {
  infoAboutMeFormShema,
  signInSchema,
} from "../../core/helpers/validation.helpers";
import Button from "../button/Button";
import Input from "../input/Input";
import styles from "./infoAboutMeForm.module.scss";
import StepOne from "./steps/StepOne";
import ProgressBar from "../progressBar/ProgressBar";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setChangeStep } from "../../store/actions";
import { useNavigate } from "react-router-dom";
import { routesConfig } from "../../routes/routesConfig";
import { ISignInForm } from "../signInForm/SignInForm";
import {
  TForm,
  TInitialStateFormReducer,
} from "../../store/types/store.types";

export type Name = {
  value: string;
};

// export type TInfoAboutMeForm = {
//   nickname: string;
//   name: string;
//   sername: string;
//   advantages: Array<Name>;
//   about: string;
//   radioGroup: number;
//   checkbox: TCheckbox[];
// };

export type TStepsProps = {
  control: Control<TForm, string>;
  register: UseFormRegister<TForm>;
  errors: FieldErrors<TForm>;
  setValue?: any;
  watch?: any;
};

const InfoAboutMeForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const step = useAppSelector((state) => state.otherReducer.stepForm);
  const form = useAppSelector((state) => state.formReducer.form);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<TForm>({
    resolver: yupResolver(infoAboutMeFormShema),
    mode: "onChange",
    defaultValues: { ...form },
  });

  const changeStepNext = () => {
    if (step === 2) {
      return;
    }
    dispatch(setChangeStep(step + 1));
  };

  const changeStepPrev = () => {
    if (step !== 0) {
      dispatch(setChangeStep(step - 1));
    } else {
      navigate(-1);
    }
  };

  const submit: SubmitHandler<TForm> = (data: any, e) => {
    e?.preventDefault();
    console.log(data);
    console.log(errors);
  };

  const steps = [
    <StepOne control={control} register={register} errors={errors} />,
    <StepTwo
      control={control}
      register={register}
      errors={errors}
      setValue={setValue}
      watch={watch}
    />,
    <StepThree control={control} register={register} errors={errors} />,
  ];
  return (
    <div className={styles.infoAboutMeForm_wrapper}>
      <ProgressBar />
      <form>{steps[step]}</form>
      <div className={styles.infoAboutMeForm_wrapper_nav}>
        <Button
          type="button"
          classProps={classNames(styles.signInForm_submit, "button_second")}
          onClick={() => changeStepPrev()}
        >
          Назад
        </Button>
        {step === 2 ? (
          <Button
            type="submit"
            onClick={handleSubmit(submit)}
            classProps={classNames(styles.signInForm_submit, "button_primary")}
          >
            Отправить
          </Button>
        ) : (
          <Button
            type="button"
            classProps={classNames(styles.signInForm_submit, "button_primary")}
            onClick={() => changeStepNext()}
          >
            Далее
          </Button>
        )}
      </div>
    </div>
  );
};

export default InfoAboutMeForm;
