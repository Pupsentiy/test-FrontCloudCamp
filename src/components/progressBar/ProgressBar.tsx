import { FC } from "react";
import classNames from "classnames";

import { useAppSelector } from "../../hooks/hooks";

import dot from "../../assets/img/Dot Small.svg";
import check from "../../assets/img/Check Small.svg";

import { TNubmer } from "../../core/constants/constants.types";
import { numbers } from "../../core/constants/constants";

import styles from "./progressbar.module.scss";

const ProgressBar: FC = () => {
  const stepForm = useAppSelector((state) => state.otherReducer.stepForm);
  return (
    <>
      <div
        className={classNames(
          styles.progressBar_wrapper,
          stepForm === 1 && styles.progressBar_wrapper_steps_two,
          stepForm === 2 && styles.progressBar_wrapper_steps_three
        )}
      >
        <div className={styles.progressBar__fillBar}>
          <span
            className={classNames(
              styles.progressBar_dot,
              styles.progressBar_dot__active
            )}
          >
            <img src={stepForm === 0 ? dot : check} alt="" />
          </span>
          <span
            className={classNames(
              styles.progressBar_dot,
              stepForm === 1 && styles.progressBar_dot__active,
              stepForm === 2 && styles.progressBar_dot__active
            )}
          >
            <img
              src={stepForm === 1 ? dot : stepForm === 2 ? check : ""}
              alt=""
            />
          </span>
          <span
            className={classNames(
              styles.progressBar_dot,
              stepForm === 2 && styles.progressBar_dot__active
            )}
          >
            <img src={stepForm === 2 ? dot : ""} alt="" />
          </span>
        </div>
      </div>
      <div className={styles.progressBar_nums}>
        {numbers &&
          numbers.map((item: TNubmer, i: number) => (
            <span
              className={classNames(
                stepForm + 1 >= item.num
                  ? styles.progressBar__num_active
                  : styles.progressBar__num
              )}
              key={i}
            >
              {item.num}
            </span>
          ))}
      </div>
    </>
  );
};

export default ProgressBar;
