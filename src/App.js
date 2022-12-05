
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



    </Routes>
  );
}

export default App;
