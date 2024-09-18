'use strict'
const grande = document.querySelector('.grande');
const puntos = document.querySelectorAll('.punto');

puntos.forEach((cadaPunto, i) => {
    cadaPunto.addEventListener('click', () => {
        // Obtener la posición del punto clickeado
        let posicion = i;
        // Calcular el desplazamiento
        let operacion = posicion * -33.33;
        // Aplicar el transform translateX
        grande.style.transform = `translateX(${operacion}%)`;

        // Quitar la clase 'activo' de todos los puntos
        puntos.forEach(punto => punto.classList.remove('activo'));
        // Añadir la clase 'activo' al punto clickeado
        cadaPunto.classList.add('activo');

        punto.forEach((cadaPunto , i)=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

    });
});





