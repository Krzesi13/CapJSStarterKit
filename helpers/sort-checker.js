/**
 * Created by PPATRONI on 06.10.2016.
 */

function SortChecker() {
    'use strict';
}

SortChecker.prototype.validate = function (data, length) {
    // Null or less then 2 elements is sorted.

    if (data === null || length < 2) {
        return true;
    } else if (parseFloat(data[length - 2]) < parseFloat(data[length - 1])) {
        // If the element before (n-2) this one (n-1) is greater,
        return false;
    }
    // recurse.

    return this.validate(data, length - 1);
}

module.exports = SortChecker;
