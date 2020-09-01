import React from 'react';
import { Categorias } from './styles'
import ProductList from '../productList'

const Categories: React.FC = () => {
  return (

    <>
      <Categorias>
        <h2> Tipos de salgados </h2>

        <div className="categories-wrapper">
          <span className='active'>Coxinhas</span>
          <span>Pasteis</span>
          <span>Bebidas</span>
          <span>Pizzas</span>
        </div>
      </Categorias>

      <ProductList />

    </>

  );
};

export default Categories;
