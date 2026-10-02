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

module.exports = {
  tripsList,
  tripsFindByCode
};