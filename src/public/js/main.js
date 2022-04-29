const fila = document.querySelector('.contenedor-carousel');
const info = document.querySelectorAll('.pagina');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorAct = document.querySelector('.indicadores .activo');
    if(indicadorAct.nextSibling){
        indicadorAct.nextSibling.classList.add('activo');
        indicadorAct.classList.remove('activo')
    }
});

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorAct = document.querySelector('.indicadores .activo');
    if(indicadorAct.previousSibling){
        indicadorAct.previousSibling.classList.add('activo');
        indicadorAct.classList.remove('activo')
    }
});

const numPag = Math.ceil(info.length / 5);

for(let i = 0; i < numPag; i++) {
    const indicador = document.createElement('button');

    if(i === 0){
        indicador.classList.add('activo');
    }

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

info.forEach((informacion) => {
    informacion.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            info.forEach(informacion => informacion.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

fila.addEventListener('mouseleave', () => {
    info.forEach(informacion => informacion.classList.remove('hover'));
});