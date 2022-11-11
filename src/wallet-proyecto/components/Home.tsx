import { MenuTop } from "./MenuTop";
import { Movimientos } from "./Movimientos";

import { Saldo } from "./Saldo";

export const Home = () => {
  return (
    <div className="home my-4">
      <Saldo />
      <MenuTop />
      <Movimientos />
    </div>
  );
};
