//User Validation Rules

const { body } = require("express-validator");
const models = require("../models");

const createRules = [
  body("title").isLength({ min: 3 }),
  body("user_id")
    .optional()
    .isLength({ min: 1 })
];

const photoToAlbum = [
  body("photo_id").custom(value => {
    return models.Photo.fetchById(value);
  })
];

module.exports = {
  createRules,
  photoToAlbum
};
