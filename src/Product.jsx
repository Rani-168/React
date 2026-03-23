import React from 'react'
import { useParams } from 'react-router-dom'

function Product() {
    const {id} =useParams();
    console.log(id);
  return (
    <div>
        <p>Product for product {id}</p>
    </div>
    

  )
}

export default Product