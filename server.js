const cors = require("cors");
const express = require("express");
const stripe = require("stripe")("sk_test_3bFivefJDiBEOZdfECa5YJsr00P0Uyy98A");
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
  });
  app.post("/checkout", async (req, res) => {
      let error;
      let status;
      try {
           const {product,token} = req.body;
           const customer = await stripe.customers.create({
               email: token.email,
               source: token.id

           })
           const key = uuidv4();
           const charge = await stripe.charges.create(
               {
                   amount:product.price * 100,
                   currency: "usd",
                   customer: customer.id,
                   receipt_email: token.email,
                   description:  'all products description',
                   shipping: {
                       name: token.card.name,
                       address: {
                        line1: token.card.address_line1,
                        line2: token.card.address_line2,
                        city: token.card.address_city,
                        country: token.card.address_country,
                        postal_code: token.card.address_zip

                       }
                   }

               },
            {idempotencyKey: key })
            status = "SUCCESS";
      } catch(error){
          console.log(error);
          status = "error";
      }
      res.json({status});
  });
  app.listen(8080, () => {
      console.log('your app is running port number 8080');
  });