'use strict';

const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const localConfig = require('../../localConfig');
const validator = require("validator");

router.post('/login', async (req, res, next) => {
    try {
        // recogemos credenciales
        const email = req.body.email;
        const password = req.body.password;

        // buscamos en base de datos
        const user = await User.findOne({ email: email }).exec();

        // si encontramos al usuario
        if (!user) {
            res.json({ success: true, message: 'invalid credentials' });
            return;
        }

        // comprobamos su password
        if (password !== user.password) {
            res.json({ success: true, message: 'invalid credentials' });
            return;
        }

        // creamos un JWT
        jwt.sign({ user_id: user._id }, localConfig.jwt.secret, {
            expiresIn: localConfig.jwt.expiresIn
        }, (err, token) => {
            if (err) {
                next(err);
                return;
            }
            // respondemos al cliente dándole el JWT
            res.json({ success: true, token: token });
        })


    } catch (err) {
        next(err);
    }

});

// Register

router.post("/register", async (req, res, next) => {
  try {
    // get the credentials
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    

    // Check for existing user
    const user = await User.findOne({ email: email }).exec();
    // User already register
    if (user) {
        res.json({ success: true, message: "This email address is already in use" });
      return;
    }

    // comprobamos su password
    if (password !== user.password) {
      res.json({ success: true, message: "invalid credentials" });
      return;
    }

    // creamos un JWT
    jwt.sign(
      { user_id: user._id },
      localConfig.jwt.secret,
      {
        expiresIn: localConfig.jwt.expiresIn
      },
      (err, token) => {
        if (err) {
          next(err);
          return;
        }
        // respondemos al cliente dándole el JWT
        res.json({ success: true, token: token });
      }
    );
  } catch (err) {
    next(err);
  }
});


module.exports = router;
