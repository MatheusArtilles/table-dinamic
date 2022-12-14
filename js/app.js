function geraId(){
    return Math.floor(Math.random() * 300);
}
let table = document.querySelector('tbody');
let btn = document.getElementById('enviar');
let prod = document.getElementById('produto');
let valor = document.getElementById('valor');
let qtd = document.getElementById('qtd');
function excluir(linhaid){
    let confirmacao = window.confirm('Quer mesmo excluir?');
    if(confirmacao){
        let tr = document.getElementById('' + linhaid + '');
        if(tr) {
            table.removeChild(tr);
        }
    }
}
function adicionaProduto(){
    let id = geraId();
    let lista = [id, prod.value, valor.value, qtd.value];
    if(prod.value == '' || valor.value == '' || qtd.value == ''){
        alert('Recomenda-se passar os dados para as linhas');
    } else {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for(let i = 0; i < lista.length; i++){
            let td = document.createElement('td')
            tr.appendChild(td);
            td.innerHTML = lista[i];
        }
        tr.id = lista[0];
        let btn_delete = document.createElement('button');
        btn_delete.classList.add('deletar');
        btn_delete.innerHTML = '<i class="fa-solid fa-trash"></i>'
        btn_delete.setAttribute('onclick', 'excluir('+ tr.id +')')
        tr.appendChild(btn_delete);
        prod.value = '';
        valor.value = '';
        qtd.value = '';
    }
}
btn.addEventListener("click", adicionaProduto);

document.addEventListener('keypress', (e) =>{
    if(e.key == 'Enter'){
        return adicionaProduto();
    }
})
