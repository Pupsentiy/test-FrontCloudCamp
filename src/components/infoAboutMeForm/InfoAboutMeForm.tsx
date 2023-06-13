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

import { infoAboutMeFormShema, signInSchema } from "../../core/helpers/validation.helpers";
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

export type TInfoAboutMeForm = {
  nickname: string;
  name: string;
  sername: string;
  advantages:string
  about:string
};

export type TStepsProps = {
  control: Control<TInfoAboutMeForm, string>;
  register?: UseFormRegister<TInfoAboutMeForm>;
  errors: FieldErrors<TInfoAboutMeForm>;
};

const InfoAboutMeForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const step = useAppSelector((state) => state.otherReducer.stepForm);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<TInfoAboutMeForm>({
    resolver: yupResolver(infoAboutMeFormShema),
    mode: "onChange",
  });

  const changeStepNext = () => {
    if (step !== 2) {
      dispatch(setChangeStep(step + 1));
    }
  };

  const changeStepPrev = () => {
    if (step !== 0) {
      dispatch(setChangeStep(step - 1));
    } else {
      navigate(-1);
    }
  };

  const submit: SubmitHandler<TInfoAboutMeForm> = (data: any, e) => {
    e?.preventDefault();
    console.log(data)
    console.log(e)
    console.log(errors)
  };

  const steps = [
    <StepOne control={control} register={register} errors={errors} />,
    <StepTwo control={control} register={register} errors={errors} />,
    <StepThree control={control} register={register} errors={errors} />,
  ];
  return (
    <div className={styles.infoAboutMeForm_wrapper}>
      <ProgressBar />
      <form onSubmit={handleSubmit(submit)}>
        {steps[step]}
        <div className={styles.infoAboutMeForm_wrapper_nav}>
          <Button
            type="button"
            classProps={classNames(styles.signInForm_submit, "button_second")}
            onClick={() => changeStepPrev()}
          >
            Назад
          </Button>
          {step !== 2 ? (
            <Button
              type="button"
              classProps={classNames(
                styles.signInForm_submit,
                "button_primary"
              )}
              onClick={() => changeStepNext()}
            >
              Далее
            </Button>
          ) : (
            <Button
              type="submit"
              classProps={classNames(
                styles.signInForm_submit,
                "button_primary"
              )}
            >
              Отправить
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default InfoAboutMeForm;
