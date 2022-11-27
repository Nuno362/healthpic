import DisplayDiario from "./Pages/DisplayDiario";
import DisplayEmocoes from "./Pages/DisplayEmocoes";
import Home from "./Pages/Home";
import HomeMenu from "./Pages/HomeMenu";
import MenuDiario from "./Pages/MenuDiario";
import MenuEmocoes from "./Pages/MenuEmocoes";

import { Routes, Route} from "react-router-dom"






function App() {
  return (
    <Routes>

      <Route path = "/" element = {<Home />} />

      <Route path = "/HomeMenu" element = {<HomeMenu />} />

      <Route path = "/MenuDiario" element = {<MenuDiario />} />

      <Route path = "/MenuEmocoes" element = {<MenuEmocoes />} />

      <Route path = "/DisplayDiario" element = {<DisplayDiario />} />

      <Route path = "/DisplayEmocoes" element = {<DisplayEmocoes />} />


    </Routes>
  );
}

export default App;
