import React, { useEffect, useState } from "react";

import { selectOptions } from "../../core/constants/constants";
import { TSelectOption } from "../../core/constants/constants.types";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { setChangeSeleсion } from "../../store/actions";

import arrow from "../../assets/img/ChevronDown.svg";

import styles from "./select.module.scss";

const Select: React.FC = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const selectRef = React.useRef<HTMLDivElement>(null);
  const selected = useAppSelector((state) => state.otherReducer.selected);

  const selectSex = (obj: TSelectOption) => {
    dispatch(setChangeSeleсion(obj.title));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLDivElement;
      if (selectRef.current && selectRef.current.contains(target)) return;
      setOpen(false);
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <div className={styles.select_title}>Sex</div>
      <div
        className={styles.select}
        onClick={() => setOpen(!open)}
        ref={selectRef}
      >
        <span
          className={
            selected !== "Не выбрано"
              ? styles.select__label
              : styles.select__placholder
          }
        >
          {selected}
        </span>
        <img
          src={arrow}
          alt="arrow"
          className={open ? styles.select__img : ""}
        />
        {open && (
          <ul className={styles.select_list}>
            {selectOptions.map((obj: TSelectOption, i: number) => (
              <li
                className={styles.select_list__item}
                key={i}
                onClick={() => selectSex(obj)}
              >
                {obj.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Select;
