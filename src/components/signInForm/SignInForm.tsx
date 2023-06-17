import { FC, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../input/Input";
import Button from "../button/Button";
import SignInHeader from "../signInHeader/SignInHeader";

import { routesConfig } from "../../routes/routesConfig";
import { signInSchema } from "../../core/helpers/validation.helpers";
import { ISignInForm } from "./signInForm.types";

import styles from "./signInForm.module.scss";

const SignInForm: FC = forwardRef(() => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISignInForm>({
    resolver: yupResolver(signInSchema),
    mode: "onSubmit",
    defaultValues: {
      phoneNumber: "9643292129",
      email: "pupsentiy@gmail.com",
    },
  });
  const onSubmit: SubmitHandler<ISignInForm> = (_data, e) => {
    e?.preventDefault();
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
                format={"+7(###)###-##-##"}
                mask={" "}
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
            classProps={classNames(styles.signInForm_submit, "button_primary")}
          >
            Начать
          </Button>
        </form>
      </div>
    </div>
  );
});

export default SignInForm;
