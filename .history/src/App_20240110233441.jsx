import { Route, Routes } from "react-router-dom";
import "./App.css";
import Wallet from "./components/Wallet/Wallet";
import { StakingProvider } from "./context/StakingContext";
import StakePage from "./pages/StakePage";
import StakingPage from "./pages/StakingPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/stake" element={<StakingPage></StakingPage>}></Route>
    </Routes>
  );
}

export default App;
