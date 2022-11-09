// The capitalize() function is currently used
// to capitalize the first letter of the html
// ids, "jeff" and "wendy"

// But there's no rule that prevents us from
// using capital letters in an html id.

// If we capitalize these html ids (i.e. Jeff | Wendy),
// and update the css, we can:
//  1. remove the capitalize() function entirely,
//  2. further simplify the sayHi() function, and
//  3. improve both the efficiency and the elegance of the code.
//
// I've left in the commented-out code for comparison.

const jeff = document.getElementById('Jeff')
const wendy = document.getElementById('Wendy')

// const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

// const sayHi = (personId) => alert(`Hi ${capitalize(personId)}!`)
const sayHi = (personId) => alert(`Hi ${personId}!`)

jeff.onclick = () => sayHi(jeff.id)
wendy.onclick = () => sayHi(wendy.id)
