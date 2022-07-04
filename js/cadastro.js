'use strick'

function username(){
    const nome = document.getElementById("nome");
    if (nome.value === '') {
        nome.className = 'input incorrect';
        } else{
        nome.className = 'input correct';
    }
}

const CPF =  () =>{
    const cpf = document.getElementById("cpf");
    const cpf_value = document.getElementById("cpf").value;
    if (cpf_value.length == 11 && /^[0-9]+$/.test(cpf_value)) {
        //console.log("cpf correto");
        cpf.className = 'input correct';
    } else{
        //console.log("cpf incorreto");
        cpf.className = 'input incorrect';
    }
}

const EMAIL = () =>{
    const email = document.getElementById("email");
    const email_value = document.getElementById("email").value;
    if (email_value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        //console.log("email correto");
        email.className = 'input correct';
    } else {
        //console.log("email incorreto");
        email.className = 'input incorrect';
    }
}

const TEL = () =>{
    const tel  = document.getElementById("telefone");
    const tel_value = document.getElementById("telefone").value;
    if (tel_value.length == 9 && /^[0-9]+$/.test(tel_value)) {
        //console.log("tel correto");
        tel.className = 'input correct';
    } else{
        //console.log("tel incorreto");
        tel.className = 'input incorrect';
    }
}

const SENHA = () =>{
    const senha = document.getElementById("senha");
    const senha_value = document.getElementById("senha").value;
    if (senha_value.length > 5) {
        //console.log("senha invalida");
        senha.className = 'input correct';
    } else{
        //console.log("senha valida");
        senha.className ='input incorrect';
    }
}

const CONFIRMA = () =>{
    const confirma = document.getElementById("confirmasenha");
    const confirma_value = document.getElementById("confirmasenha").value;
    if (confirma_value === document.getElementById("senha").value) {
        //console.log("senhas coincidem");
        confirma.className = 'input correct';
    } else{
        //console.log("senhas nao coincidem");
        confirma.className = 'input incorrect';
    }
}

const BOTAO = () =>{
    const botao = document.getElementById("botao");
    const username = document.getElementById("nome");
    const cpf = document.getElementById("cpf");
    const email = document.getElementById("email");
    const tel = document.getElementById("telefone");
    const senha = document.getElementById("confirmasenha");

    if (username.className === 'input correct' && cpf.className === 'input correct' && email.className === 'input correct' && tel.className === 'input correct' && senha.className === 'input correct') {
        //console.log("enable");
        botao.className = 'botao';
    } else {
        //console.log("disable");
        botao.className = 'disable';
    }
}