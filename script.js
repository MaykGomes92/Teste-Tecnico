document.getElementById("btnConfirmForm").addEventListener("click", function (event) {
  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");
  const emailError = document.getElementById("emailError");
  const senhaError = document.getElementById("senhaError");

  console.log('testee')
  let isValid = true;

  if (!emailInput.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
    emailError.textContent = "Por favor, insira um email válido.";
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  if (senhaInput.value.length < 8) {
    senhaError.textContent = "A senha deve ter pelo menos 8 caracteres.";
    senhaError.style.display = "block";
    isValid = false;
  } else {
    senhaError.style.display = "none";
  }

  if (!isValid) {
    event.preventDefault();
  }
});
