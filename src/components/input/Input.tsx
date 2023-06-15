import { FC } from "react";
import { ChangeHandler, RefCallBack } from "react-hook-form";

import styles from "./input.module.scss";

export type TInputProps = {
  htmlFor?: string;
  error?: string;
  type: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  checked?:boolean
  defaultValue?:string
  placeholder?: string;
  classInput: string;
  classLabel?: string;
  inputRef?: RefCallBack;
  register?: {
    inputRef?: RefCallBack;
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    disabled?: boolean | undefined;
  };
};

const Input: FC<TInputProps> = ({
  htmlFor,
  error,
  type,
  name,
  onChange,
  value,
  checked,
  defaultValue,
  classInput,
  classLabel,
  placeholder,
  register,
  inputRef
}) => {
  return (
    <div className={styles.input__conteiner}>
      <label className={classLabel} htmlFor={htmlFor}>
        {htmlFor}
      </label>
      <input
        type={type}
        name={name}
        className={classInput}
        id={htmlFor}
        {...register}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        checked={checked}
        defaultValue={defaultValue}
        ref={inputRef}
      />
      {error !== undefined && <small className={styles.input_error}>{error}</small>}
    </div>
  );
};

export default Input;
