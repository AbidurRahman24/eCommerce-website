import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';

const Ship = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
      const savedCart = getDatabaseCart();
        const orderDetails = {...loggedInUser, products: savedCart, shipment: data, orderTime: new Date()};
  
        fetch('https://vast-brook-89040.herokuapp.com/addOrder/addOrder', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
          if(data){
            processOrder();
            alert('your order placed successfully');
          }
        })
  
      };
    return (
        <div>
            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          name="message"
          autoComplete="off"
          {...register("message", {
            required: "Required",
          })}
        />
        {errors.message && errors.message.message}
        <input type="submit" />
      </form>
        </div>
    );
};

export default Ship;