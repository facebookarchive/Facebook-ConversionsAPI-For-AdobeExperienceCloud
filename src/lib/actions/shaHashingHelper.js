/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

var sha256 = require('js-sha256');

module.exports = (data) => {
    if (data.length === 64 && /^[0-9A-Za-z]*$/.test(data)) {
        return data;
    }
    return sha256(data);
}
