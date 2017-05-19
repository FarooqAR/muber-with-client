const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
  app.get('/api/drivers', DriversController.get);
  app.post('/api/drivers', DriversController.create);
  app.put('/api/drivers/:id', DriversController.edit);
  app.delete('/api/drivers/:id', DriversController.delete);
};
