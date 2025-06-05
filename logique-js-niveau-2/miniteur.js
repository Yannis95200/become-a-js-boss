const start = document.getElementById("demarrer");
const paragraphe = document.getElementById("affichage");

start.addEventListener("click", function() {
    paragraphe.textContent = `${affichage.value}`;
    const valeur = Number(affichage.value)
    let count = 60;
    let timer = setInterval(() => {
        console.log(count)
        count--;
    }, interval);
    if (count ===0)
        clearInterval(timer)
    console.log('Terminé')
});
