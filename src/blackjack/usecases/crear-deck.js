import _ from 'underscore';

/**
 * Creamos un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} regresa el nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta,tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('TiposDeCarta es obligatorio como String[]');
    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('TiposEspeciales es obligatorio como String[]');

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck;