/*class ExibirDespesa{
    title;
    partialValue;
    numberOfParticipants;
    amount;

    constructor(title, partialValue, numberOfParticipants, amount){
        this.title = title;
        this.partialValue = partialValue;
        this.#numberOfParticipants = numberOfParticipants;
        this.amount = amount;
    }

    get numberOfParticipants(){
        return this._numberOfParticipants
    }

    set numberOfParticipants(novoNumero){
        this._numberOfParticipants = novoNumero;
    }
}*/

const arrayExpense = [];

let titulo = document.querySelector('#title');
let numeroParticipantes = document.querySelector('#numberOfParticipants');
let valorTotal = document.querySelector('#amount');


function adicionarDespesa(){
    let valorParcial = 0;
    arrayExpense.push(titulo.value);
    arrayExpense.push(parseFloat(numeroParticipantes.value));
    arrayExpense.push(parseFloat(valorTotal.value));
    valorParcial = valorTotal.value / numeroParticipantes.value;
    arrayExpense.push(valorParcial);
    console.log(arrayExpense);
}

