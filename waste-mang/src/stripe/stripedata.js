import { useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export async function makePayment(products){
    const stripe = await loadStripe('pk_test_51K3hkxSIlI85igSuNW4xGWxwV7nDsPILOIT2EUTqvUDMiP9yM2Jqm3GfBRnyuzSG50MWxyV7tXHdvgUw9pxL4iY000WdqdEQWV')
    const body = {
        products
    }
    const headers = {
        "content-type": "application/json"
    }
    console.log('mamking paymetn')
    const response = await fetch('http://localhost:5000',{
        method: 'POST',
        headers,
        body : JSON.stringify(body)
    })
    const session = await response.json()
    stripe.redirectToCheckout({
        // successUrl: 'http://localhost:3000',
        sessionId: session.id
    })
}

