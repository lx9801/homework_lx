const assert = require('assert');
const homework = require('../homework');
var f = {
    name: 50,
    ages: "lxj",
    address: {
        add1: "beijin",
        add2: "xinan",
    }
}

describe('#homework.js', () => {
    it('check i return [address.add1,address.add2]', () => {
        assert.equal(homework(f, "i"), ["address.add1", "address.add2"]);
    });
    it('check i return [address.add1,address.add2]', () => {
        assert.equal(homework(f, "j"), ["ages", "address.add1"]);
    });

})


