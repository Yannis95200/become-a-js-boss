const nomInput = document.getElementById("nom")
const telInput = document.getElementById("tel")
const btnAjouter = document.getElementById("ajouter")
const contactsDiv = document.getElementById("contacts")
const total = document.getElementById("total")
let compteur = 0
btnAjouter.addEventListener("click", function () {
    compteur++
    let newli = document.createElement("div")
    newli.textContent = `${nomInput.value} - ${telInput.value}`
    contactsDiv.appendChild(newli)
    const btnsup = document.createElement("button")
    btnsup.textContent = "❌"
    newli.appendChild(btnsup)
    btnsup.addEventListener("click", function () {
        contactsDiv.removeChild(newli)
        compteur--
        total.textContent = "Total contacts : " + compteur
    })
    total.textContent = "Total contacts : " + compteur
})
