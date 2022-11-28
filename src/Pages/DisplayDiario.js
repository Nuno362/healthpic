import React from 'react'
import { Link, useParams} from 'react-router-dom';
import Carousel from '../components/Carousel';

function DisplayDiario() {

  const { productId } = useParams();

  console.log(productId);

  return (
    <>
    <div>DisplayDiario {productId}</div>
    <Carousel Index ={productId}/>
    </>
    
  )
}

export default DisplayDiario