const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button") //coloquei a tag button dentro da variavel button

//adiciona algo que vai ficar ouvindo o evento,nesse caso click
button.addEventListener("click", add) //quando clicar no botão ele vai acionar a função
form.addEventListener("change", save) //executa a mudança no formulario, vai salvar os dados marcados

function add() {
  //essa função adiciona a data e os seus quadradinhos para marcação
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso")
    return //a funcao vai parar aqui
  }

  alert("Dia adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  //chave
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} //{}objeto vazio
nlwSetup.setData(data)
nlwSetup.load()
