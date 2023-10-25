// Função para calcular a multiplicacao
function multi(um, dois) {
    return resultado = um * dois;
}

// Função para calcular soma
function soma(um, dois) {
    return resultado = um + dois;
}

// Função para calcular divisão
function div(um, dois) {

   
    
}

// Função para calcular o total da venda
function sub(um, dois) {
    return resultado = um - dois;
}


function destruir(){

    window.close()

}


function calcular() {
    let opcao = document.getElementById("select").value;
    let um = parseFloat(document.getElementById("um").value);
    let dois = parseFloat(document.getElementById("dois").value);

    
    if( opcao == 2 && dois == 0){

        return document.getElementById("resultado").textContent = "Erro, O Numero é inválido";

    }
    else{    

       
    switch (parseInt(opcao)) {
        case 1:
           soma(um,dois);
            break;
        case 2:
            div(um,dois);
            break;
        case 3:
            multi(um,dois);
            break;
        case 4:
            sub(um,dois);
            break;
           default:
            
    }


    document.getElementById("resultado").textContent =  resultado.toFixed(2);

}}
