import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type PopupTypes = null | "auth" | "workDeleted";

export interface IPopup {
  isActive: boolean;
  type: PopupTypes;
}

const initialState: IPopup = {
  isActive: false,
  type: null,
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    open: (state, action: PayloadAction<{ type: PopupTypes }>) => {
      state.isActive = true;
      state.type = action.payload.type;
    },
    close: (state) => {
      state.isActive = false;
    },
  },
});

export const { open, close } = popupSlice.actions;

