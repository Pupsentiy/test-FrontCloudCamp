import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { RootState, TypedDispatch } from "../store/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>();