/*
Questão 03: Escreva uma arrow function chamada somaArray que recebe um array 
de números como parâmetro e retorna a soma de todos os elementos desse array. 
*/ 
// Questão 03
const somaArray = (array) => {
    
    const soma = array.reduce((acc, curr) => acc + curr, 0);
    
    return soma;
  }
  
  console.log(somaArray([1, 2, 3, 4, 5])); 