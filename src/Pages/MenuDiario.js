import React from 'react'
import { Link} from "react-router-dom"
import  "./menuDiarioStyle.css"

function MenuDiario() {
  return (
    <>
      <header className = "homeMenuHeader">
        <div className ="btn-menuDiario">
          <Link className ="btn-menuD" to ="/HomeMenu" >Menu</Link>
        </div>
        <div className ="menuDiarioLogo">
          <img className='logo-menuDiario' src='logo192.png' alt='logo'/>
        </div>
    </header>
    <p className = "menuDiarioText">
        Ações Diárias <br/>
        Selecione a ação que deseja fazer neste momento.<br/>
        Tempo de seleção: 3 segundos.<br/>
    </p>
    
    </>
  )
}

export default MenuDiario