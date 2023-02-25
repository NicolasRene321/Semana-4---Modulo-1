class ExibirDespesa{
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
}

const arrayExpense = ["", 0, 0, 0];