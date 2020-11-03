const log4js = require("log4js");
log4js.configure(require("./config.js"));
const logger = log4js.getLogger("foo");
module.exports = logger