let listaDealunos = ["Fabiana", "Cecilia",];

for(let contador = 0; contador <= listaDealunos.length; contador++){
    if(contador == 0){
        console.log("O número é: " + contador + " isso mesmo, é ZERO!");
    } else if(contador % 2 == 0) {
        console.log("O número é: " + contador + " este numero é PAR!");
    } else if(contador % 2 == 1) {
        console.log("O número é: " + contador + " este numero é ÍMPAR!");
    }
}