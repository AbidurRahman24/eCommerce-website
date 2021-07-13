import { Button } from 'react-bootstrap';
import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Products = (props) => {
    // console.log(props);
    const {name, img, seller, price, stock, key} = props.product
    return (
        <div>
            <div className="row">
                <div className="col-md-4 ">
                    <a href='/'><img src={img} alt="" /></a>
                </div>
                <div className="col-md-8">
                    <h5> <Link to={'/product/'+key}>{name}</Link> </h5>
                    <p><small>by: {seller}</small></p>
                    <p>Price: $ {price}</p>
                    <p> Only {stock} left in stock - order soon</p>
                    {
                        props.showAddToCart === true &&  <Button onClick={()=> props.handleClick(props.product)} variant="primary"> <FontAwesomeIcon icon={faShoppingCart} /> Add To Card</Button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;