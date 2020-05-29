const express = require("express");
const router = express.Router();
const {
  addPhonebookDetails,
  getPhonebookById,
  updatePhonebookDetails,
  getAllPhonebookDetail,
  deletePhonebookDetail,
} = require("../controllers/phonebook");
const { check } = require("express-validator");

const phonebookValidator = [
  check("name")
    .isLength({ min: 3 })
    .withMessage("Name should be atleast 3 character long!"),
  check("email").isEmail().withMessage("Please provide a valid email"),
];

router.param("phonebookId", getPhonebookById);

router.get("/phonebookdetail", getAllPhonebookDetail);

router.post("/addphonebook", phonebookValidator, addPhonebookDetails);

router.post("/updatephonebook/:phonebookId", updatePhonebookDetails);

router.post("/deletephonebook/:phonebookId", deletePhonebookDetail);

module.exports = router;
