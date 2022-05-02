const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let index = email.lastIndexOf('@');
  let out = ''

  for (let i = index + 1; i < email.length; i++) {
    out += email[i]
  }
  return out
}

module.exports = {
  getEmailDomain
};
