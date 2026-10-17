/*
  Cole os links reais entre as aspas abaixo.
  Exemplo WhatsApp: https://wa.me/55DDDNUMERO
*/
const LINKS_BONNA = {
  cardapio: "",   // Ex.: https://seusite.com/cardapio
  ifood: "",      // Link da loja Bonna no iFood
  whatsapp: "",   // Ex.: https://wa.me/5531999999999
  instagram: "",  // Ex.: https://instagram.com/seuperfil
  localizacao: "" // Link do Google Maps
};

document.querySelectorAll("[data-link]").forEach((botao) => {
  const destino = LINKS_BONNA[botao.dataset.link];

  if (destino && destino.trim()) {
    botao.href = destino.trim();
    if (/^(https?:)?\/\//i.test(destino.trim())) {
      botao.target = "_blank";
      botao.rel = "noopener noreferrer";
    }
  } else {
    // Destino ainda não configurado: não abre uma página falsa.
    botao.addEventListener("click", (evento) => {
      evento.preventDefault();
      alert("Este link ainda será configurado. Edite o arquivo script.js para adicionar o endereço.");
    });
  }
});
