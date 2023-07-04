import { RootState } from "../../store";

export const selectIsActive = (state: RootState) => state.popup.isActive
export const selectType = (state: RootState) => state.popup.type
