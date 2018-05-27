const rm = require('rimraf')
const path = require('path')
const config = require('../config')

rm(path.join(config.assetsRoot, config.assetsSubDirectory), err => {
  if (err) throw err

  require('./build-copy')
  require('./build-pack')
})
