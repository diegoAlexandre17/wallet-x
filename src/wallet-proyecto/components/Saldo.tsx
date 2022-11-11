import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export const Saldo = () => {
  const { saldo } = useSelector((state: RootState) => state.saldo);
  return (
    <section className="text-center">
      <h2>Saldo: ${saldo}</h2>
    </section>
  );
};
