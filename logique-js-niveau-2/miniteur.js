const start = document.getElementById("demarrer");
const paragraphe = document.getElementById("affichage");
const input = document.getElementById("seconde");

start.addEventListener("click", function () {
    paragraphe.textContent = `${input.value}`;
    const valeur = Number(input.value)
    let count = valeur;

    let timer = setInterval(() => {
        paragraphe.textContent = count
        console.log(count)
        count--;
        if (count < 0) {
            clearInterval(timer)
            console.log('Terminé')
        }
    }, 1000);
});