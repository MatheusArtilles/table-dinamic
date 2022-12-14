function adicionarNomeCol(nomeCol, col){
    let nome_col = document.getElementById(`${nomeCol}`).value;
    let colun = document.getElementById(`${col}`);
    if(nome_col == ''){
        //console.log('A coluna precisa de um Nome');
    } else {
        colun.innerHTML = nome_col;
    }
}
function testaTeclaEnter(nomeCol, col) {
    document.addEventListener('keypress', (e) =>{
        if(e.key == 'Enter'){
            return adicionarNomeCol(nomeCol, col);
        }
    })
}
