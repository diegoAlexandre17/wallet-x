import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Movimientos {
  tipo_gasto: string;
  concepto: string;
  fecha: string;
  monto: number;
}

const initialState: Movimientos[] = [];

export const movimientosSlice = createSlice({
  name: "movimientos",
  initialState,
  reducers: {
    setMovimientos(state: Movimientos[], action: PayloadAction<Movimientos>) {
      return [
        ...state,
        {
          tipo_gasto: action.payload.tipo_gasto,
          fecha: action.payload.fecha,
          monto: action.payload.monto,
          concepto: action.payload.concepto,
        },
      ];
    },
  },
});

export const { setMovimientos } = movimientosSlice.actions;
export default movimientosSlice.reducer;
