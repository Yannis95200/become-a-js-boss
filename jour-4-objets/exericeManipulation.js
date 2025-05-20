const users = [
    {nom: "Yannis", age: 27},
    {nom: "Ines", age: 25},
    {nom: "Sami", age: 30}

]

users.forEach((user,index) =>{
    console.log(`Nom : ${user.nom}`)

})

const cible = users.find(user => user.nom === "Ines")
console.log(cible)

const index = users.findIndex(user => user.nom === "Sami")
console.log(index)

const ages = users.filter(user => user.age < 30)
console.log(ages)

const enMajuscule = users.map(user =>{
    return{...user, nom: user.nom.toUpperCase()}

})
console.log(enMajuscule)

if (users.some(user => user.age < 26)){
    console.log("true")
}

if (users.every(user => user.age >= 18)){
    console.log("true")
}

const calcul = users.reduce((somme, user) => somme + user.age, 0)
console.log(calcul)
