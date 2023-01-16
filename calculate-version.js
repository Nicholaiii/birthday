/**
 * Calculates version number from input date
 * @param {Date} date
 */
function calculateVersion (date) {
  const [day, month, year] = getDMY(date)
  const [major, minor] = calculateMajorAndMinorVersion(day, month, year)
  const patch = calculatePatchVersion(day, month)
  return `${major}.${minor}.${patch}`
}

/**
 *
 * @param {Date} date
 */
const getDMY = date => [
  date.getDate(),
  date.getMonth() + 1, /* Silly ES Date is 0 indexed */
  date.getFullYear()
]

const calculateMajorAndMinorVersion = (day, month, year) =>
  `${year - (month < 12 || day < 13 ? 1991 : 1990)}`.split('')
const calculatePatchVersion = (day, month) =>
  `${month < 12 || day < 13 ? month : 0}`

module.exports = {
  calculateVersion
}
