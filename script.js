document.addEventListener("DOMContentLoaded", function() {
  var btnRemover = document.getElementById("btnRemover");
  var elementoparaRemover = document.getElementById("elementoparaRemover");

  btnRemover.addEventListener("click", function () {
    elementoparaRemover.remove();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var btnRemover1 = document.getElementById("btnRemover1");
  var elementoparaRemover1 = document.getElementById("elementoparaRemover1");

  btnRemover1.addEventListener("click", function () {
    elementoparaRemover1.remove();
  });
});

let olho = document.getElementById("olho");
let password = document.getElementById("password");

function abrirExploradorDeArquivos() {
  document.getElementById("fileInput").click();
}

function arquivoSelecionado() {
  // Aqui você pode adicionar código para lidar com o arquivo selecionado pelo usuário.
  // O arquivo selecionado estará disponível em document.getElementById("fileInput").files[0].
}

const form = document.querySelector("form"),
fileInput = form.querySelector

console.log("verificar"); 

form.addEventListener("click", ()=> {
  fileInput.click();
});

fileInput.onchange = e => {
   console.log(e);
}




olho.onclick = function () {
  if(password.type == "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
};
































