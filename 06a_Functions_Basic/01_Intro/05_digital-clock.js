/*
Thema: Digital Clock Project
 */

function digitalClock() {
    let date = new Date();
    let hours = date.getHours() + '';
    let minutes = date.getMinutes() + '';
    let seconds = date.getSeconds() + '';
    let day = date.getDay();

    //Formatierung auf 2 Stellen für
    //Stunden, Minuten und Sekunden
    if(hours.length < 2) {
        hours = '0' + hours;
    }

    if(minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if(seconds.length < 2) {
        seconds = '0' + seconds;
    }
    //Wochentage als Abkürzungen statt Zahlen.
    let weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let clock = weekdays[day] + ' ' + hours + ':' + minutes + ':' + seconds;

    //Ausgabe
    document.getElementById('clock').innerHTML = clock;
    //console.log(clock);
}

/*
digitalClock();
setInterval(digitalClock, 1000);
*/



















