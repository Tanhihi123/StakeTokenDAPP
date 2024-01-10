import { Route, Routes } from "react-router-dom";
import "./App.css";
import Wallet from "./components/Wallet/Wallet";
import { StakingProvider } from "./context/StakingContext";
import StakePage from "./pages/StakePage";
import StakingPage from "./pages/StakingPage";

function App() {
  return (
    <Routes>
            <Route path="/" element={<StakingPage></StakingPage>}></Route>

      <Route path="/" element={<StakingPage></StakingPage>}></Route>
    </Routes>
  );
}

export default App;
