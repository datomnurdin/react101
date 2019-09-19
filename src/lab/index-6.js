import React from 'react';
import Product from './product';
import ProductsData from './productsData';

function App(){

  const productComponents = ProductsData.map( item => <Product key={item.id} product={item}/>)

  return(
    <div>
      {productComponents}
    </div>
  )
}

export default App