import { FC, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../input/Input";

import styles from "./signInForm.module.scss";
import Button from "../button/Button";
import { routesConfig } from "../../routes/routesConfig";
import { signInSchema } from "../../core/helpers/validation.helpers";
import SignInHeader from "../signInHeader/SignInHeader";

export interface ISignInForm {
  phoneNumber: string;
  email: string;
}

const SignInForm: FC = forwardRef(() => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ISignInForm>({
    resolver: yupResolver(signInSchema),
    mode: "onSubmit",
  });
  const onSubmit: SubmitHandler<ISignInForm> = (data, e) => {
    e?.preventDefault();
    const phoneNumber = data?.phoneNumber?.replace(/[^0-9]/g, "");
    const newData = { ...data, phoneNumber }
    // reset();
    console.log(errors)
    console.log(data)
    navigate(routesConfig.create.path);
  };
  return (
    <div className={styles.signInForm_wrapper}>
      <SignInHeader />
      <div className={styles.signInForm_content}>
        <form
          className={styles.signInForm_login}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            control={control}
            rules={{
              required: true,
              
            }}
            name="phoneNumber"
            defaultValue=""
            render={({ field: { onChange, value, ref } }) => (
              <PatternFormat
                format={"+7 (###)###-##-##"}
                mask={' '}
                classInput={styles.signInForm__input}
                classLabel={styles.signInForm__label}
                htmlFor="Номер телефона"
                {...register}
                type="tel"
                placeholder="+7 999 999-99-99"
                onChange={onChange}
                value={value}
                customInput={Input}
                error={errors.phoneNumber?.message}
                inputRef={ref}
              />
            )}
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="email"
            defaultValue=""
            render={({ field: { onChange, value, ref } }) => (
              <Input
                type={"email"}
                placeholder="tim.jennings@example.com"
                htmlFor="Email"
                classInput={styles.signInForm__input}
                classLabel={styles.signInForm__label}
                {...register}
                onChange={onChange}
                value={value}
                error={errors.email?.message}
                inputRef={ref}
              />
            )}
          />

          <Button
            type="submit"
            classProps={classNames(
              styles.signInForm_submit,
              "button_primary"
            )}
          >
            Начать
          </Button>
        </form>
      </div>
    </div>
  );
});

export default SignInForm;
