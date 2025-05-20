const clic = document.getElementById("btn");
const paragraphe = document.getElementById('affichage');

clic.addEventListener("click", function() {
    paragraphe.textContent = "Bonjour Yannis 👋"
})

const ya = document.getElementById("bt")
const para = document.getElementById("affichage2")
const input = document.getElementById("prenom");

ya.addEventListener("click", function () {
    para.textContent = `Bonjour ${affichage.value} 👋`;
  });

const input1 = document.getElementById("tache")
const add = document.getElementById("ajouter")
const list = document.getElementById("liste")


add.addEventListener("click", function() {
    let newli = document.createElement("li");
    newli.textContent = input1.value;
    list.appendChild(newli);
    let btnSuppr = document.createElement("button");
btnSuppr.textContent = "❌";
newli.appendChild(btnSuppr);
btnSuppr.addEventListener("click", function() {
    list.removeChild(newli);
  });
  
  });

