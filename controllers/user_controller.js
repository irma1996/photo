const bcrypt = require("bcrypt");
const { matchedData, validationResult } = require("express-validator");
const models = require("../models");

const index = async (req, res) => {
  res.status(405).send({
    status: "fail",
    message: "Method not allowed"
  });
};

const show = async (req, res) => {
  res.status(405).send({
    status: "fail",
    message: "Method not allowed"
  });
};

//POST
const store = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Create user request failed validation:", errors.array());
    res.status(422).send({
      status: "fail",
      data: errors.array()
    });
    return;
  }

  const validData = matchedData(req);

  //generate a hash of 'validData.password'
  try {
    const hash = await bcrypt.hash(
      validData.password,
      models.User.hashSaltRounds
    );
    validData.password = hash;
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Exception thrown when hashing the password"
    });
    throw errors;
  }

  try {
    const user = await new models.User(validData).save();
    console.log("Created new user", user);
    res.send({
      status: "success",
      data: {
        user
      }
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Exception thrwon in database when creating a new user"
    });
    throw error;
  }
};

const update = async (req, res) => {
  res.status(405).send({
    status: "fail",
    message: "Method not allowed"
  });
};

module.exports = {
  index,
  show,
  store,
  update
};
