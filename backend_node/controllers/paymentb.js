var braintree = require("braintree");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "5tzrj9ycb82t885q",
  publicKey: "66qsy6z2d62p89vv",
  privateKey: "402fb701e40619e6d2fbe763f29f758a"
});

exports.getToken = (req, res) => {
  gateway.clientToken.generate({}, function(err, response) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(response);
    }
  });
};

exports.processPayment = (req, res) => {
  let nonceFromTheClient = req.body.paymentMethodNonce;

  let amountFromTheClient = req.body.amount;
  gateway.transaction.sale(
    {
      amount: amountFromTheClient,
      paymentMethodNonce: nonceFromTheClient,

      options: {
        submitForSettlement: true
      }
    },
    function(err, result) {
      if (err) {
        res.status(500).json(error);
      } else {
        res.json(result);
      }
    }
  );
};
