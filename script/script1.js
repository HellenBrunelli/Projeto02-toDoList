//pegando input do usuario no html
const inputText = document.getElementById("inputTextTarefas");
//pegando botão no html
const button = document.querySelector(".btn_composer");
//criando elementos no HTML via JS
const criarTarefas = document.querySelector(".list_tarefas");
//pegando minha section que é onde tudo esta inserido
const box = document.querySelector(".box_tarefas");

//criando botao para checar tudo.
const checked = document.createElement("button");
checked.className = "btn_checked";
checked.innerHTML = `Check All`

//criando botao para checar tudo.
const clean = document.createElement("button");
clean.className = "btn_clean";
clean.innerHTML = `clean`

//tirando ormatação quando o usuario clica na area de texto
inputText.addEventListener("click", function (e) {
    e.preventDefault();

    inputText.removeAttribute("placeholder");
    inputText.style.padding = "5px";

})

//escute o evento do botão ADD
button.addEventListener("click", function (e) {
    e.preventDefault();

    //checando se campo esta vazio
    if (inputText.value === undefined || inputText.value === null || inputText.value === 0 || !inputText.value.trim()) {
        inputText.focus();
        return false;
    }
        //****** CRIANDO *******

    //criando linha que comportara a tarefa
    const linha = document.createElement("div");
    linha.className = "new_tarefa";

    //criando texto do input tarefa dentro da div
    const newText = document.createElement("p");
    newText.className = "text_new-tarefas";
    newText.innerHTML = inputText.value;

    // criando botao excluir X
    const excluir = document.createElement("div");
    excluir.className = "btn_excluir";
    excluir.innerHTML = `<button class="btn_del">X</button>`



    // **ATRIBUINDO AS CRIAÇÕES NO HTML**

    //passando o conteudo do input para o elemento criado
    newText.innerHTML = inputText.value;

    linha.appendChild(newText);
    linha.appendChild(excluir);
    criarTarefas.appendChild(linha);


    // CHECANDO TAREFAS INDIVIDUALME.
    newText.addEventListener("click", function (e) {
        e.preventDefault();
        // toggle é alternancia entre a classe q neste caso é allTexts e seleciona e desSeleciona o checked do css.
        this.classList.toggle("checked")

    })
    

    //deixando o input vazio novamente
    inputText.value = " ";

    // EXCLUINDO UM EVENTO POR VEZ
    excluir.addEventListener("click", function (evento) {
        evento.preventDefault();
        linha.remove();
    })


})

//FINAL DO BOTAO ADD.

// box.insertBefore(checked, box.childNodes[box.length]);
// box.insertBefore(clean, box.childNodes[box.length]);

// // BOTAO CHECAR GERAL
// checked.addEventListener("click", function (e) {
//     e.preventDefault();

//     //criando variavel que recebe a classe (CSS) em comum do meu input 
//     allTexts = document.querySelectorAll(".text_new-tarefas");

//     //Percorre a nodelist 
//     for (let item of allTexts) {
//         //toggle é alternancia entre a classe q neste caso é allTexts e seleciona e desseleciona o checked do css
//         item.classList.toggle("checked");
//     }

// })

// // BOTAO LIMPAR GERAL
// clean.addEventListener("click", function (e) {
//     e.preventDefault();

//     //criando variavel que recebe a classe (CSS) em comum do meu input 
//     const geral = document.querySelectorAll(".new_tarefa");


//     //Percorre a nodelist 
//     for (let item of geral) {
//         item.remove();

//     }

// })