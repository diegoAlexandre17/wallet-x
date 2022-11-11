import { AppRouter } from "./wallet-proyecto/routes/AppRouter";
import { useAppSelector } from "./wallet-proyecto/redux/hooks/hooks";
import type { RootState } from "./wallet-proyecto/redux/store";

function App() {
  const { theme } = useAppSelector((state: RootState) => state.theme);

  return (
    <div className={theme ? "dark" : "light"}>
      <div className="container app">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
