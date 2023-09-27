const userSchema = require("../../models/UserModal");
const Stripe = require("stripe");

// const publishable =
//   "pk_test_51Ns3yNSICWvJLyV1xhpRTyoJJvdBaEDiuT6AbX4Pk8c2zGl1efx7ubmJji0k4uv8AWZ4eGXq7w0VStzk9AeIsj0W00OvWjOZQD";
// const secret =
//   "sk_test_51Ns3yNSICWvJLyV1zUqY5IiqLjdEKWAHAwVZUU6T5HkREy7cphCmBl24tg9Kuyk3IJXwzaJlId3LIPIG9CVcNECV00b5BDXlKa";

const getpublishablekeys = async (req, res) => {
  try {
    console.log(parseFloat(req.body.amount) * 1000);
    const data = await userSchema.findOne({ _id: req.body.id });
    const secret = data.secret;
    const stripe = Stripe(secret);
    const paymentintent = await stripe.paymentIntents.create({
      amount: parseFloat(req.body.amount) * 1000,
      currency: "usd",
      payment_method_types: ["card"],
    });
    const clientsecret = paymentintent.client_secret;

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
