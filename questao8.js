/*
Questão 08: Escreva uma arrow function chamada ehPalindromo que recebe uma 
string como parâmetro e retorna true se a string for um palíndromo (ou seja, se ela pode ser lida da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda) e false caso contrário. 
 */
const ehPalindromo = (string) => {
    
    const textoLimpo = string.toLowerCase().replace(/ /g, '');
    
    const textoInvertido = textoLimpo.split('').reverse().join('');
    
    return textoLimpo === textoInvertido;
};

console.log(ehPalindromo("arara")); 