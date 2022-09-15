const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
// 1

function caixaAlta(objeto) {
    for(i in objeto){  
        objeto[i] = objeto[i].toUpperCase();
    }
    return objeto
}
// console.log(caixaAlta(objeto))

// 2

function string(objeto) {
    let string =""
    for(i in objeto){  
        string=string + objeto[i] + " , "    
     }
    return string.slice(0,-3)
}
console.log(string(objeto))


// 3

function ex3(objeto, funcao){
    console.log(funcao(objeto))
}
ex3(objeto, caixaAlta)


