// Ativar links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.clasList.add("ativo");
  }
}

links.forEach();

// Ativar intens do Orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);
