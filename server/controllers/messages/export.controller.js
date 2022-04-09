module.exports = {
  create: require('./create.controller'),
  delete: require('./delete.controller'),
  sse: require('./sse.controller'),
  admin: {
    get: require('./admin.controller').get,
    create: require('./admin.controller').create,
    delete: require('./admin.controller').remove
  }
}