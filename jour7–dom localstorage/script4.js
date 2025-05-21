const nomInput = document.getElementById("nom");
const telInput = document.getElementById("tel");
const btnAjouter = document.getElementById("ajouter");
const contactsDiv = document.getElementById("contacts");
const total = document.getElementById("total");

let compteur = 0;
let contacts = [];
const donnees = localStorage.getItem("contacts");
if (donnees !== null) {
    contacts = JSON.parse(donnees);
    contacts.forEach(contact => {
        afficherContact(contact);
    });
    compteur = contacts.length;
    total.textContent = "Total contacts : " + compteur;
}
function afficherContact(contact) {
    const newli = document.createElement("div");
    newli.textContent = `${contact.nom} - ${contact.tel}`;

    const btnsup = document.createElement("button");
    btnsup.textContent = "❌";
    newli.appendChild(btnsup);

    btnsup.addEventListener("click", function () {
        contactsDiv.removeChild(newli);
        contacts = contacts.filter(c => !(c.nom === contact.nom && c.tel === contact.tel));
        localStorage.setItem("contacts", JSON.stringify(contacts));
        compteur--;
        total.textContent = "Total contacts : " + compteur;
    });
    contactsDiv.appendChild(newli);
}
btnAjouter.addEventListener("click", function () {
    const nom = nomInput.value.trim();
    const tel = telInput.value.trim();

    if (nom === "" || tel === "") return;
    const nouveauContact = { nom, tel };

    contacts.push(nouveauContact);
    localStorage.setItem("contacts", JSON.stringify(contacts));

    afficherContact(nouveauContact);

    compteur++;
    total.textContent = "Total contacts : " + compteur;

    nomInput.value = "";
    telInput.value = "";
});
