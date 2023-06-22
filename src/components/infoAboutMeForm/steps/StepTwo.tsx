import { FC } from "react";
import { Controller, useFieldArray } from "react-hook-form";
import classNames from "classnames";

import Input from "../../input/Input";
import Button from "../../button/Button";

import { numbers } from "../../../core/constants/constants";
import { TNubmer } from "../../../core/constants/constants.types";
import { TStepsProps } from "../InfoAboutMeForm.types";

import plus from "../../../assets/img/Plus.svg";
import del from "../../../assets/img//Delete.svg";

import styles from "../infoAboutMeForm.module.scss";

const StepTwo: FC<TStepsProps> = ({ control, errors, setValue }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "advantages",
  });
console.log(errors)
  return (
    <>
      <p className={styles.title__advantages}>Advantages</p>
      {fields.map((_field, i: number) => (
        <div className={styles.wrapper_advantages} key={i}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name={`advantages.${i}.value`}
            defaultValue=""
            render={({ field: { onChange, value, ref } }) => (
              <Input
                type={"text"}
                placeholder={`fields-${i}-advantages`}
                classInput={styles.signInForm__input_advantages}
                onChange={onChange}
                value={value}
                inputRef={ref}
                error={
                  errors.advantages &&
                  errors.advantages[i] &&
                  errors.advantages[i]?.value &&
                  "Обязательное поле, должно состоять только из букв"
                }
              />
            )}
          />
          <Button
            type="button"
            classProps={styles.advatages__btn_delete}
            onClick={() => remove(i)}
          >
            <img src={del} alt="delete input advantages" />
          </Button>
        </div>
      ))}
      <Button
        classProps={classNames("button_second", styles.button__add_advantages)}
        type="button"
        onClick={() => append({ value: "" })}
      >
        <img src={plus} alt="add input advantages" />
      </Button>
      <div className={styles.checkbox_group}>
        <p>Checkbox group</p>
        {numbers &&
          numbers.map((checkbox: TNubmer, i: number) => (
            <div className={styles.wrapper_checkbox} key={i}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                name={`checkbox`}
                render={({ field: { onChange, value, ref } }) => (
                  <Input
                    name={`checkbox`}
                    type={"checkbox"}
                    classInput={""}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      if (event.target.checked) {
                        const arr = Array.from(
                          new Set([...value, Number(event.target.value)])
                        );
                        onChange(arr);
                      } else {
                        onChange(
                          value.filter(
                            (value) => value !== Number(event.target.value)
                          )
                        );
                      }
                    }}
                    value={checkbox.num}
                    checked={value.some((val) => val === checkbox.num)}
                    inputRef={ref}
                  />
                )}
              />
              <p>{checkbox.num}</p>
            </div>
          ))}
        <small className="input_error">{errors.checkbox?.message}</small>
      </div>
      <div className={styles.checkbox_group}>
        <p>Radio group</p>
        {numbers &&
          numbers.map((radio: TNubmer, i: number) => (
            <div className={styles.wrapper_checkbox} key={i}>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                name={`radioGroup`}
                render={({ field: { value, ref } }) => (
                  <Input
                    name={`radioGroup`}
                    type={"radio"}
                    classInput={""}
                    onChange={() => {
                      if (setValue) {
                        setValue("radioGroup", Number(radio.num));
                      }
                    }}
                    checked={value === radio.num}
                    value={value}
                    inputRef={ref}
                  />
                )}
              />
              <p>{radio.num}</p>
            </div>
          ))}
        <small className="input_error">{errors.radioGroup?.message}</small>
      </div>
    </>
  );
};

export default StepTwo;
