import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

//Reducers
import themeReducer from "./reducers/theme/themeSlices";
import saldoReducer from "./reducers/saldo/saldoSlice";
import movimientosReducer from "./reducers/movimientos/movimientosSlices";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    saldo: saldoReducer,
    movimientos: movimientosReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
