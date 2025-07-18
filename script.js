window.onload = () => {
  setTimeout(() => {
    document.getElementById('splash').style.display = 'none';
    document.getElementById('app').classList.remove('hidden');
  }, 3500); // Splash dura 3,5 segundos
};

document.getElementById('startQuiz').addEventListener('click', () => {
  alert("Vamos começar o quiz! (próxima etapa a seguir)");
});
