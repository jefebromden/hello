// The onclick() functions can also be updated to ES6.
// The easiset way to do this is by restoring your jeff & wendy constants

const jeff = document.getElementById('jeff')
const wendy = document.getElementById('wendy')

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

const sayHi = (personId) => alert(`Hi ${capitalize(personId)}!`)

jeff.onclick = () => sayHi(jeff.id)
wendy.onclick = () => sayHi(wendy.id)
