import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import { changeTheme } from "../redux/reducers/theme/themeSlices";

export const Header = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeTheme());
    console.log("bien");
  };
  return (
    <div className="">
      <header className="header-wallet">
        {/* <i className="fa-solid fa-wallet fs-1 rounded-circle p-4"></i> */}
        <Link className={theme ? "text-white" : "black"} to="/">
          <img
            className="img-header img-fluid"
            src="https://cdn-icons-png.flaticon.com/512/3814/3814848.png"
            alt="wallet"
          />
        </Link>

        <div className="form-check form-switch mt-3">
          <input
            onClick={handleClick}
            className="form-check-input"
            type="checkbox"
            role="button"
            id="flexSwitchCheckChecked"
          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheckChecked"
          ></label>
        </div>
      </header>
    </div>
  );
};
