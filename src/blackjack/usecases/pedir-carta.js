/**
 * 
 * @param {Array<String>} deck El deck con el que estamos jugando
 * @returns {string} El valor devuelto es una única carta (string)
 */

// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    
    return deck.pop();
}