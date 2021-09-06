import logo from "./logo.svg";
import Home from "./Components/Home";
import "./App.css";
import {
  ProductContextProvider,
  ProductContext,
  DAILY_AVG_HOURS_SCREEN_TIME,
  AVG_DAYS_IN_YEAR,
  POUNDS_CO2_EMISSIONS_PER_KWH_USING_NATURAL_GAS,
} from "./ProductContext";

function App() {
  return (
    <ProductContextProvider>
      <div className="App">
        <Home />
      </div>
    </ProductContextProvider>
  );
}

export default App;
