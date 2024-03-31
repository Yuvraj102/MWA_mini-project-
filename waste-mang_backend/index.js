
const express = require('express')
const {json,urlencoded} = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51K3hkxSIlI85igSuXmBcQBwhB2W1PkaoultEhi6HMt1E5oT6tylGqj47NWxT4zjJOLBruOMQGlkZmeoz5savWH2c00q2w2RrZb'); // Replace with your Secret key

const app = express();
app.use(cors())
app.use(json());
app.use(urlencoded({ extended: true }));

app.post('/', async (req, res) => {
  try {
const {products} = req.body ;
        
    const lineItems = products.map((product) => ({
        price_data : {
            currency: "inr",
            product_data : {
               name : product.name ,
               images : [...product.images]           
            },
            unit_amount: Math.round(product.price* 100 )
        }   ,
        quantity: product.quantity
    }))
    console.log('line items>>>', lineItems)
    const session = await stripe.checkout.sessions.create({
        payment_method_types : ["card"],
        line_items : lineItems ,
        mode: "payment", 
        success_url: "http://localhost:3000/home",
        cancel_url : "http://localhost:3000"
    })
    res.json ({id : session.id})
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Payment failed!' });
  }
});

app.listen(5000)