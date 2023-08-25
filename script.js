let pal = document.getElementById("text");
let car = carac = document.getElementById("caracter");
let resp = document.getElementById("res");
let contador = Number(0);

function contaletras(texto, letra){
    
    texto = texto.toLowerCase(); // coloca todas em minuscula para fazer o for
    
    for (let i = 0 ; i < texto.length ; i++){
        if (texto.charAt(i) == letra){ // compara o caractere na posição i de acordo com o for com a latra escolhida.
            contador++;
        }
        }
        return contador;
    }

function calc(){

    let palavra = pal.value; //atribuição do valor do formulário na variável.
    let carac = car.value;
contaletras(palavra, carac) // chamada a função

resp.innerHTML = `A palavra ${palavra} possui ${contador} caracteres "${carac}"`

contador = 0 // zera o contador para uma próxima pesquisa

pal.value = '' // deixa o formulário vazio para uma próxima busca
car.value = '' 

}