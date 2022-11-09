// ISSUE: Use of variable declarations
// =====================================
// This is _partly_ a personal-style issue.
// JavaScript coders often chain statements.
// Sometimes variables are declared to reduce
// the length of these chains into more easily
// understood parts.
//
// Also, tutorial-level code (like the code below)
// often uses variable declarations to break down
// farily _simple_ statements to make it easier for
// the beginner to understand what's going on.

// DECLUTTER: Collapse variables into single code lines.
// =====================================================

const jeff = document.getElementById('jeff')
const wendy = document.getElementById('wendy')

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function sayHi(person) {
  alert(`Hi ${capitalize(person.getAttribute('id'))}!`)
}

jeff.onclick = function () {
  sayHi(this)
  return false
}

wendy.onclick = function () {
  sayHi(this)
  return false
}
