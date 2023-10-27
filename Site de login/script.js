function add() {

var chave = localStorage.length;
chave++;

var name = document.getElementById("NAME").value;
var email = document.getElementById("EMAIL").value;
var pw = document.getElementById("PASSWORD").value;

var usuario ={

Name_ : name,
Email_ : email,
Pw_ : pw

    };

localStorage.setItem(  chave, JSON.stringify(usuario));

window.location.href = "./index.html";

};

 function validar(){
    

    var senha2 = document.getElementById("senha2").value;
    var email2 = document.getElementById("email2").value;

    for (let i = 0; i < localStorage.length; i++) {

    let id = localStorage.key(i)
    let dados = localStorage.getItem(id);
    var users = JSON.parse(dados);

    if(senha2 == users.Pw_ && email2==users.Email_){    
        window.location.href = "./index3.html";
      return false;

        } else if (i=localStorage.length){
            alert("Não tem cadastro");}
    }

 }

