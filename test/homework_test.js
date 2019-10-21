const assert = require('assert');
const homework = require('../homework');
var f = {
    name: 50,
    ages: "lxj",
    address: {
        add1: "beijing",
        add2: "xinan",
		add3: {
			add3_child1: "xiao",
		}
    },
	
}

describe('#homework.js', () => {
    it('check i return [address.add1,address.add2]', () => {
        assert.equal(homework(f, "i"), 'address.add1,address.add2,address.add3.add3_child1');
    });
    it('check j return ["ages", "address.add1"]', () => {
        assert.equal(homework(f, "j"), 'ages,address.add1');
    });
    it('check x return ["ages", "address.add2","address.add3.add3_child1"]', () => {
        assert.equal(homework(f, "x"), 'ages,address.add2,address.add3.add3_child1');
    });
	    it('check k return []', () => {
        assert.equal(homework(f, "k"), '');
    });
})


