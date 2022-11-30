import React from 'react'
import { Link} from "react-router-dom"

import "./styles.css"
import MenuSelector from "../components/MenuSelector"

function MenuDiario() {

  return (
    <>
      <header className = "homeMenuHeader">
        <div className ="btn-menuDiario">
          <Link className ="btn-menuD" to ="/HomeMenu" >Menu</Link>
        </div>
        <div className ="homeMenuLogo">
          <img className='logo-homeMenu' src='healthPic_logo.svg' alt='logo'/>
        </div>
    </header>
    <p className = "menuDiarioText">
        <b>Ações Diárias </b><br/>
        Selecione a ação que deseja fazer neste momento.<br/>
        Tempo de seleção: 3 segundos.<br/>
    </p>
    <MenuSelector/>
    </>
  )
}

export default MenuDiario