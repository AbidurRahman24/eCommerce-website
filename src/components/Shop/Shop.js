import React, { useEffect, useState } from "react";
import './Shop.css'
import fakeData from "../../fakeData";
import Products from "../Products/Products";
import Card from "../Card/Card";
import { addToDatabaseCart } from "../../utilities/databaseManager";

const Shop = () => {
    
  const first10 =  fakeData.slice(0,10)
  const [products, setProducts] = useState(first10);
  const [card, setCard] = useState([])

  const handleClick = (product) =>{
      const newCard = [...card, product]
      setCard(newCard);
      const sameProduct = newCard.filter(pd => pd.key === product.key)
      const count = sameProduct.length
      addToDatabaseCart(product.key, count);
      
  }

  return (
    <div>
      <div className="container">
          <div className="row">
            <div className="col-md-9">
                <div className="product-container">
                    {

                        products.map(product => 
                        <Products
                        key={product.key}
                        handleClick={handleClick}
                        showAddToCart={true}
                         product={product}
                         >
                         </Products>)
                    }
                </div>
            </div>
            <div className="col-md-3">
                <div className="card-container">
                    <Card card={card}/>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Shop;
