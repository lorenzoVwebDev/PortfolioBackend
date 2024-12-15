const { v4: uuid } = require("uuid");

const contactsMongo = require("../model/contactsmongo");

//new contacts received
const addNewContacts = async (req, res) => {
  /*     console.log(req.body) */
  const newContacts = req.body;
  if (!newContacts.name || !newContacts.email) {
    return res.status(400).json({ message: "Name and email are requested!" });
  }
  

  try {
    await contactsMongo.create({
      name: newContacts.name,
      email: newContacts.email,
      address: newContacts.address,
      phone: newContacts.phone,
      message: newContacts.message,
      date: Date(),
      requestedId: uuid()
    })
    res.status(201).json({
      message: `Congratulations ${newContacts.name}! Your contact has been saved! You'll get a response as soon as possible!`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addNewContacts };
