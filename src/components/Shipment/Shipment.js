import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import './Shipment.css'


const Shipment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='ship-form'>

      <input name='name' {...register("name", { required: true })} placeholder='Enter Name'/>
      {errors.name && <span className='error'>This field is required</span>}
      
      {/* Email */}
      <input email {...register("email", { required: true } ,{ pattern: /\S+@\S+\.\S+/ })} placeholder='Enter Email' />
      {errors.email && <span className='error'>This field is required</span>}

      <input {...register("address", { required: true })} placeholder='Address'/>
      {errors.address && <span className='error'>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
};

export default Shipment;