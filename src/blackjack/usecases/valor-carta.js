/**
 * 
 * @param {String} carta Carta elegida en 'PedirCarta'
 * @returns {Number} Valor numérico de la carta elegida
 */

export const valorCarta = ( carta ) => {

    if (carta === undefined || carta === null) throw new Error('No es una carta válida');
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}