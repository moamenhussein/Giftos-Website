import React from 'react'
import Image from 'next/image'
const ProductsInfo = (props) => {
  return (
    <div className='productsInfo'>
      <div className="container">
        <div className="box">
        <Image src={props.image} alt='Image'/>
        <div className="titleandprice flex justify-between px-5 mt-5">
          <h5>{props.title}</h5>
          <h6>Price: <span>${props.price}</span></h6>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsInfo
