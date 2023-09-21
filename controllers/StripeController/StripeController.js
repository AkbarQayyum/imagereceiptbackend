const publishable =
  "pk_test_51Ns3yNSICWvJLyV1xhpRTyoJJvdBaEDiuT6AbX4Pk8c2zGl1efx7ubmJji0k4uv8AWZ4eGXq7w0VStzk9AeIsj0W00OvWjOZQD";
const secret =
  "sk_test_51Ns3yNSICWvJLyV1zUqY5IiqLjdEKWAHAwVZUU6T5HkREy7cphCmBl24tg9Kuyk3IJXwzaJlId3LIPIG9CVcNECV00b5BDXlKa";

const Stripe = require("stripe");
const stripe = new Stripe(secret, { apiVersion: "2020-08-27" });

const getpublishablekeys = async (req, res) => {
  try {
    console.log(req.body.amount);
    let amt = (parseFloat(req.body.amount) * 100)
    console.log(amt)
    const paymentintent = await stripe.paymentIntents.create({
      amount:amt ,
      currency: "usd",
      payment_method_types: ["card"],
    });
    console.log(paymentintent);
    const clientsecret = paymentintent.client_secret;
    console.log(clientsecret);

    res.json({
      clientsecret: clientsecret,
    });
  } catch (error) {
    res.json({ error: error });
  }
};

module.exports = {
  getpublishablekeys,
};
