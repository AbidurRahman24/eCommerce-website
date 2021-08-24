import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51JRrBrJJw9W9jRGG1SeX3fyEczwUy3LRpIt2UJwMwHCg5hHQJO3DABdA9dqfVp2FFvqLqxlyk3M3MJMn3uMqX4rR00DEG4pDeY');


const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
      <CardElement
  options={{
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }}
/>
    </Elements>
    );
};

export default Payment;