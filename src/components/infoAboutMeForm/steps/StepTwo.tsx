import { FC, forwardRef, useState } from "react";
import { Controller, useFieldArray } from "react-hook-form";
import classNames from "classnames";

import Input from "../../input/Input";

import { TStepsProps } from "../InfoAboutMeForm";

import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

import plus from "../../../assets/img/Plus.svg";
import del from "../../../assets/img//Delete.svg";

import styles from "../infoAboutMeForm.module.scss";
import Button from "../../button/Button";
import { setAddAdvantages, setDeleteAdvantages } from "../../../store/actions";
import { numbers } from "../../../core/constants/constants";
import { TNubmer } from "../../../core/constants/constants.types";

let id = 1;

const StepTwo: FC<TStepsProps> = ({
  control,
  register,
  errors,
  setValue,
  watch,
}) => {
  const dispatch = useAppDispatch();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "advantages",
    }
  );

  // const watchRadioGroup = watch("radioGroup");
  // const { advantages } = useAppSelector((state) => state.formReducer);

  // const addAdvantages = () => {
  //   dispatch(setAddAdvantages(`advantages-${id}`));
  //   if (advantages.length >= 0) {
  //     id += 1;
  //   }
  // };

  // const deleteAdvatage = (name: string) => {
  //   dispatch(setDeleteAdvantages(name));
  // };
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
            // key={field.id}
            defaultValue=""
            render={({ field: { onChange, value, ref } }) => (
              <Input
                type={"text"}
                placeholder={`fields-${i}-advantages`}
                classInput={styles.signInForm__input}
                onChange={onChange}
                value={value}
                inputRef={ref}
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
                    checked={value.some(val => val === checkbox.num)}
                    // value={value}
                    inputRef={ref}
                  />
                )}
              />
              <p>{checkbox.num}</p>
            </div>
          ))}
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
                      setValue("radioGroup", Number(radio.num));
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
      </div>
    </>
  );
};

export default StepTwo;
