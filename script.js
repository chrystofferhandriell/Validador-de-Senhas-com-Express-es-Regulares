 function validarSenha(senha) {
      let erros = [];

      if (senha.length < 8) {
        erros.push("mínimo de 8 caracteres");
      }

      if (!/[A-Z]/.test(senha)) {
        erros.push("letra maiúscula");
      }

      if (!/[a-z]/.test(senha)) {
        erros.push("letra minúscula");
      }

      if (!/[0-9]/.test(senha)) {
        erros.push("número");
      }

      if (!/[@#$%&*!]/.test(senha)) {
        erros.push("caractere especial");
      }

      if (erros.length === 0) {
        return "Senha válida";
      } else {
        return "Falta: " + erros.join(", ");
      }
    }

    // 🔥 botão
    function validarSenhaClick() {
      const input = document.getElementById("senha");
      const mensagem = document.getElementById("mensagem");

      const resultado = validarSenha(input.value);

      mensagem.textContent = resultado;

      if (resultado === "Senha válida") {
        mensagem.className = "feedback ok";
      } else {
        mensagem.className = "feedback error";
      }
    }

    // 🔥 tempo real (profissional)
    function validarSenhaTempoReal() {
      const input = document.getElementById("senha");
      const mensagem = document.getElementById("mensagem");

      const resultado = validarSenha(input.value);

      mensagem.textContent = resultado;

      if (resultado === "Senha válida") {
        input.classList.add("valid");
        input.classList.remove("invalid");
        mensagem.className = "feedback ok";
      } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
        mensagem.className = "feedback error";
      }
    }