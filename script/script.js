//pegando input do usuario no html
const inputText = document.getElementById("inputTextTarefas");
//pegando botão no html
const button = document.querySelector(".btn_composer");
//criando elementos no HTML via JS
const criarTarefas = document.querySelector(".list_tarefas");




inputText.addEventListener("click", function(e){
    e.preventDefault();

    inputText.removeAttribute("placeholder");
    inputText.style.padding="5px";

})

//escute o evento do botão
button.addEventListener("click", function(e){
    e.preventDefault();

    //checando se campo esta vazio
    if(inputText.value === undefined || inputText.value === null || inputText.value === "" || inputText.value === " "){
        inputText.focus();
        return false;
    }

    //criando div que comportara a tarefa
   const linha = document.createElement("li")
   linha.className = "new_tarefa";

   //criando texto do input tarefa dentro da div
   const newText = document.createElement("p");
   newText.className = "text_new-tarefas";
    //passando o conteudo do input para o elemento criado
   newText.innerHTML = inputText.value;

   linha.appendChild(newText);
   criarTarefas.appendChild(linha);

   inputText.value = " ";


})
