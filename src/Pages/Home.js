import React from 'react'


import { Link} from "react-router-dom"

function Home() {


  return (
    <>
    <header>
        <div className ="homeLogo">
          <img className='logo' src='logo192.png' alt='logo'/>
          <p>let's talk, in pictures!</p>
        </div>
    </header>
    <p className = "homeText">
        Aqui ajudamos-lhe a comunicar com os seus familiares e amigos!<br/>
        Expresse o que está a sentir e o que deseja fazer no momento!<br/>
        <br/>
        <br/>
        Este site está criado de forma a usar os seus olhos.<br/>
        Para selecionar olhe para o botão desejado durante 3 segundos.<br/>
    </p>
    <Link className ="homeButton" to ="/HomeMenu" >Começar agora</Link>

    </>
  )
}

export default Home