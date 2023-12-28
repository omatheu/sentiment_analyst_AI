const btnAdicionarTarefa = document.querySelector(".app__button--add-task");
const formulario = document.querySelector(".app__form-add-task");
const textarea = document.querySelector(".app__form-textarea");
const tarefas = [];

btnAdicionarTarefa.addEventListener("click", () => {
    formulario.classList.toggle("hidden")
})

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    console.log(evento);
    const tarefa = {
        descricao: textarea.value
    }
    tarefas.push(tarefa);
    localStorage.setItem('tarefa', JSON.stringify(tarefas));
})

