import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Saldo {
  saldo: number;
}

const initialState: Saldo = {
  saldo: 1000,
};

export const saldoSlice = createSlice({
  name: "gastarSaldo",
  initialState,
  reducers: {
    transferenciaSaldo(state, action: PayloadAction<number>) {
      if (state.saldo > action.payload) {
        return {
          saldo: state.saldo - action.payload,
        };
      }
    },
  },
});

export const { transferenciaSaldo } = saldoSlice.actions;
export default saldoSlice.reducer;
