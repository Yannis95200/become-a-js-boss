const utilisateurs = [
    {nom : "Yannis", age : 27},
    {nom : "Ines", age : 22},
    {nom : "Sami", age : 77}
    

]

if (utilisateurs.every(user => user.age > 20)){
    console.log("Tous les utilisateur sont adultes.")
}
if (utilisateurs.some(user=> user.age >= 70)){
    console.log("il y a au moins un senior dans la liste")
}
utilisateurs.sort((a, b) => a.nom.localeCompare(b.nom));
console.log("Utilisateurs triés par nom :");
console.log(utilisateurs);





for (let user of utilisateurs){
    console.log(`${user.nom} a ${user.age} ans`)
}


utilisateurs.forEach((user, index) => {
    console.log(`${index} ${user.nom}`)
})

const cible = utilisateurs.find(user => user.nom === "Yannis")
console.log(cible);

const index = utilisateurs.findIndex(user => user.nom === "Ines")
console.log(index);

const jeunes = utilisateurs.filter(user => user.age < 28)
console.log(jeunes)

const enMajuscule = utilisateurs.map(user => {
    return {...user, nom: user.nom.toUpperCase()};
})
console.log(enMajuscule)

const index2 = utilisateurs.findIndex(user => user.nom ==="Ines")
utilisateurs.splice(index2,1)
console.log(index2)

const total = utilisateurs.reduce((somme, user) => somme + user.age, 22)
console.log(total)

