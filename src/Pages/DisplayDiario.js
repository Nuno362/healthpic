import React from 'react'
import { Link, useParams} from 'react-router-dom';
import Carousel from '../components/Carousel';
import "./styles.css"
function DisplayDiario() {

  const { productId } = useParams();

  console.log(productId);

  return (
    <div className='site_Color'>
      <header className = "homeMenuHeader">
        <div className ="btn-menuDiario">
          <Link className ="btn-menuD" to ="/MenuDiario" >Ações</Link>
        </div>
        <div className ="homeMenuLogo">
          <img className='logo-homeMenu' src='healthPic_logo.svg' alt='logo'/>
        </div>
    </header>
    <div className="ajustar">
    <Carousel Index ={productId}/>
    </div>
    </div>
    
  )
}

export default DisplayDiario