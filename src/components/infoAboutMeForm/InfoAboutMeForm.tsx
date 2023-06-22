import { FC, useEffect, useState } from "react";
import classNames from "classnames";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { infoAboutMeFormShema } from "../../core/helpers/validation.helpers";
import { TInfoAboutMeForm } from "./InfoAboutMeForm.types";

import Button from "../button/Button";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";

import ProgressBar from "../progressBar/ProgressBar";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { myThunkActionCreator, setChangeStep } from "../../store/actions";
import { TForm } from "../../store/types/store.types";

import styles from "./infoAboutMeForm.module.scss";

const InfoAboutMeForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { stepForm, selected } = useAppSelector((state) => state.otherReducer);
  const [checkedSelect, setCheckedSelect] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<TInfoAboutMeForm>({
    resolver: yupResolver(infoAboutMeFormShema),
    mode: "onChange",
    defaultValues: {
      advantages: [{ value: "" }, { value: "" }, { value: "" }],
      checkbox: [] as number[],
    },
  });

  const checkErrorCustomSelect = () => {
    if (selected === "Не выбрано") {
      setCheckedSelect(false);
    } else {
      setCheckedSelect(true);
    }
  };

  const changeStepNext = async () => {
    if (stepForm === 2) {
      return;
    }

    let res;
    switch (stepForm) {
      case 0:
        res = await trigger(["nickname", "name", "sername"]);
        checkErrorCustomSelect();
        break;
      case 1:
        res = await trigger([`advantages`, "checkbox", "radioGroup"]);
        break;

      default:
        break;
    }
    if (res && checkedSelect && selected !== "Не выбрано") {
      dispatch(setChangeStep(stepForm + 1));
    }
  };

  const changeStepPrev = () => {
    if (stepForm !== 0) {
      dispatch(setChangeStep(stepForm - 1));
    } else {
      navigate(-1);
    }
  };

  useEffect(() => {
    setCheckedSelect(true);
  }, [selected]);

  const submit: SubmitHandler<TInfoAboutMeForm> = (data, e) => {
    e?.preventDefault();
    const newData: TForm = JSON.parse(JSON.stringify(data));
    const advanString: string[] = [...data.advantages].map(
      (item) => item.value
    );
    Object.defineProperty(newData, "advantages", {
      value: advanString,
    });

    dispatch(myThunkActionCreator(newData));
  };

  const steps = [
    <StepOne
      control={control}
      register={register}
      errors={errors}
      checkedSelect={checkedSelect}
    />,
    <StepTwo
      control={control}
      register={register}
      errors={errors}
      setValue={setValue}
    />,
    <StepThree control={control} register={register} errors={errors} />,
  ];
  return (
    <div className={styles.infoAboutMeForm_wrapper}>
      <ProgressBar />
      <form>{steps[stepForm]}</form>
      <div className={styles.infoAboutMeForm_wrapper_nav}>
        <Button
          type="button"
          classProps={classNames(styles.signInForm_submit, "button_second")}
          onClick={() => changeStepPrev()}
        >
          Назад
        </Button>
        {stepForm === 2 ? (
          <Button
            type="submit"
            onClick={handleSubmit(submit)}
            classProps={classNames(styles.signInForm_submit, "button_primary")}
          >
            Отправить
          </Button>
        ) : (
          <Button
            type="button"
            classProps={classNames(styles.signInForm_submit, "button_primary")}
            onClick={() => changeStepNext()}
          >
            Далее
          </Button>
        )}
      </div>
    </div>
  );
};

export default InfoAboutMeForm;
