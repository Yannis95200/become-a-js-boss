function convertirTemperature(temperature, unite) {
    if (unite === "C") {
        let resultat = temperature * 9/5 + 32;
        return `${temperature}°C = ${resultat.toFixed(1)}°F`;
    } else if (unite === "F") {
        let resultat = (temperature - 32) * 5/9;
        return `${temperature}°F = ${resultat.toFixed(1)}°C`;
    } else {
        return "Unité inconnue";
    }
}
console.log(convertirTemperature(25, "C"));  // 25°C = 77.0°F
console.log(convertirTemperature(77, "F"));  // 77°F = 25.0°C
console.log(convertirTemperature(100, "X")); 