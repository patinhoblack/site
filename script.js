const formulario = document.getElementById("formulario-login");

formulario.addEventListener("submit", function(event){
 event.preventDefault();
      const usuario = document.getElementById("usuario").value;
      const senha = document.getElementById("senha").value;

      const usuarioCorreto = "senku";
      const senhaCorreto = "carne nova";


      if (usuario === usuarioCorreto && senha === senhaCorreto){
        alert("ebaaaaaaaaaa login com sucesso")
      
    } else {
        alert("usuario ou senha incorretas")
    }

 })