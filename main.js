// ISSUE 1: The "person.getAttribute('id')" function
//          call in sayHi() is not needed.
// ================================================
// The source element's id is _already_ available in
// our onclick() functions. So, instead of using
// sayHi(this) in our function call, we can use
// sayHi(this.id). This means we can clean up the code
// by eliminating the extra getAttribute() call.

// We can then make it even easier to see what
// the code's doing by renaming the sayHi() argument
// from sayHi(person) to sayHi(personId)

// ISSUE 2: The "return" statements in the onclick()
//          functions are not needed, because these
//          functions never get called.

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function sayHi(personId) {
  // alert(`Hi ${capitalize(person.getAttribute('id'))}!`)
  alert(`Hi ${capitalize(personId)}!`)
}

document.getElementById('jeff').onclick = function () {
  sayHi(this.id)
  // return false
}

document.getElementById('wendy').onclick = function () {
  sayHi(this.id)
  // return false
}
