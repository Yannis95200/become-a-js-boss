/*
for (let i = 1; i < 10; i++){
    console.log(i)
    if (i % 2  == 0) {
        console.log("i est pair", i)
    } else 
        console.log("i est impair", i)

    }
*/

let notes = [12, 5, 17, 8, 20]
    for (let note of notes) {
        if (note >= 10) {
            console.log(`${note} : Note Suffisante`)
        } else {
            console.log(`${note} : Note insuffisante`)

        }
    }


