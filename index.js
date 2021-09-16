let dataDoEvento = [25, 11, 2021];
let dataDeHoje = [16, 09, 2021];
let idade = 19;
let quantidadeDePessoas = 100;

if((dataDoEvento[2] - dataDeHoje[2]) < 0){
    console.log("Impossível marcar, pois o ANO de hoje é posterior ao churrasco!!!");
} else if ((dataDoEvento[1] - dataDeHoje[1]) < 0){
    console.log("Impossível marcar, pois o MÊS de hoje é posterior ao churrasco!!");
} else if ((dataDoEvento[0] - dataDeHoje[0]) < 0){
    console.log("Impossível marcar, pois o DIA de hoje é posterior ao churrasco!");
} else {
    if (idade <18){
         console.log("Entrada NÃO permitida, Menor de Idade");  
        } else {
            if(quantidadeDePessoas > 100){
                console.log("Evento NÃO permitido, ultrapasoou o limite de pessoas");
        } else {
            console.log("Evento marcado com suceso!!");
        }
    }        
}    
