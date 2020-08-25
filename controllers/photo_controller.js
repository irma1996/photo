const { matchedData, validationResult } = require("express-validator");
const models = require("../models");
const { Photo, User } = require("../models");

//GET/
const index = async (req, res) => {
  try {
    const user = await new models.User({ id: req.user.id }).fetch({
      withRelated: "photos"
    });

    // const albums = await models.Album.fetchAll();
    const photos = user.related("photos");
    res.send({ status: "success", data: { photos } });
  } catch (err) {
    res.status(404).send({
      status: "fail",
      data: "not available"
    });
  }
};

//GET/:photoId
const show = async (req, res) => {
  try {
    const photo = await new models.Photo({
      id: req.params.id,
      user_id: req.user.id
    }).fetch({ withRelated: ["albums"] });
    res.send({ status: "success", data: { photo } });
  } catch (err) {
    res.status(404).send({
      status: "fail",
      data: "not available"
    });
  }
};

//POST
const store = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).send({
      status: "fail",
      data: errors.array()
    });
    return;
  }

  const validData = matchedData(req);
  validData.user_id = req.user.id;

  try {
    const photo = await new Photo(validData).save();

    res.send({
      status: "success",
      data: {
        photo
      }
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Exception thrown in database when creating a new photo"
    });
    throw errors;
  }
};

// UPDATE  a specific resources
const update = (req, res) => {
  res.status(405).send({
    status: "fail",
    message: "Method no allowed"
  });
};

module.exports = {
  index,
  show,
  store,
  update
};
