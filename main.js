const jeff = document.getElementById("jeff")
const wendy = document.getElementById("wendy")

function capitalize(string) {
    const firstLetter   = string.charAt(0).toUpperCase();
    const restOfLetters = string.slice(1);

    return firstLetter + restOfLetters;
}

function sayHi(person){
    var whois = person.getAttribute("id");

    name = capitalize(whois);
    alert(`Hi ${name}!`);
}

jeff.onclick = function() {
    sayHi(this);
    return false;
};

wendy.onclick = function() {
    sayHi(this);
    return false;
};
