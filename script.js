'use strict';

/**
 * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
 * @param  {string} value
 * @return {string}
 */ 

let result = rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD');
console.log(result);

function rle(sourseString) {
    let result = '';
    let previousSymbol = '';
    let counter = 0;

    for (let i = 0; i < sourseString.length; i++) {
        let currentSymbol = sourseString[i];
        
        if (currentSymbol === previousSymbol) {
            counter++;
        } else {
            if (counter > 1) {
                result += counter;
            }
            result += currentSymbol;
            counter = 1;
        }
        previousSymbol = currentSymbol;
    }
    
    if (counter > 1) {
        result += counter;
    }

    return result;
}

