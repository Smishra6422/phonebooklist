const Phonebook = require("../models/phonebook");
const { validationResult } = require("express-validator");

exports.getPhonebookById = async (req, res, next, id) => {
  try {
    const phonebookdetail = await Phonebook.findById(id);
    if (!phonebookdetail) throw new Error("Some error occured in DB");
    req.phonebookdetail = phonebookdetail;
    next();
  } catch (error) {
    res.status(400).json({ error: error.errmsg });
  }
};

exports.getAllPhonebookDetail = async (req, res) => {
  try {
    const phonebooks = await Phonebook.find().sort({ name: -1 });
    if (!phonebooks) throw new Error("No phonebooks exists!");
    res.json({ phonebooks });
  } catch (error) {
    res.status(400).json({ error: error.errmsg });
  }
};

exports.addPhonebookDetails = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const phonebook = new Phonebook(req.body);
  phonebook
    .save()
    .then((phonbookDetails) => {
      res.json({
        name: phonbookDetails.name,
        mobile: phonbookDetails.mobile,
        email: phonbookDetails.email,
      });
    })
    .catch((err) => {
      res.send({ err });
    });
};

exports.updatePhonebookDetails = async (req, res) => {
  try {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(422).json({ errors: errors.array() });
    // }

    const phonebook = await Phonebook.findByIdAndUpdate(
      { _id: req.phonebookdetail._id },
      { $set: req.body },
      { new: true, useFindAndModify: false }
    );
    if (!phonebook) throw new Error("Your update was not successfull");

    res.json(phonebook);
  } catch (err) {
    res.status(400).json({ err });
  }
};

exports.deletePhonebookDetail = async (req, res) => {
  //   console.log(req.phonbookDetail._id + "hh");
  try {
    const phonebook = await Phonebook.findByIdAndDelete({
      _id: req.phonebookdetail._id,
    });
    if (!phonebook) throw new Error("Delete was not successful !");
    res.json(phonebook);
  } catch (error) {
    res.status(400).json({ error: error.errmsg });
  }
};
