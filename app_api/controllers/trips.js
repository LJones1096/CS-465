
const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

const tripsList = async (req, res) => {
  const q = await Trip
    .find({})
    .exec();

  if (!q || q.length === 0) {
    return res
      .status(404)
      .json({ message: 'No trips found' });
  } else {
    return res
      .status(200)
      .json(q);
  }
};

const tripsFindByCode = async (req, res) => {
  const q = await Trip
    .find({ 'code': req.params.tripCode })
    .exec();

  if (!q || q.length === 0) {
    return res
      .status(404)
      .json({ message: 'Trip not found' });
  } else {
    return res
      .status(200)
      .json(q);
  }
};

const tripsAddTrip = async (req, res) => {
  try {
    const newTrip = await Trip.create({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });

    return res.status(201).json(newTrip);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const tripsUpdateTrip = async (req, res) => {
  try {
    const updatedTrip = await Trip.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { new: true, runValidators: true }
    );

    if (!updatedTrip) {
      return res.status(404).json({
        message: 'Trip not found'
      });
    }

    return res.status(200).json(updatedTrip);
  } catch (err) {
    return res.status(400).json(err);
  }
};

const tripsDeleteTrip = async (req, res) => {
  try {
    const deletedTrip = await Trip.findOneAndDelete({
      code: req.params.tripCode
    });

    if (!deletedTrip) {
      return res.status(404).json({
        message: 'Trip not found'
      });
    }

    return res.status(200).json({
      message: 'Trip deleted successfully'
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip,
  tripsDeleteTrip
};
