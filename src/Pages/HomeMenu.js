import { Link} from "react-router-dom"
import  "./homeMenuStyle.css"

function HomeMenu() {
  return (
    <>
    <header className = "homeMenuHeader">
        <div className ="homeMenuLogo">
          <img className='logo-homeMenu' src='logo192.png' alt='logo'/>
        </div>
    </header>
    <p className = "homeMenuText">
        Menu <br/>
        Escolha uma das opções abaixo<br/>
        Tempo de seleção: 3 segundos<br/>
    </p>
    <div className = "card-grid ">
      <div className = "card firstElement">
        <div className = "card-body card-image">
          <img src="exemploFoto1.jpg"/>
        </div>
        <div className = "card-footer">
          <Link className ="btn-homeMenu" to ="/MenuDiario" >Ações Diárias</Link>
        </div>
      </div>

      <div className = "card lastElement">
        <div className = "card-body card-image">
          <img src="exemploFoto2.jpg"/>
        </div>
        <div className = "card-footer">
          <Link className ="btn-homeMenu" to ="/MenuEmocoes" >Emoções</Link>
        </div>
      </div>
    </div>

    </>
  )
}

export default HomeMenu