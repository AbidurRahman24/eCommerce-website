import React from 'react';


const Card = (props) => {
   const card = props.card;
    const total = card.reduce( (total, prd) => total + prd.price * prd.quantity , 0 )
    // let total = 0;
    // for(let i = 0; i< total.length; i++){
    //     const product = total[i];
    //    total = total + product.price * product.quantity;
    //     console.log(product);
    // }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <div style={{textAlign:'center'}} className="card-title">
            <h2 >Order Summary</h2>
            <p>Items ordered: {card.length}</p>
            </div>
            <p>Price: {formatNumber(total)}</p>
            <p><small>Shiiping Cost: {shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <h5 style={{color:'orange'}}>Total Price: {grandTotal}</h5>
            {
                props.children
            }
        </div>
    );
};


export default Card;