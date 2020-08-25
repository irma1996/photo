const { matchedData, validationResult } = require("express-validator");
const models = require("../models");
const { Album, Photo, User } = require("../models");

//GET/
const index = async (req, res) => {
  console.log(req.user.id);

  try {
    const user = await new models.User({ id: req.user.id }).fetch({
      withRelated: "albums"
    });

    // const albums = await models.Album.fetchAll();
    const albums = user.related("albums");
    console.log(albums);

    res.send({ status: "success", data: { albums } });
  } catch (err) {
    res.status(404).send({
      status: "fail",
      data: "user not available"
    });
  }
};

//GET/:albumId
const show = async (req, res) => {
  try {
    const album = await new models.Album({
      id: req.params.id,
      user_id: req.user.id
    }).fetch({ withRelated: ["photos"] });
    res.send({ status: "success", data: { album } });
  } catch (err) {
    res.status(404).send({
      status: "fail",
      data: "not available"
    });
  }
};

//POST
const store = async (req, res) => {
  console.log(req.user.id);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Create album request failed validation:", errors.array());
    res.status(422).send({
      status: "fail",
      data: errors.array()
    });
    return;
  }

  const validData = matchedData(req);
  validData.user_id = req.user.id;

  try {
    const album = await new Album(validData).save();
    console.log("Created new album successfully:", album);
    res.send({
      status: "success",
      data: {
        album
      }
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Exception thrown in database when creating a new album"
    });
    throw errors;
  }
};

// POST /albums/:albumid/photo - Post album to photo
const addAlbumsToPhoto = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(422).send({
      status: "fail",
      data: error.array()
    });
    return;
  }

  try {
    const photo = await Photo.fetchById(req.body.photo_id);
    const album = await Album.fetchById(req.params.albumId);
    const photoToAlbum = await album.photos().attach([photo]);

    res.status(201).send({
      status: "success",
      data: photoToAlbum
    });
  } catch (err) {
    res.status(500).send({
      status: "error",
      message: "error when trying to add photo to album"
    });
    throw error;
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
  addAlbumsToPhoto,
  update
};
