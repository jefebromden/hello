const jeff = document.getElementById('Jeff')
const wendy = document.getElementById('Wendy')

const sayHi = (personId) => alert(`Hi ${personId}!`)

jeff.onclick = () => sayHi(jeff.id)
wendy.onclick = () => sayHi(wendy.id)
