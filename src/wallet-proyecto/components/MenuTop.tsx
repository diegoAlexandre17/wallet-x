import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";

export const MenuTop = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <nav className="py-4">
      <ul className="nav justify-content-center gap-4">
        <li className="nav-item text-center d-flex flex-column">
          <i className="fa-solid fa-chart-column fs-5 rounded-circle border p-3"></i>
          <Link className={theme ? "text-white" : ""} to="/transferencias">
            Dolares
          </Link>
        </li>
        <li className="nav-item text-center d-flex flex-column">
          <i className="fa-solid fa-circle-chevron-down fs-5 rounded-circle border p-3"></i>

          <Link className={theme ? "text-white" : ""} to="/transferencias">
            Retiros
          </Link>
        </li>
        <li className="nav-item text-center d-flex flex-column">
          <i className="fa-solid fa-credit-card fs-5 rounded-circle border p-3"></i>
          <Link className={theme ? "text-white" : ""} to="/tarjetas">
            Tarjetas
          </Link>
        </li>
      </ul>
    </nav>
  );
};
