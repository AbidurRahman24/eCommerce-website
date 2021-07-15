import React, { useEffect, useState } from "react";
import './Shop.css'
import fakeData from "../../fakeData";
import Products from "../Products/Products";
import Card from "../Card/Card";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";

const Shop = () => {

  const first10 = fakeData.slice(0, 10)
  const [products, setProducts] = useState(first10);
  const [card, setCard] = useState([])

  useEffect(()=>{
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const previousCart = productKeys.map( existingKey => {
        const product = fakeData.find( pd => pd.key === existingKey);
        product.quantity = savedCart[existingKey];
        return product;
    } )
    setCard(previousCart);
}, [])


  const handleClick = (product) => {
    const toBeAddedKey = product.key
    const sameProduct = card.find(pd => pd.key === product.key)
    let count = 1
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const order = card.filter(product => product.key !== toBeAddedKey);
      newCart = [...order, sameProduct]
    }
    else {
      product.quantity = 1;
      newCart = [...card, product]
    }
    setCard(newCart);
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
              <Card card={card} />
              <Link  to='/review'>
                <Button>Review Order</Button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
