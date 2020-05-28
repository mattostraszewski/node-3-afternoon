module.exports = {

  create: (req, res) => {
    const dbInstance = req.app.get('db');
    const { ame, description, price, image_url } = req.body

    dbInstance.create_product()
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send(err)
      })
  },


  getOne: (req, res) => {
    const dbInstance = req.app.get('db'); // i do not understand this line of code and what it is doing.
    const { id } = req.params

    dbInstance.read_product()
      .then(product => res.status(200).send(product))
      .catch(err => {
        res.status(500).send(err)
      })
  },

  getAll: (req, res) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_product()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send(err)
      })
  },

  update: (req, res) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params
    const { desc } = req.query

    dbInstance.update_product()
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send(err);
        console.log(err)
      });
  },

  delete: (req, res) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params


    dbInstance.delete_product()
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send(err);
        console.log(err)
      });
  }
}