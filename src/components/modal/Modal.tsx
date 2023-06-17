import { FC, Fragment } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { routesConfig } from "../../routes/routesConfig";

import Button from "../button/Button";

import success from "../../assets/img/Icon Decor Predefined.svg";
import error from "../../assets/img/Icon Decor Predefined (1).svg";
import close from "../../assets/img/Button Icon Transparent.svg";

import styles from "./modal.module.scss";
import { setChangeSeleсion, setCloseModal } from "../../store/actions";

const Modal: FC = () => {
  const dispatch = useAppDispatch();
  const { modalOpen, isSuccess } = useAppSelector(
    (state) => state.otherReducer
  );

  const closeModal = () => {
    dispatch(setCloseModal());
    dispatch(setChangeSeleсion("Не выбрано"));
  };
  return (
    <div
      className={
        modalOpen ? classNames(styles.modal, styles.active) : styles.modal
      }
    >
      <div
        className={classNames(
          modalOpen
            ? classNames(styles.modal__content, styles.active)
            : styles.modal__content
        )}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          e.stopPropagation()
        }
      >
        {modalOpen && isSuccess && (
          <Fragment>
            <h1>Форма успешно отправлена</h1>
            <img
              className={styles.modal_status_img}
              src={success}
              alt="success"
            />
            <NavLink to={routesConfig.main.path}>
              <Button
                type="button"
                classProps={classNames(
                  "button_primary",
                  styles.modal_status_success_btn
                )}
                onClick={() => closeModal()}
              >
                На Главную
              </Button>
            </NavLink>
          </Fragment>
        )}
        {modalOpen && !isSuccess && (
          <Fragment>
            <div className={styles.header_modal}>
              <h1>Ошибка</h1>
              <Button type="button" classProps="" onClick={() => closeModal()}>
                <img src={close} alt="close" />
              </Button>
            </div>
            <img className={styles.modal_status_img} src={error} alt="error" />
            <Button
              type="button"
              classProps={classNames(
                styles.modal_status_error_btn,
                "button_primary"
              )}
              onClick={() => closeModal()}
            >
              Закрыть
            </Button>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Modal;
