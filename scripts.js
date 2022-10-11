let lista = [];
let listaCompleta = document.querySelector("#listaCompleta");

function adicionar(){
        lista.push(document.querySelector("#inserirElemento").value); 
        console.log(lista);
        listaCompleta.innerHTML="";
        lista.forEach((item) => {
            let li = document.createElement("li");
            li.innerText = item;
            listaCompleta.appendChild(li);
        });
}   
function remover(){
    lista.pop(lista.length);
    console.log(lista);
        listaCompleta.innerHTML="";
        lista.forEach((item) => {
            let li = document.createElement("li");
            li.innerText = item;
            listaCompleta.appendChild(li);
        });
}

function inverter(){
    lista.reverse();
    console.log(lista);
    listaCompleta.innerHTML="";
        lista.forEach((item) => {
            let li = document.createElement("li");
            li.innerText = item;
            listaCompleta.appendChild(li);
        }); 
}

