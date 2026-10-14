const input = document.getElementById('tarefa');
const botao = document.getElementById('adicionar');
const lista = document.getElementById('lista');
 
function adicionarTarefa() {
  const texto = input.value.trim();
  if (texto === '') {
    input.focus();
    return;
  }
 
  const li = document.createElement('li');
 
  const span = document.createElement('span');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  span.appendChild(checkbox);
 
  const textoTarefa = document.createElement('span');
  textoTarefa.className = 'texto';
  textoTarefa.textContent = texto;
 
  li.appendChild(span);
  li.appendChild(textoTarefa);
 
  lista.appendChild(li);
 
  input.value = '';
  input.focus();
}
 
botao.addEventListener('click', adicionarTarefa);
 
input.addEventListener('keydown', (evento) => {
  if (evento.key === 'Enter') {
    adicionarTarefa();
  }
});
 
lista.addEventListener('click', (evento) => {
  const alvo = evento.target;
 
  if (alvo.matches('input[type="checkbox"]')) {
    alvo.closest('li').classList.toggle('concluida', alvo.checked);
    return;
  }
 
  const li = alvo.closest('li');
  if (li) {
    li.remove();
  }
});
 