const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors"); // think of it as a security
const stripe = require("stripe")(
    "sk_test_51KCZNFCeaw2FkqOChFhmKHhtqgHdmF7Oaog6FpwP6z3w6XDDNaMe9dXbem6Hn3MYCJ4qMP8jGp8lbTzglnl7RkfB000QpGif6W"); 
    // Secret key of stripe goes here

// To setup an API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  // The total in the payment.js, the amount in subunits

  // console.log("Payment Request Received BOOM!!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
