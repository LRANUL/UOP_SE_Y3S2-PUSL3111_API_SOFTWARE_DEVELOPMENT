const express = require('express');
const router = express.Router();

router.get(
  '/profile',
  (req, res, next) => {
    res.json({
      message: 'You made it to the secure route',
      user: req.user,
      token: req.query.secret_token
    })
  }
);

router.delete(
  '/customer-delete/:nic',
  (req, res, next) => {
    Customer.findOneAndDelete({ nic: req.params.nic }, (err, Customer) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: `${req.params.nic} was deleted.` });
    });
  }
);


module.exports = router;
