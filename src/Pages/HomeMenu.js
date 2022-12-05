import { Link} from "react-router-dom"

import "./styles.css"


function HomeMenu() {
  return (
    <>
    <header className = "homeMenuHeader">
        <div className ="homeMenuLogo">
          <img className='logo-homeMenu' src='healthPic_logo.svg' alt='logo'/>
        </div>
    </header>
    <div className = "homeMenuText">
    <p className="p1"><b >Menu</b></p>
    <p className="p2">Escolha uma das opções abaixo</p>
    <p className="p3">Tempo de seleção: 3 segundos</p>
    </div>
 
    <div className = "card-grid ">
      <div className = "card firstElement">
        <div className = "card-footer">
          <Link className ="btn-homeMenu" to ="/MenuDiario" >Ações Diárias</Link>
        </div>
      </div>

      <div className = "card lastElement">
        <div className = "card-footer">
          <Link className ="btn-homeMenu" to ="/MenuEmocoes" >Emoções</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomeMenu

