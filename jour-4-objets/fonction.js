function saluer(prenom){
    return `Bonjour ${prenom}`;
}

const hello = (nom) => `Bonjour ${nom}`


function addition(a,b){
    return a + b;
}

let resultat = addition(2,3)

const getHeure = () => new Date().toLocaleTimeString

console.log(saluer("Yannis"))
console.log(hello("Ranguin"))
console.log("resultat:", resultat)

