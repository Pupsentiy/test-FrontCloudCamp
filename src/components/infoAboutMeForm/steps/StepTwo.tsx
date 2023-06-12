import { FC } from "react";
import { Controller } from "react-hook-form";
import classNames from "classnames";

import Input from "../../input/Input";

import { TStepsProps } from "../InfoAboutMeForm";

import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

import plus from "../../../assets/img/Plus.svg";
import del from "../../../assets/img//Delete.svg";

import styles from "../infoAboutMeForm.module.scss";
import Button from "../../button/Button";
import { setAddAdvantages, setDeleteAdvantages } from "../../../store/actions";

let id = 1;

const StepTwo: FC<TStepsProps> = ({ control, register, errors }) => {
  const dispatch = useAppDispatch();
  const { advantages } = useAppSelector((state) => state.formReducer);

  const addAdvantages = () => {
    dispatch(setAddAdvantages(`advantages-${id}`));
    if (advantages.length >= 0) {
      id += 1;
    }
  };

  const deleteAdvatage = (name: string) => {
    dispatch(setDeleteAdvantages(name));
  };

  console.log(advantages);
  return (
    <>
      <p className={styles.title__advantages}>Advantages</p>
      {advantages &&
        advantages.map((advan: any, i: number) => (
          <div className={styles.wrapper_advantages} key={i}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              name={advan}
              defaultValue=""
              render={({ field: { onChange, value, ref } }) => (
                <Input
                  type={"text"}
                  placeholder={"advantages"}
                  classInput={styles.signInForm__input}
                  {...register}
                  onChange={onChange}
                  value={value}
                  error={errors.nickname?.message}
                  inputRef={ref}
                />
              )}
            />
            <Button
              type="button"
              classProps={styles.advatages__btn_delete}
              onClick={() => deleteAdvatage(advan)}
            >
              <img src={del} alt="delete input advantages" />
            </Button>
          </div>
        ))}

      <Button
        classProps={classNames("button_second", styles.button__add_advantages)}
        type="button"
        onClick={() => addAdvantages()}
      >
        <img src={plus} alt="add input advantages" />
      </Button>
    </>
  );
};

export default StepTwo;
