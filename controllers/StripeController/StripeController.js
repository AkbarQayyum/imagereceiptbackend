const publishable =
  "pk_test_51NsrdZLyRzScJ8xjmb8aEU7uPyBtka0MG06YIL7sMgozwfgZXm0Djy2QDOvKfDuavRdOt3ly0Ui1ZKLVU7ZGsphP0007kPbWLV";
const secret =
  "sk_test_51NsrdZLyRzScJ8xjxeCFjHMLQzYmP6LcyRANgzDzV7f59pATDOO9LOFDpun5ME07rpFQGItmrXJKRibaRk5ywZN0005szTxmIb";

const Stripe = require("stripe");
const stripe = new Stripe(secret, { apiVersion: "2023-08-16" });

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

module.exports = {
  getpublishablekeys,
};
