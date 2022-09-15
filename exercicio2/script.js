let array=[1,2,3,4,5,6,7,8]

const triplos = array.map((num) => num*3);

console.log(triplos)

console.log("*********************************")

const metades = array.map((valor) => valor/2);

const metadesEmPosicaoPar = array.map((valor,indice) => {
    if(indice%2==0){
        return  valor/2
    }
    return valor 
  });

console.log(metades)
console.log("*********************************")
console.log(metadesEmPosicaoPar)
console.log("*********************************")
console.log(array)

