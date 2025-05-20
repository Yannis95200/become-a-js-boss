const gestionnaire = {
    eleves: [],
    ajouterEleve: function(nom, age, moyenne) {
        if (this.eleves.some(eleves => eleves.nom === nom )){
            console.log(`eleves deja existant ${nom}`);
        } else {
            this.eleves.push({nom,age,moyenne});
            console.log(`eleves ajouter ${nom}`);
        }
    },

    afficherTous: function() {
        for(let eleve of this.eleves)
            console.log(`${eleve.nom} - ${eleve.age} ans - Moyenne ${eleve.moyenne}`)
    },
    supprimerEleve: function (nom) {
        const index = this.eleves.findIndex(eleves => eleves.nom === nom)
        if (index !== -1){
            this.eleves.splice(index, 1);
            console.log(`eleves Supprimer ${nom}`)
        } else {
            console.log(`Aucun eleves trouver avec le nom ${nom}`)
        }

    },
    filtrerAdmis: function() {
        const admis = this.eleves.filter(eleves => eleves.moyenne >= 10)
            for(let admi of admis)
                console.log(`${admi.nom} - ${admi.age} ans - Moyenne ${admi.moyenne}`)
    },
    meilleurEleve: function() {
        this.eleves.sort((a, b) => b.moyenne - a.moyenne);
        const meilleur = this.eleves[0]
        console.log(`Meilleur élève : ${meilleur.nom} - Moyenne : ${meilleur.moyenne}`);


        }


};



gestionnaire.ajouterEleve("Sami", 22, 11.5);
gestionnaire.ajouterEleve("Yannis", 27, 14.5);
gestionnaire.ajouterEleve("Inès", 25, 17);
gestionnaire.afficherTous();
gestionnaire.meilleurEleve();
gestionnaire.filtrerAdmis();




