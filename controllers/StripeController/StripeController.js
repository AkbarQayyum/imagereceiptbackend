const userSchema = require("../../models/UserModal");
const Stripe = require("stripe");

const publishable =
  "pk_test_51Ns3yNSICWvJLyV1xhpRTyoJJvdBaEDiuT6AbX4Pk8c2zGl1efx7ubmJji0k4uv8AWZ4eGXq7w0VStzk9AeIsj0W00OvWjOZQD";
const secret =
  "sk_test_51Ns3yNSICWvJLyV1zUqY5IiqLjdEKWAHAwVZUU6T5HkREy7cphCmBl24tg9Kuyk3IJXwzaJlId3LIPIG9CVcNECV00b5BDXlKa";

const stripe = Stripe(secret);
const getpublishablekeys = async (req, res) => {
  try {
    const paymentintent = await stripe.paymentIntents.create({
      amount: 1099,
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

const updateUser = async (req, res) => {
  try {
    let data = await userSchema.updateOne(
      { _id: req.body.userid },
      {
        $set: {
          isAccountAttatched: true,
          secret: req.body.secret,
          public: req.body.public,
        },
      }
    );
    res.send("user record updated");
  } catch (error) {
    res.send({ error: error });
  }
};

const removeaccount = async (req, res) => {
  try {
    let data = await userSchema.updateOne(
      { _id: req.params.id },
      {
        $set: {
          isAccountAttatched: false,
          secret: "",
          public: "",
        },
      }
    );
    res.send("user record updated");
  } catch (error) {
    res.send({ error: error });
  }
};

const getsingleuser = async (req, res) => {
  try {
    let data = await userSchema.findOne({ _id: req.body.id });

    res.send(data);
  } catch (error) {
    res.send({ error: error });
  }
};

module.exports = {
  getpublishablekeys,
  updateUser,
  getsingleuser,
  removeaccount,
};
