const livres = [
    { titre: "1984", auteur: "George Orwell", disponible: true },
    { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", disponible: false },
    { titre: "Les Misérables", auteur: "Victor Hugo", disponible: true },
    
]

function ajouterLivre(titre, auteur) {
    const livre = {
        titre,
        auteur,
        disponible: true
    }
    if (livres.some(livres => livres.titre === titre)){
        console.log(`Livre deja existant ${titre} `)
    } else {
        livres.push({titre,auteur, disponible: true})
        console.log(`Livre ajouté : ${titre} - ${auteur}`)
    }
}

function supprimerLivre(titre) {
    const index = livres.findIndex(livres => livres.titre === titre) 
    if (index !== -1){
        livres.splice(index, 1);
        console.log(`Livre supprimé : ${titre}`)
    }else {
        console.log(`Livre non trouvé`)
    }
}

function afficherLivres(){
    livres.forEach((livre) =>{
    console.log(`${livre.titre} - ${livre.auteur}`)
})

}

livres.forEach((livre) =>{
    console.log(`${livre.titre} - ${livre.auteur}`)
})

const dispos = livres.filter(livre => livre.disponible === true)
dispos.forEach((livre) =>{
    console.log(`${livre.titre} - ${livre.auteur}`)
})

const first = livres.find(livre => livre.disponible === true)
    console.log(`Premier livre dispo : ${first.titre} de ${first.auteur}`)

ajouterLivre("Harry Potter", "J.K. Rowling");
supprimerLivre("1984");
afficherLivres();
