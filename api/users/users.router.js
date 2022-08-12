const {
  createUser,
  getUsers,
  deleteUser,
  login,
  getCustomers,
  getSalesman,
} = require("./users.controlers");
const { checkToken } = require("../../auth/token_validation");
const router = require("express").Router();

router.post("/login", login);
router.post("/", createUser);
router.get("/", checkToken, getUsers);
router.delete("/", checkToken, deleteUser);
router.get("/customers", checkToken, getCustomers);
router.get("/salesman", checkToken, getSalesman);

module.exports = router;
