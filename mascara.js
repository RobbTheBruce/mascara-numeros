/**
 * @param {string} value número a ser manipulado
 * @param {string} mask formato de mascara
 */
module.exports = function (value, mask) {
    var result = [];
    var ref = [...value];
    var refMask = [...mask];

    for (var i = 0; i < refMask.length; i++) {
        if (ref.length > 0)
            result.push((!isNaN(refMask[i]) && !/^\s*$/.test(refMask[i])) ? ref.shift() : refMask[i]);
    }

    return result.join('');
};