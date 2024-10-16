// Capturar evento de submit do formulário
const form = document.querySelector("#formulario");
import links from './ids.json' with { type: 'json' };
import ids from './ids.json' with { type: 'json' };

console.log(ids, links)

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputIdd = e.target.querySelector("#downid");

  const idd = Number(inputIdd.value);
  const redirIdd = verifId(idd);

  if (!idd || !redirIdd) {
    setResultado("Id inválido", false);
    return;
  }
  setResultado(`Identificado com sucesso, redirecionando...`, true);

  if (redirIdd){
  window.location.href = redirIdd;}

});

function verifId(ident) {
    for(let i = 0; i < ids.ids.length; i++){
        if (ident == ids.ids[i]) {
            return ids.links[i];
        } else if (i == ids.ids.length-1){return false}
    }
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = criaP();

  if (isValid) {
    p.classList.add("redir");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
