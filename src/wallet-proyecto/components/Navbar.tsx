import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";

export const Navbar = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <nav className="navbar-footer py-2 border border-secondary rounded">
      <ul className="nav nav-pills d-flex justify-content-around text-center">
        <li className="nav-item d-flex flex-column align-items-center ">
          <i className="fa-solid fa-house"></i>
          <Link className={theme ? "text-white" : ""} to="/">
            Home
          </Link>
        </li>

        <li className="nav-item d-flex flex-column align-items-center ">
          <i className="fa-solid fa-arrow-right-arrow-left"></i>
          <Link className={theme ? "text-white" : ""} to="/transferencias">
            Transferir
          </Link>
        </li>

        <li className="nav-item d-flex flex-column align-items-center ">
          <i className="fa-solid fa-file-invoice"></i>
          <Link className={theme ? "text-white" : ""} to="/servicios">
            Servicios
          </Link>
        </li>

        <li className="nav-item d-flex flex-column align-items-center ">
          <i className="fa-solid fa-user"></i>
          <Link className={theme ? "text-white" : ""} to="/perfil">
            Mi Perfil
          </Link>
        </li>
      </ul>
    </nav>
  );
};
