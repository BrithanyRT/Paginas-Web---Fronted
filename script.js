const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');

const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadors = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(btn => {
    btn.addEventListener('click', () => {
        display.agregarNumero(btn.innerHTML);
    })
})

botonesOperadors.forEach(btn => {
    btn.addEventListener('click', () => {
        display.computar(btn.value);
    })
})

