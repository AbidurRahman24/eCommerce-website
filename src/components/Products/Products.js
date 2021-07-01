import { Button } from 'react-bootstrap';
import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Products = (props) => {
    // console.log(props);
    const {name, img, seller, price, stock} = props.product
    return (
        <div>
            <div className="row">
                <div className="col-md-4 ">
                    <img src={img} alt="" />
                </div>
                <div className="col-md-8">
                    <h5>{name}</h5>
                    <p><small>by: {seller}</small></p>
                    <p>Price: $ {price}</p>
                    <p> Only {stock} left in stock - order soon</p>
                     <Button onClick={()=> props.handleClick(props.product)} variant="primary"> <FontAwesomeIcon icon={faShoppingCart} /> Add To Card</Button>{' '}
                </div>
            </div>
        </div>
    );
};

export default Products;