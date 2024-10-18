/* Funcion que obtiene la id del audio sea de ingles o español y lo reproduce o pausa */
function playMatematicas() {
    let audio = document.getElementById('Matematicas_español');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function matematicasPlay() {
    let audio = document.getElementById('Matematicas_ingles');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function playQuimica() {
    let audio = document.getElementById('Quimica_español');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function quimicaPlay() {
    let audio = document.getElementById('Quimica_ingles');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
