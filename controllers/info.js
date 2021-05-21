const { InfoModel } = require("../models/Info");

const addInfo = async (req, res) => {
  try {
    const { firstName, lastName, dateOfBirth: _dob } = req.body;
    const dateOfBirth = new Date(_dob);
    const info = new InfoModel({ firstName, lastName, dateOfBirth });
    await info.save();
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getAllInfos = async (req, res) => {
  try {
    const infos = await InfoModel.find({}).exec();
    res.send(infos);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = { addInfo, getAllInfos };
