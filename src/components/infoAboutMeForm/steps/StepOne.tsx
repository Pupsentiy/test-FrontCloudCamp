import { FC, Fragment } from "react";
import { Controller } from "react-hook-form";

import Input from "../../input/Input";
import Select from "../../select/Select";

import { useAppSelector } from "../../../hooks/hooks";

import { TStepsProps } from "../InfoAboutMeForm.types";

import styles from "../infoAboutMeForm.module.scss";

const StepOne: FC<TStepsProps> = ({
  control,
  register,
  errors,
  checkedSelect,
}) => {
  const { selected } = useAppSelector((state) => state.otherReducer);
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

      <Fragment>
        <Select />
        {selected === "Не выбрано" && !checkedSelect && (
          <small className="input_error">Обязательное поле</small>
        )}
      </Fragment>
    </>
  );
};

export default StepOne;
