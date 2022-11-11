export const TarjetasPages = () => {
  return (
    <div className="container">
      <h2 className="text-center py-3">Tarjetas</h2>

      <img
        className="img-fluid m-4 border border-secondary rounded"
        src="https://www.visaempresarial.com/Views/Shared/co-bbva/images/card-empresarial-debito-bbva-detalle.png"
        alt=""
      />

      <section>
        <p className="border border-secondary m-0 p-2 text-center">
          Pausar <i className="fa-solid fa-pause"></i>
        </p>
        <p className="border border-secondary m-0 p-2 text-center">
          Reportar <i className="fa-solid fa-ban"></i>
        </p>
        <p className="border border-secondary m-0 p-2 text-center">
          Olvide mi PIN <i className="fa-solid fa-question"></i>
        </p>
        <p className="border border-secondary m-0 p-2 text-center">
          Extraer dinero sin tarjeta{" "}
          <i className="fa-solid fa-money-bill-transfer"></i>
        </p>
      </section>
    </div>
  );
};
