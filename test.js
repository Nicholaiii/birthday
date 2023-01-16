const { strictEqual } = require('node:assert')

const { calculateVersion } = require('./calculate-version.js')

const v321 = new Date('01-01-2023')
strictEqual(calculateVersion(v321), '3.2.1')

const v330 = new Date('12-13-2023') /* God MMDDYYYY sucks */
strictEqual(calculateVersion(v330), '3.3.0')

const v3312 = new Date('12-12-2024')
strictEqual(calculateVersion(v3312), '3.3.12')

console.log('If you got this far, the test succeeds')
process.exit(0)
