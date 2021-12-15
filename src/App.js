import Profil from "./components/Profil";
import TotalMoney from "./components/TotalMoney";
import ProductContent from "./components/ProductContent";
import Basket from "./components/Basket";

import "./App.css";

function App() {
  return (
    <div className="App container ">
      <Profil />
      <TotalMoney />
      <ProductContent />
      <Basket />
    </div>
  );
}

export default App;
