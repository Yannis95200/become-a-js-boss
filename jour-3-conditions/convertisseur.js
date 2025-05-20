

let temperature = 25;
let unite = "C";
let resultat;

if (unite === "C") {
    resultat =  temperature * 9/5 + 32
        console.log(`${temperature}°C = ${resultat}°F`)

}else if ( unite === "F") {
    resultat = (temperature - 32) * 5/9
        console.log(`${temperature}°F = ${resultat}°C`)
} else {
        console.log("Unités inconnu")
}
