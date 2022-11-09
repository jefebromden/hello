// HEADS-UP: This code uses an _old_ version of JavaScript
// ========================================================
// A new version of JavaScript called ES6 came out in 2015,
// and has continued to evolve ever since!
//
// Although this _old_ syntax will continue to work, a js
// coder would only use it to set up a new site today if
// there were a special reason for doing so. Maybe like a
// Python coder wouldn't start a new project using Python 2
// without a good reason to do so?
//
// My own js skills are far from fully developed, but I
// thought I'd update the 1st 2 functions to the ES6
// "arrow function" syntax so you can see the difference.
// I've left the old-style code in place for comparision.
// ============================================================

// function capitalize(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1)
// }
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

// function sayHi(personId) {
//   // alert(`Hi ${capitalize(person.getAttribute('id'))}!`)
//   alert(`Hi ${capitalize(personId)}!`)
// }
const sayHi = (personId) => alert(`Hi ${capitalize(personId)}!`)

document.getElementById('jeff').onclick = function () {
  sayHi(this.id)
}

document.getElementById('wendy').onclick = function () {
  sayHi(this.id)
}
