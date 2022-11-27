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
    <div className = "card-grid-MenuDiario ">

      <div className = "card-MenuDiario">
        <div className = "card-body-MenuDiario">
          <img src="/imagensDiárias/comer.png"/>
        </div>
        <div className = "card-footer-MenuDiario">
          <Link className ="btn2-menuDiario" to ="/DisplayDiario" >Comer</Link>
        </div>
      </div>

      <div className = "card-MenuDiario">
        <div className = "card-body-MenuDiario">
          <img src="/imagensDiárias/jardim.png"/>
        </div>
        <div className = "card-footer-MenuDiario">
          <Link className ="btn2-menuDiario" to ="/DisplayDiario" >Jardim</Link>
        </div>
      </div>

      <div className = "card-MenuDiario">
        <div className = "card-body-MenuDiario">
          <img src="/imagensDiárias/Cão.png"/>
        </div>
        <div className = "card-footer-MenuDiario">
          <Link className ="btn2-menuDiario" to ="/DisplayDiario" >cão</Link>
        </div>
      </div>

      <div className = "card-MenuDiario">
        <div className = "card-body-MenuDiario">
          <img src="/imagensDiárias/tv.png"/>
        </div>
        <div className = "card-footer-MenuDiario">
          <Link className ="btn2-menuDiario" to ="/DisplayDiario" >TV</Link>
        </div>
      </div>

      <div className = "card-MenuDiario">
        <div className = "card-body-MenuDiarioLink">
          <Link className ="btn2-menuDiario" to ="/MenuDiario2" >Mais Ações</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default MenuDiario