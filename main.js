// ISSUE: _Single-use_ constants are redundant.
// ============================================
// Both "const jeff" and "const wendy" are only used once.
// So the "dry" good-practice principle (don't repeat yourself)
// would suggest that we just use their values as inline
// as seen below.

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function sayHi(person) {
  alert(`Hi ${capitalize(person.getAttribute('id'))}!`)
}

document.getElementById('jeff').onclick = function () {
  sayHi(this)
  return false
}

document.getElementById('wendy').onclick = function () {
  sayHi(this)
  return false
}
