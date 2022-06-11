 
 const elementoResultado = document.querySelector("#resultado")

 const inputPergunta = document.querySelector("#inputPergunta")

 const buttonPerguntar = document.querySelector('#buttonPerguntar')

const resposta = [
    "Não,pensamento positivo!",
    "Provavelmente sim voce sera!",
    "Se está decidido, bola pra frente",
    "Conte com isso.",
    "Tenho minhas dúvidas!",
    "Pergunte novamente!",
    "Sua pergunta é relativa!",
    "Chegara sim, provavelmente.",
    "Depende, sim ou não?",
    "Não foi possível prever isso agora!",
    "Seu futuro diz que sim!",
    "Tende a melhorar!",
    "Me surpreende essa sua pergunta.",
    "Sim, seu destino lhe diz isso!",
    "se acalme e pergunte mais uma vez",
    "lhe aconselho a pensar sobre!"
]

function fazerPerguntas() {

    if (inputPergunta.value == "") {
        alert("Digite sua pergunta!")
        return
    }

    buttonPerguntar.setAttribute("disabled", true)

   const pergunta = "<div>" + inputPergunta.value + "</div>"

   const totalRespostas = resposta.length 

const numerosAleatorios = Math.floor(Math.random() * totalRespostas )

console.log(resposta[numerosAleatorios])

elementoResultado.innerHTML = pergunta + resposta[numerosAleatorios]

elementoResultado.style.opacity = 1;

  setTimeout(function(){
    elementoResultado.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
 }, 3000)

}

