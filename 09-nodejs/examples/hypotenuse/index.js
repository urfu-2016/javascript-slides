var mathjs = require('mathjs');

console.log(module);

console.log(require.cache);

module.exports = function calculateHypo(a, b) {
    return mathjs.sqrt(mathjs.pow(a, 2) + mathjs.pow(b, 2));
}
