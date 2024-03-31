import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useElements } from '@stripe/react-stripe-js';

const YOUR_PUBLISHABLE_KEY = 'pk_test_51K3hkxSIlI85igSuNW4xGWxwV7nDsPILOIT2EUTqvUDMiP9yM2Jqm3GfBRnyuzSG50MWxyV7tXHdvgUw9pxL4iY000WdqdEQWV'; // Replace with your actual key
const PaymentForm = () => {
    const [cardElement, setCardElement] = useState(null);
    const [paymentError, setPaymentError] = useState(null);
    const elements = useElements();
  
    const stripePromise = loadStripe(YOUR_PUBLISHABLE_KEY);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!cardElement) {
        return;
      }
  
      const { paymentIntent, error } = await stripePromise.confirmCardPayment(
        'http://localhost:5000/your-backend-confirmation-route', // Replace with your actual backend route
        {
          payment_method: {
            card: cardElement,
          },
        }
      );
  
      if (error) {
        setPaymentError(error.message);
        return;
      }
  
      console.log('Payment successful!', paymentIntent); // Handle on frontend (replace with logic)
    };
  
    return (
      <Elements stripe={stripePromise}>
        <form onSubmit={handleSubmit}>
          <div role="alert">{paymentError && <p>{paymentError}</p>}</div>
          <CardElement options={{ style: { base: { fontSize: '16px' } } }} onReady={(element) => setCardElement(element)} />
          <button type="submit" disabled={!cardElement}>
            Pay
          </button>
        </form>
      </Elements>
    );
  };
  
  export default PaymentForm;