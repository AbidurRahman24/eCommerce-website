import React, { useEffect, useState } from "react";
import './Shop.css'
import Products from "../Products/Products";
import Card from "../Card/Card";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";

const Shop = () => {

  const [products, setProducts] = useState([]);
  const [card, setCard] = useState([])

  useEffect(()=>{
    fetch('https://vast-brook-89040.herokuapp.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  useEffect(()=>{
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    // console.log(products, productKeys);
    fetch('https://vast-brook-89040.herokuapp.com/productsByKeys', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(productKeys)
  })
  .then(res => res.json())
  .then(data => {
      setCard(data)
      console.log(data)})
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
