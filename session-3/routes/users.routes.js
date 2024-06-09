const router = require("express").Router();
const {
  getUsers,
  searchUsers,
  getUserById,
} = require("../controllers/users.controllers");

router.get("/", getUsers);

router.get("/search", searchUsers);

router.get("/:uuid", getUserById);

module.exports = router;
