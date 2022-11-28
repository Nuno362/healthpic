import React from 'react'
import { Link, useParams} from 'react-router-dom';

function DisplayDiario() {

  const { productId } = useParams();

  console.log(productId);

  return (
    <div>DisplayDiario {productId}</div>
  )
}

export default DisplayDiario