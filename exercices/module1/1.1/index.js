alert(addDateTime("BONJOUR"));




function addDateTime(message) {
    const dateTimeNow = new Date();
    const date = dateTimeNow.toLocaleDateString();
    const heure = dateTimeNow.toLocaleTimeString();
    console.log (message  + dateTimeNow.toLocaleDateString + " " + dateTimeNow.toLocaleTimeString);
    return message + date + heure;


}