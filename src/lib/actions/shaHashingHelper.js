/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 */

var sha256 = require('./../../../node_modules/js-sha256/build/sha256.min.js');

module.exports = (data) => {
    if (data.length === 64 && /^[0-9A-Za-z]*$/.test(data)) {
        return data;
    }
    return sha256(data);
}
