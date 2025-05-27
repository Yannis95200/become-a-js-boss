const clic = document.getElementById("ajouter");
const affichage = document.getElementById("tache");
const list = document.getElementById("liste");
const toutes = document.getElementById("filtre-toutes");
const actives = document.getElementById("filtre-actives");
const termines = document.getElementById("filtre-terminees");

let tasks = [];

let donneesSauvegardees = localStorage.getItem("tasks");
if (donneesSauvegardees) {
    tasks = JSON.parse(donneesSauvegardees);
    tasks.forEach((tache) => {
        afficherTache(tache);
    });
}

clic.addEventListener("click", function () {
    if (affichage.value.trim() === "") return;

    const nouvelleTache = {
        texte: affichage.value,
        done: false
    };
    tasks.push(nouvelleTache);
    afficherTache(nouvelleTache);
    sauvegarder();
    affichage.value = "";
});

function afficherTache(tache) {
    const newli = document.createElement("li");
    newli.textContent = tache.texte;

    if (tache.done) {
        newli.classList.add("done");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tache.done;
    newli.appendChild(checkbox);

    checkbox.addEventListener("click", function () {
        tache.done = checkbox.checked;
        newli.classList.toggle("done");
        sauvegarder();
    });

    const btnSuppr = document.createElement("button");
    btnSuppr.textContent = "🗑️";
    newli.appendChild(btnSuppr);

    btnSuppr.addEventListener("click", function () {
        list.removeChild(newli);
        tasks = tasks.filter((el) => el !== tache);
        sauvegarder();
    });

    list.appendChild(newli);
}

function sauvegarder() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

toutes.addEventListener("click", function () {
    document.querySelectorAll("li").forEach((li) => {
        li.style.display = "flex";
    });
});

actives.addEventListener("click", function () {
    document.querySelectorAll("li").forEach((li) => {
        if (!li.classList.contains("done")) {
            li.style.display = "flex";
        } else {
            li.style.display = "none";
        }
    });
});

termines.addEventListener("click", function () {
    document.querySelectorAll("li").forEach((li) => {
        if (li.classList.contains("done")) {
            li.style.display = "flex";
        } else {
            li.style.display = "none";
        }
    });
});
