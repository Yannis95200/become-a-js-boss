const clic = document.getElementById("ajouter")
const affichage = document.getElementById("tache")
const list = document.getElementById("liste")

clic.addEventListener("click", function () {
    let newli = document.createElement("li")
    newli.textContent = affichage.value
    list.appendChild(newli)
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    newli.appendChild(checkbox);
     const btnSuppr = document.createElement("button")
        btnSuppr.textContent = "🗑️"
        newli.appendChild(btnSuppr)
        btnSuppr.addEventListener("click", function () {
            list.removeChild(newli)
        })
    checkbox.addEventListener("click", function () {
        newli.classList.toggle("done");

    })
})

