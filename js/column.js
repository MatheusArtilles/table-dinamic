function adicionarNomeCol(nomeCol, col){
    let nome_col = document.getElementById(`${nomeCol}`);
    let valor = nome_col.value;
    let colun = document.getElementById(`${col}`);
    if(valor != ''){
        colun.innerHTML = valor;
    }
}
function testaTeclaEnter(nomeCol, col) {
    document.addEventListener('keypress', (e) =>{
        if(e.key == 'Enter'){
            return adicionarNomeCol(nomeCol, col);
        }
    })
}
