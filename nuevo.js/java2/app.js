
let nnotas=parseInt(prompt("digite la cantidad de notas a promediar"));

let suma=0;
let promedio;

for(i=0; i < nnotas; i++){
    let notas=parseFloat(prompt("digite nota  "  + i));
    
    if(notas >= 5 )

    while(notas > 5 ){
        alert("no es posible ")
        notas = prompt("digite nota  "  + i);
    }

    suma= suma + notas;
}


promedio= suma/ nnotas;

if (promedio >=0 && promedio < 2.9) {

    alert("el resultado es " + promedio + " su nota es baja") 

}
else if(promedio >=3.0){

    alert ("el resultado es " + promedio + " su nota es buena ")
}

