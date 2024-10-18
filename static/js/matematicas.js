/* Declaracion de la funcion que hace el proceso de calculo */
function calcularIMC() {
    /* Declaracion de variables para obtener mediante ID los valores de nombre, altura y peso */
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);
    let nombre = document.getElementById('nombre').value;
/* Condicional para verificar si toda la informacion esta correctamente dilegenciada */
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        document.getElementById('resultadoIMC').innerText = `${nombre} Por favor, ingrese la informacion correctamente.`;
        return;
    }
/*Variable para el proceso de calculo del IMC de cada persona*/
    let imc = (peso / (altura * altura)).toFixed(2);
    /*  Condicionales para comparar el resultado de IMC con las diferentes opciones de pesos*/
    if (imc < 18.5) {
        categoria = 'Bajo peso 😶';
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = 'Peso saludable 🙂';
    } else if (imc >= 25 && imc < 29.9) {   
        categoria = 'Sobrepeso 🙁';
    } else {
        categoria = 'Obesidad 😟';
    }
    /*Forma para imprimir en la hoja de HTML el Resultado junto a un mensaje X*/
    document.getElementById('resultadoIMC').innerText = `${nombre} Tu IMC es ${imc} (${categoria}).`;
}

