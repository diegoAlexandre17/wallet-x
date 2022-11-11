import { useState } from "react";
import useForm from "../../customHooks/useForm";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { setMovimientos } from "../../redux/reducers/movimientos/movimientosSlices";
import { transferenciaSaldo } from "../../redux/reducers/saldo/saldoSlice";

export interface Transferencia {
  cbu_o_alias?: string;
  monto: number;
  concepto: string;
  tipo_gasto: string;
}

const initialState: Transferencia = {
  cbu_o_alias: "",
  monto: 0,
  concepto: "",
  tipo_gasto: "transferencia",
};

export const TransferenciasPage = () => {
  const [transferenciaInfo, setTransferenciaInfo] = useState(false);

  const { saldo } = useAppSelector((state) => state.saldo);

  const dispatch = useAppDispatch();

  const { values, handleInputChange, setValues } = useForm(initialState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //Tipamos el evento que recibimos por parametro como React.FormEvent<HTMLFormElement>
    e.preventDefault();

    if (
      values.cbu_o_alias === "" ||
      values.monto < 0 ||
      values.concepto === ""
    ) {
      return;
    }

    if (saldo > values.monto) {
      dispatch(transferenciaSaldo(values.monto));

      dispatch(
        setMovimientos({
          concepto: values.concepto,
          fecha: new Date().toLocaleDateString(),
          monto: values.monto,
          tipo_gasto: initialState.tipo_gasto,
        })
      );

      setTransferenciaInfo(!transferenciaInfo);
    } else {
      alert("no tienes suficiente dinero");
    }

    e.currentTarget.reset();

    setValues(initialState);

    setTimeout(function () {
      setTransferenciaInfo(false);
    }, 2000);
  };

  return (
    <div className="container">
      <h2 className="text-center py-3">Transferencias</h2>

      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="inputCbu" className="form-label">
            Ingrese el CBU o el Alias:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCbu"
            name="cbu_o_alias"
            onChange={handleInputChange}
            onFocus={() => setTransferenciaInfo(false)}
          />
        </div>

        <div className="my-3">
          <label htmlFor="monto" className="form-label">
            Monto:
          </label>
          <input
            type="number"
            className="form-control"
            id="monto"
            name="monto"
            onChange={handleInputChange}
          />
        </div>

        <div className="my-3">
          <label htmlFor="concepto" className="form-label">
            Concepto:
          </label>
          <input
            type="text"
            className="form-control"
            id="concepto"
            name="concepto"
            onChange={handleInputChange}
          />
        </div>

        <button className="btn w-100 my-3">Enviar</button>
      </form>

      {transferenciaInfo && (
        <div className="alert" role="alert">
          Transferencia realizada!
        </div>
      )}
    </div>
  );
};
