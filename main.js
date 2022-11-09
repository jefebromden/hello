const jeff = document.getElementById('jeff')
const wendy = document.getElementById('wendy')

function capitalize(string) {
  const firstLetter = string.charAt(0).toUpperCase()
  const restOfLetters = string.slice(1)

  return firstLetter + restOfLetters
}

function sayHi(person) {
  var whois = person.getAttribute('id')

  // Issue: Although this is not strictly an "error" in the sense
  // that it will not run, using undelared variables inside
  // functions is widely considered to be bad practice.
  // This is because undeclared variables are "hoisted" into
  // the global space, and can produce unexpected (and hard to
  // debug) results.

  // Solution: Replace "name = capitalize(whois)" with:
  var name = capitalize(whois)
  alert(`Hi ${name}!`)
}

jeff.onclick = function () {
  sayHi(this)
  return false
}

wendy.onclick = function () {
  sayHi(this)
  return false
}
