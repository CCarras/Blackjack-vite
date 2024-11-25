/**
 * 
 * @param {String} carta La carta en string que vamos a buscar para poder mostrar
 * @returns {HTMLImageElement} La imagen que devuelve
 */

export const crearCarta = (carta) => {

    if (!carta) throw new Error('La carta es un argumento obligatorio');

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}