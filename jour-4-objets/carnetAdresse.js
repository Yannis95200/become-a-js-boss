const repertoire = {
    contacts: [],

    ajouterContact: function(nom, telephone) {
        if (this.contacts.some(contact => contact.nom === nom)) {
            console.log(`Contact déjà existant : ${nom}`);
        } else {
            this.contacts.push({ nom, telephone });
            console.log(`Contact ajouté : ${nom}`);
        }
    },

    afficherContacts: function() {
        for (let contact of this.contacts) {
            console.log(`${contact.nom}: ${contact.telephone}`);
        }
    },

    chercherContact: function(nom) {
        for (let contact of this.contacts) {
            if (contact.nom === nom) {
                return `${contact.nom}: ${contact.telephone}`;
            }
        }
        return `Aucun contact trouvé pour ${nom}`;
    },

    supprimerContact: function(nom) {
        const index = this.contacts.findIndex(contact => contact.nom === nom);
        if (index !== -1) {
            this.contacts.splice(index, 1);
            return `Contact supprimé : ${nom}`;
        }
        return `Aucun contact trouvé pour ${nom}`;
    }
};

repertoire.ajouterContact("Sami", "0601020304");
repertoire.ajouterContact("Inès", "0677889900");

repertoire.afficherContacts();
console.log(repertoire.chercherContact("Inès")); // Inès: 0677889900
console.log(repertoire.chercherContact("Ali"));  // Aucun contact trouvé pour Ali




