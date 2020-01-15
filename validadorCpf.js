const readline = require('readline');

let recebeCpf = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

recebeCpf.question("Digite o número do CPF: ", function(dadosRecebidos){
    
    dadosRecebidos = dadosRecebidos.replace(/\./g, ""); // Retira os '.'
    dadosRecebidos = dadosRecebidos.replace(/\-/g, ""); // Retira os '-'
    
    let cpfArray = dadosRecebidos.split(""); //Converte a string recebida em array

    let somaValores = 0;
    let peso = 10;

    let modSomaValores;    

    //Realiza a multiplicação dos digítos ao peso atribuído
    for(var i = 0; i <= 8; i++){
        somaValores = somaValores + (cpfArray[i] * peso);
        //console.log(peso + " * " + cpfArray[i] + " = " + (peso*cpfArray[i]));
        peso--;
    };
    
    modSomaValores = somaValores % 11;

    if(modSomaValores < 2){
        cpfArray[9] = 0;
    }else{
        cpfArray[9] = (11 - modSomaValores);
    }

    peso = 11;
    somaValores = 0;

    for(var i = 0; i <= 9; i++){
        somaValores = somaValores + (cpfArray[i] * peso);
        //console.log(peso + " * " + cpfArray[i] + " = " + (peso*cpfArray[i]));
        peso--;
    };

    modSomaValores = somaValores % 11;
    
    if(modSomaValores < 2){
        cpfArray[10] = 0;
    }else{
        cpfArray[10] = (11 - modSomaValores);
    }
    
    if(dadosRecebidos == cpfArray.toString().replace(/,/g, "")){
        console.log("CPF VÁLIDO!");
    }else{
        console.log("CPF INVÁLIDO!")
    }

    recebeCpf.close();
});