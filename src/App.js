import { useContext } from "react";
import "./App.css";
import Cards from "./component/Cards";
import Search from "./component/Search";
import { Globalcontext } from "./gobalcontex";
import { Navbarmenu } from "./component/Navbar";

function App() {
  const { theme } = useContext(Globalcontext);
  return (
    <div className={theme ? "App-dark-mode" : "App-light-mode"}>
      <Navbarmenu />
      <Search />
      <Cards />
    </div>
  );
}

export default App;
