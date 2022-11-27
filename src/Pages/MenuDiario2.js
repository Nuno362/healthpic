import React from 'react'
import { Link} from "react-router-dom"
import  "./menuDiarioStyle.css"


function MenuDiario2() {

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
    <div className = "card-grid-MenuDiario ">

    <div className = "card-MenuDiario">
        <div className = "card-body-MenuDiarioLink">
          <Link className ="btn2-menuDiario" to ="/MenuDiario" >Ações Anteriores</Link>
        </div>
      </div>

      <div className = "card-MenuDiario">
        <div className = "card-body-MenuDiario">
          <img src="/imagensDiárias/wc.png"/>
        </div>
        <div className = "card-footer-MenuDiario">
          <Link className ="btn2-menuDiario" to ="/DisplayDiario" >Casa de banho</Link>
        </div>
      </div>

      <div className = "card-MenuDiario">
        <div className = "card-body-MenuDiario">
          <img src="/imagensDiárias/desenhar.png"/>
        </div>
        <div className = "card-footer-MenuDiario">
          <Link className ="btn2-menuDiario" to ="/DisplayDiario" >Desenhar</Link>
        </div>
      </div>

      <div className = "card-MenuDiario">
        <div className = "card-body-MenuDiario">
          <img src="/imagensDiárias/vizinha.png"/>
        </div>
        <div className = "card-footer-MenuDiario">
          <Link className ="btn2-menuDiario" to ="/DisplayDiario" >Vizinha</Link>
        </div>
      </div>

      <div className = "card-MenuDiario">
        <div className = "card-body-MenuDiario">
          <img src="/imagensDiárias/vídeos.png"/>
        </div>
        <div className = "card-footer-MenuDiario">
          <Link className ="btn2-menuDiario" to ="/DisplayDiario" >Vídeos</Link>
        </div>
      </div>

    </div>
    </>
  )
}

export default MenuDiario2