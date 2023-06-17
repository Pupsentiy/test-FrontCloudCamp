import { Dispatch } from "redux";
import { ActionTypes, TForm, TOtherTypeAction } from "../types/store.types";
import { fetchPostForm } from "../../api/requestApi";

export const setChangeSeleсion = (selected: string) => {
  return (dispatch: Dispatch<TOtherTypeAction>) => {
    dispatch({
      type: ActionTypes.CHANGE_SELECT,
      payload: selected,
    });
  };
};

export const setChangeStep = (step: number) => {
  return (dispatch: Dispatch<TOtherTypeAction>) => {
    dispatch({
      type: ActionTypes.CHANGE_STEP,
      payload: step,
    });
  };
};

export const myThunkActionCreator = (dataForm: TForm) => {
  return async (dispatch: Dispatch<TOtherTypeAction>) => {
    dispatch({ type: ActionTypes.FETCH_DATA });
    const [response] = await fetchPostForm(dataForm);
    console.log(response, "asda");
    if ([response].length) {
      dispatch({ type: ActionTypes.FETCH_DATA_SUCCESS });
    } else {
      dispatch({
        type: ActionTypes.FETCH_DATA_ERROR,
      });
    }
  };
};

export const setCloseModal = () => {
  return (dispatch: Dispatch<TOtherTypeAction>) => {
    dispatch({
      type: ActionTypes.CLOSE_MODAL,
    });
  };
};
