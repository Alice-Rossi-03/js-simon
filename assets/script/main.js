// Descrizione:
// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani! 
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

// Consigli del giorno:
// - Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// - Da quante ore è composto un giorno? 24h 
// - Da quanti minuti è composta un'ora? 60min
// - Da quanti secondi è composto un minuto? 60sec
// - Da quanti millisecondi è composto un secondo? 1000ms
// - Quanti millisecondi mi separano da domani alle 9:30? 
// - Esiste un oggetto JS in grado di gestire le date? new Date
// - Esistono dei metodi per trasformare una data in millisecondi? get


let countdownHtml = document.getElementById("countdownHtml") // prendiamo la variabile del testo 

let countdownTimer = setInterval(countDownFunction, 1000) // timer  

function countDownFunction(){ // funzione per generare il timer   

    let tomorrowDate = new Date("Jan 19, 2024 09:30:00").getTime() // variabile di domani 
    let todayDate = new Date().getTime() // variabile di oggi 

    let countDown = tomorrowDate - todayDate // distanza tra i giorni 

    console.log(countDown) // verifica in console 

    let countDownSec = Math.floor(countDown / 1000) // trasformazione da millisecondi a secondi 

    let seconds = Math.floor(countDownSec % 60) // trasformiamo in secondi 
    let minutes = Math.floor((countDownSec / 60) % 60) // trasformiamo in minuti 
    let hours = Math.floor((countDownSec / (60 * 60)) % 24) // trasformiamo in ore  

    console.log(hours, minutes, seconds) // verifica in console 

    if (countDownSec <= 0){ // se il countDown raggiunge lo 0
        clearInterval(countdownTimer)
        countdownHtml.innerHTML = 'Lezione!'
    } else { // altrimenti continua a calare 
        countDownSec--
        countdownHtml.innerHTML = `${hours}-${minutes}-${seconds}` // testo all'interno dell'html 
    }
}






