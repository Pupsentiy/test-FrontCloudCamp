import { FC } from "react";
import { Controller } from "react-hook-form";

import Input from "../../input/Input";
import Select from "../../select/Select";

import { TStepsProps } from "../InfoAboutMeForm";

import styles from "../infoAboutMeForm.module.scss";

const StepOne: FC<TStepsProps> = ({ control, register, errors }) => {
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        name="nickname"
        defaultValue=""
        render={({ field: { onChange, value, ref } }) => (
          <Input
            type={"text"}
            placeholder="Nickname"
            htmlFor="Nickname"
            classInput={styles.signInForm__input}
            classLabel={styles.signInForm__label}
            {...register}
            onChange={onChange}
            value={value}
            error={errors.nickname?.message}
            inputRef={ref}
          />
        )}
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        name="name"
        defaultValue=""
        render={({ field: { onChange, value, ref } }) => (
          <Input
            type={"text"}
            placeholder="Name"
            htmlFor="Name"
            classInput={styles.signInForm__input}
            classLabel={styles.signInForm__label}
            {...register}
            onChange={onChange}
            value={value}
            error={errors.name?.message}
            inputRef={ref}
          />
        )}
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        name="sername"
        defaultValue=""
        render={({ field: { onChange, value, ref } }) => (
          <Input
            type={"text"}
            placeholder="Sername"
            htmlFor="Sername"
            classInput={styles.signInForm__input}
            classLabel={styles.signInForm__label}
            {...register}
            onChange={onChange}
            value={value}
            error={errors.sername?.message}
            inputRef={ref}
          />
        )}
      />

      <Select />
    </>
  );
};

export default StepOne;
