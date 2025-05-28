const eleves = [
    {nom: "Yannis", note : 14},
    {nom: "Sami", note : 8},
    {nom: "Lina", note : 17},
    {nom: "Ines", note : 11},
    {nom: "Nabil", note : 9}
]

eleves.forEach((eleve) => {
    console.log(`${eleve.nom} a eux ${eleve.note}`)
}) 

const notes = eleves.filter(eleve => eleve.note >= 10)
console.log(`Nombre d’élèves admis : ${notes.length}`)

let meilleurEleve = eleves[0];

eleves.forEach((eleve) => {
    if (eleve.note > meilleurEleve.note) {
        meilleurEleve = eleve
    }
})

console.log(`Meilleur élève : ${meilleurEleve.nom} avec ${meilleurEleve.note}`)
