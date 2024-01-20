import { useContext, useEffect} from "react";
import Web3Context from "../../context/Web3Context";
import Navbar from "../../modules/Dashboard/Navbar";
import Description from "../../modules/Description/Description";
import Footer from "../../modules/Dashboard/Footer";
import ConnectUs from "../../modules/ConnectUs/ConnectUs";
const Wallet = ({ children }) => {
  const { handleWallet, isLoading } = useContext(Web3Context);
  useEffect(() => {
  
  }, []);
  return (
    <div className="flex flex-col">
      <Navbar onClick={handleWallet}></Navbar>
      <div className="flex items-center justify-around gap-x-[120px] p-[150px]">
        <Description onClick={handleWallet}></Description>
        <div>
          <div>{children}</div>
          {isLoading && <p>Loading...</p>}
        </div>
      </div>
      <ConnectUs></ConnectUs>
      <Footer></Footer>
    </div>
  );
};

export default Wallet;
