const File = require('./File')

exports.saveFile = (filename, mimetype, size, done) => {
  const newFile = new File({name: filename, type: mimetype, size: size})
  newFile.save((err, data) => {
    if(err) return done(err);
    return done(null, data);
  })
}