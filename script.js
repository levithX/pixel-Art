const quadrados = document.querySelectorAll('.quadrado');
let mousePresionado = false; 
var corMouse = 'black'

document.addEventListener('mousedown', function() {
    mousePresionado = true; 
})
document.addEventListener('mouseup', function() {
    mousePresionado = false; 
})


quadrados.forEach(function(pintar) {
    pintar.addEventListener('mousedown', function() {
        if(mousePresionado) {
            this.style.background =  corMouse;
        }
    });
    pintar.addEventListener('mousemove', function(){
        if(mousePresionado) { 
            this.style.background = corMouse;
        }
    });
})
//cores 
function colorRed() {
    corMouse = 'red'
}
function colorBlack() {
    corMouse = 'black'
}
function colorWhite() {
    corMouse = 'white'
}

//teste

function tirarBorda() {
    quadrados.forEach(function(quadrado) {
        if (getComputedStyle(quadrado).borderStyle !== 'none') {
            quadrado.style.border = 'none';
        } else {
            quadrado.style.border = '1px solid #000000fb'; 
        }
    });
}
