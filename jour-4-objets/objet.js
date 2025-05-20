/*
const personne = {
    nom: "Yannis",
    age: 27,
    estEtudant: true
}

console.log(personne.nom)
console.log(personne["age"])
*/

const personne = {
    nom: "Yannis",
    direBonjour: function() {
        return `Salut, je suis ${this.nom}`
    }

};

console.log(personne.direBonjour())