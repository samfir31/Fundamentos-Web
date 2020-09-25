let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOk = false
let map = document.querySelector("#mapa")


nome.style.width = "100%"
email.style.width = "100%"


function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3){
        
        txtNome.innerHTML = "Nome Invalido"
        txtNome.style.color = "red"
    }
    else {
        txtNome.innerHTML = "Nome Valido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}
function validaEmail (){
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf('@')== -1 || email.value.indexOf(".")==-1){
        txtEmail.innerHTML = "E-mail invalido"
        txtEmail.style.color = "red"
    }
    else {
        txtEmail.innerHTML = "E-mail valido"
        txtEmail.style.color = "green"
        nomeOK = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length>=100){
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.display= 'block'
    }
    else{
        txtAssunto.style.display= 'none'
        assuntoOk = true
    }
}
function enviar(){
    if (nomeOK==true || emailOK==true || assuntoOk == true){
        alert ("Formulario enviado com sucesso!")
    }
    else{
        alert ("Preencha o formulario corretamente")
    }
}
function mapaZoom(){
     mapa.style.width = "800px"
     mapa.style.height = "600px"     
}
function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "300px"
}