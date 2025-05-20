const btn = document.getElementById("hello")
const affichage = document.getElementById("output1")

btn.addEventListener("click" , function(){
    affichage.textContent = "Salut Yannis 👋"
})

const affichage = document.getElementById("prenom")
const affichage2 = document.getElementById("output2")

affichage.addEventListener("input", function(){
    affichage2.textContent = `bonjour ${affichage.value}`
})

const input2 = document.getElementById("item")
const add = document.getElementById("ajouter")
const list= document.getElementById("liste")

add.addEventListener("click", function(){
    let newli = document.createElement("li")
    newli.textContent = input2.value
    list.appendChild(newli)
const btnsup = document.createElement("button")
btnsup.textContent = "Supprimer"
newli.appendChild(btnsup)
btnsup.addEventListener("click", function(){
    list.removeChild(newli)
})

    input2.value = ""

})
let li = document.createElement("li")
ul.appendChild(li)
