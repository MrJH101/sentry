export default () => {
  return (req, res, next) => {
    if (!res.locals) { res.locals = {} }
    res.locals.currentAccount = req.currentAccount
    res.locals.moment = require('moment')
    next()
  }
}
