const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const cors = require('cors');

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

// router.delete(
//   '/delete',
//   (req, res, next) => {
//     Customer.findOneAndDelete({ _id: new mongoose.Types.ObjectId(req.body.id) }, (err, Customer) => {
//       if (!err) {
//           res.json({ msg: "customer deleted", deleted: Customer });
//       } else {
//           console.log("Error removing :" + err);
//       }
//   });
//   }
// );

router.delete(
  '/customer-delete/:nic',  cors(),
  (req, res, next) => {
    const nic = req.params.nic;
    Customer.findOneAndDelete( nic, (err, Customer) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: `${req.params.nic} was deleted.` });
    });
  }
);


module.exports = router;
