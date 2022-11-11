import { useAppSelector } from "../redux/hooks/hooks";
import type { RootState } from "../redux/store";

export const Movimientos = () => {
  const movimientos = useAppSelector((state: RootState) => state.movimientos);

  return (
    <section className="text-center">
      <h3>Movimientos</h3>
      {movimientos.map((movimiento) => (
        <article
          key={crypto.randomUUID()}
          className="d-flex justify-content-between align-items-center"
        >
          <i
            className={
              movimiento.tipo_gasto === "transferencia"
                ? "fa-solid fa-money-bill-transfer fs-1 rounded-circle  p-4"
                : "fa-solid fa-file-lines fs-1 rounded-circle  p-4"
            }
          ></i>
          <div>
            <p>{movimiento.concepto}</p>
            <span>{movimiento.fecha}</span>
          </div>
          <p>{movimiento.monto}</p>
        </article>
      ))}
    </section>
  );
};
