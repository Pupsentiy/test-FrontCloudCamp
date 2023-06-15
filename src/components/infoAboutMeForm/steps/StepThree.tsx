import { FC } from "react";
import { Controller } from "react-hook-form";

import { TStepsProps } from "../InfoAboutMeForm";

import styles from "../infoAboutMeForm.module.scss";

const StepThree: FC<TStepsProps> = ({ control, register, errors }) => {



  return (
    <div className={styles.wrapper_about}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        name={`about`}

        
        defaultValue=""
        render={({ field: { onChange, value, ref } }) => (
          <>
            <label htmlFor="about" className={styles.textarea__label}>
              About
            </label>
            <textarea
              className={styles.textarea}
              id="about"
              // type={"text"}
              placeholder={"about"}
              {...register}
              onChange={onChange}
              value={value}
              // inputRef={ref}
              
            ></textarea>
            <div className={styles.textarea_other}>
              <small className={styles.textarea__error}>
                {errors.about?.message}
              </small>
              <small className={styles.counter_textarea}>
                {value.replace(/ /g, '').length}
              </small>
            </div>
          </>
        )}
      />
    </div>
  );
};

export default StepThree;
