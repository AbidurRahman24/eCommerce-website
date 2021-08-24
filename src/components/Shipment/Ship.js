import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import Payment from '../Payment/Payment';

const Ship = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmit = data => {
    const savedCart = getDatabaseCart();
    const orderDetails = { ...loggedInUser, products: savedCart, shipment: data, orderTime: new Date() };

    fetch('https://vast-brook-89040.herokuapp.com/addOrder/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          processOrder();
          alert('your order placed successfully');
        }
      })

  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>

              <input className='from-control' defaultValue="Name" {...register("name")} />
              <br />
              <input defaultValue="email" className='from-control' {...register("email")} />
              <br />
              <input class="btn btn-primary" type="submit" />
            </form>
          </div>
          <div className="col-md-6">
            <Payment></Payment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ship;