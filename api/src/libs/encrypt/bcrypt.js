const bcrypt = require('bcrypt');

module.exports = {

  async hash(value, rounds) {
    return await bcrypt.hash(value, rounds);
  },

  async compare(valuePlan, valueHashed) {
    return await bcrypt.compare(valuePlan, valueHashed);
  }

}