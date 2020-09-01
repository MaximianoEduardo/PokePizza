import React from 'react';

import { Products, Card } from './styles';

const ProductList: React.FC = () => {
  return (
    <Products>

        <Card>
            <img src="" alt=""/>
            <div className="card__price">
              <span>Price</span>
            </div>
            <div className="card__info">
              <h2>Titulo</h2>
            </div>
            <button>Comprar</button>
        </Card>
        <Card>
            <img src="" alt=""/>
            <div className="card__price">
              <span>Price</span>
            </div>
            <div className="card__info">
              <h2>Titulo</h2>
            </div>
            <button>Comprar</button>
        </Card>
    </Products>
  );
};

export default ProductList;
