import { AnyAction, configureStore, ThunkMiddleware } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { IPopup, popupSlice } from "./slices/popup/popupSlice";

export const store: ToolkitStore<
  {
    popup: IPopup;
  },
  AnyAction,
  [
    ThunkMiddleware<
      {
        popup: IPopup;
      },
      AnyAction,
      undefined
    >
  ]
> = configureStore({
  reducer: {
    // user: () => {},
    popup: popupSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
