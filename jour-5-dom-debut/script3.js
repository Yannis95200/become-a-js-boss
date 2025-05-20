let nombre = Math.floor(Math.random() * 100) + 1;

const affichage3 = document.getElementById("guess")
const btn = document.getElementById("check")
const feed = document.getElementById("feedback")
const essaye = document.getElementById("essais")

let tentatives = 0

btn.addEventListener("click", function () {
  feed.textContent = `${affichage3.value}`
  const saisie = Number(affichage3.value);
  if (saisie < nombre) {
    feed.textContent = "Trop petit !";
  } else if (saisie > nombre) {
    feed.textContent = "Trop grand !";
  } else {
    feed.textContent = "Bravo !";
    // Créer et afficher le bouton Replay
    const btnReplay = document.createElement("button");
    btnReplay.textContent = "Replay";
    document.body.appendChild(btnReplay); // l'ajoute au body (ou autre conteneur)

    btnReplay.addEventListener("click", function () {
      nombre = Math.floor(Math.random() * 100) + 1;
      affichage3.value = "";
      feed.textContent = "";
      affichage3.disabled = false;
      btn.disabled = false;
      tentatives = 0;
      essaye.textContent = "";
      btnReplay.remove(); // Supprimer le bouton Replay après redémarrage
    });

    // Désactiver les entrées
    btn.disabled = true;
    affichage3.disabled = true;
  }

  tentatives++;
  essaye.textContent = `Nombre d’essais : ${tentatives}`;
});