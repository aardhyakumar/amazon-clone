const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51J4tx5JJF2WsHK92FiVs49wIsYx2HgGzbHcw5crDkF5cRRnzbv3oFOdEFw6iWDXcAf4hmU5e6atrF0BTRQB0Mhzz00pM2Ole2C"
);
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log(total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
app.get("/", (request, response) => {
  response.status(200).send("hello world");
});
exports.api = functions.https.onRequest(app);
