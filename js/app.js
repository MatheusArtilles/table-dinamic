let table = document.querySelector('tbody');
let btn = document.getElementById('enviar');
let th = document.querySelectorAll('th');
let cp = document.querySelectorAll('.cp');

const list_ = Array.from(cp);
function geraId(){
    return Math.floor(Math.random() * 300);
}
function excluir(linhaid){
    let confirmacao = window.confirm('Quer mesmo excluir?');
    if(confirmacao){
        let tr = document.getElementById('' + linhaid + '');
        if(tr) {
            table.removeChild(tr);
        }
    }
}
function criaLista(){
    let id = geraId();
    let lista = [id];
    for(let count = 0; count < list_.length; count++){
        lista.push(list_[count].value);
    }
    return lista;
}
function criaBtn(){
    let btn_delete = document.createElement('button');
    btn_delete.classList.add('deletar');
    btn_delete.innerHTML = '<i class="fa-solid fa-trash"></i>'
    return btn_delete;
}
function criaTr(tabela){
    let tr = document.createElement('tr');
    tabela.appendChild(tr);
    return tr;
}
function zeraInputs(lista){
   for(let i = 0; i < lista.length; i++){
        lista[i].value = '';
   }
}
function adicionaProduto(){
    let lista = criaLista();
    if(lista.includes('')){
        alert('Recomenda-se passar os dados para as linhas');
    } else {
        let tr = criaTr(table);
        for(let i = 0; i < th.length; i++){
            let td = document.createElement('td')
            tr.appendChild(td);
            td.innerHTML = lista[i];
        }
        tr.id = lista[0];
        let btn_delete = criaBtn();
        btn_delete.setAttribute('onclick', 'excluir('+ tr.id +')')
        tr.appendChild(btn_delete);
        zeraInputs(list_);
    }
}
btn.addEventListener("click", adicionaProduto);

document.addEventListener('keypress', (e) =>{
    if(e.key == 'Enter'){
        return adicionaProduto();
    }
})

