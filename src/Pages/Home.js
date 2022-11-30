import React from 'react'
import "./styles.css"

import { Link} from "react-router-dom"

function Home() {


  return (
    <>
    <header>
        <div className ="homeLogo">
          <img className='logo' src='healthPic_logo.svg' alt="let's talk, in pictures!"/> 
        </div>
    </header>
    <p className = "logoText">let's talk, in pictures!</p>
    <p className = "homeText">
        Aqui ajudamos-lhe a comunicar com os seus familiares e amigos!<br/>
        Expresse o que está a sentir e o que deseja fazer no momento!<br/>
        <br/>
        <br/>
        Este site está criado de forma a usar os seus <b>olhos</b>.<br/>
        Para selecionar olhe para o botão desejado durante 3 segundos.<br/>
    </p>
    <Link className ="homeButton" to ="/HomeMenu" >Começar agora</Link>

    </>
  )
}

export default Home