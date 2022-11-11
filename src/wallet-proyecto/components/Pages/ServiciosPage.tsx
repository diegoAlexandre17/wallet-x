import { useState } from "react";
import useForm from "../../customHooks/useForm";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { setMovimientos } from "../../redux/reducers/movimientos/movimientosSlices";
import { transferenciaSaldo } from "../../redux/reducers/saldo/saldoSlice";
import { Transferencia } from "../Pages/TransferenciasPage";

const initialState: Transferencia = {
  monto: 0,
  concepto: "",
  tipo_gasto: "servicio",
};

export const ServiciosPage = () => {
  const [servicio, setServicio] = useState("");

  const [showPago, setShowPago] = useState(false);

  const { saldo } = useAppSelector((state) => state.saldo);

  const dispatch = useAppDispatch();

  const { values, handleInputChange } = useForm(initialState);

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    setServicio(e.currentTarget.alt);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (values.monto === 0) {
      return;
    } else if (saldo > values.monto) {
      dispatch(transferenciaSaldo(values.monto));

      dispatch(
        setMovimientos({
          tipo_gasto: initialState.tipo_gasto,
          fecha: new Date().toLocaleDateString(),
          monto: values.monto,
          concepto: servicio,
        })
      );

      e.currentTarget.reset();
      setServicio("");
      setShowPago(!showPago);

      setTimeout(function () {
        setShowPago(false);
      }, 2000);
    } else {
      alert("No tienes suficiente dinero");
    }
  };

  return (
    <div className="container pb-5 mb-4">
      <h2 className="text-center">Sercivios</h2>

      <div className="pb-3">
        <h3>Recarga de celulares:</h3>
        <div className="d-flex justify-content-between flex-wrap align-items-center">
          <img
            src="https://logodownload.org/wp-content/uploads/2014/02/claro-logo-8.png"
            alt="Claro"
            className="img-header img-fluid m-4 img-servicios"
            onClick={handleClick}
          />

          <img
            src="https://seeklogo.com/images/P/personal-logo-87FDFA9A11-seeklogo.com.png"
            alt="Personal"
            className="img-header img-fluid m-4 img-servicios"
            onClick={handleClick}
          />

          <img
            src="https://logodownload.org/wp-content/uploads/2018/12/movistar-logo.png"
            alt="Movistar"
            className="img-header img-fluid m-4 img-servicios"
            onClick={handleClick}
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Nuevo_Logo_Tuenti.svg"
            alt="Tuenti"
            className="img-header img-fluid m-4 img-servicios"
            onClick={handleClick}
          />
        </div>
      </div>

      <div className="pb-3">
        <h3>Pagar Servicios:</h3>
        <div className="d-flex justify-content-between flex-wrap align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Edesur_company_logo.png"
            alt="Edesur"
            className="img-header img-fluid m-4 img-servicios"
            onClick={handleClick}
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/20/Metrogas_logo.svg"
            alt="Metrogas"
            className="img-header img-fluid m-4 img-servicios"
            onClick={handleClick}
          />

          <img
            src="https://www.exentia.com.ar/img/clientes_16_aysa.svg"
            alt="Aysa"
            className="img-header img-fluid m-4 img-servicios"
            onClick={handleClick}
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Fibertel.svg"
            alt="Fibertel"
            className="img-header img-fluid m-4 img-servicios"
            onClick={handleClick}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="inputCbu" className="form-label">
            Servicio: {servicio}
          </label>
          {/* <input
            type="text"
            className="form-control"
            id="servicio"
            name="servicio"
            defaultValue={servicio}
          /> */}
        </div>

        <div className="my-3">
          <label htmlFor="monto" className="form-label">
            Monto:
          </label>
          <input
            type="number"
            id="monto"
            className="form-control"
            name="monto"
            onChange={handleInputChange}
          />
        </div>

        <button className="btn w-100 my-3">Pagar Servicio</button>
      </form>
      {showPago && (
        <div className="alert" role="alert">
          Pago realizado!
        </div>
      )}
    </div>
  );
};
