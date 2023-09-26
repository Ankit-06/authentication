const express = require("express");
const app = express();
const axios = require("axios");
const { URL } = require("./config");
const { isAuthenticatedUser } = require("./auth.js");

app.use(express.json());

app.post("/auth/capsules", isAuthenticatedUser, (req, res) => {
  axios
    .request(URL)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(error?.status || 404).json(error);
    });
});

app.post("/auth/capsules/:capsule_serial", isAuthenticatedUser, (req, res) => {
    const capsuleId = req.params.capsule_serial;
  axios
    .request(`${URL}/${capsuleId}`)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(error?.status || 404).json(error);
    });
});

module.exports = app;
