import { Routes, Route, HashRouter } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Navbar } from "../components/Navbar";
import { InversionesPages } from "../components/Pages/InversionesPages";
import { PerfilPage } from "../components/Pages/PerfilPage";
import { ServiciosPage } from "../components/Pages/ServiciosPage";
import { TarjetasPages } from "../components/Pages/TarjetasPages";
import { TransferenciasPage } from "../components/Pages/TransferenciasPage";

export const AppRouter = () => {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inversiones" element={<InversionesPages />} />
          <Route path="/tarjetas" element={<TarjetasPages />} />
          <Route path="/transferencias" element={<TransferenciasPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
        </Routes>
        <Navbar />
      </HashRouter>
    </>
  );
};
