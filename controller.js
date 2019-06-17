const query = require('./models/query.js')

exports.uploadFile = (req, res) => {
  const name = req.file.originalname;
  const type = req.file.mimetype;
  const size = req.file.size;
  
  query.saveFile(name, type, size, (err, data) => {
    res.json({name: data.name, type: data.type, size: data.size})
  })
}