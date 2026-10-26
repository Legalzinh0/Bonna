/*
  Cole os links reais entre as aspas abaixo.
  Exemplo WhatsApp: https://wa.me/55DDDNUMERO
*/
const LINKS_BONNA = {
  cardapio: "https://legalzinh0.github.io/BonnaFood/",   // Ex.: https://seusite.com/cardapio
  ifood: "https://www.ifood.com.br/delivery/joao-monlevade-mg/bonna-salgados-republica/9aa962e5-6174-479f-bf7f-2c0b3f44c56a?utm_medium=share",      // Link da loja Bonna no iFood
  whatsapp: "https://wa.me/5531982875937",   // Ex.: https://wa.me/5531999999999
  instagram: "https://www.instagram.com/_bonnafood?rpxt=YjA4eWxyaXJtZnVt&utm_source=qr",  // Ex.: https://instagram.com/seuperfil
  localizacao: "https://maps.app.goo.gl/yXhgGVW6QoFZggPi8?g_st=iwb" // Link do Google Maps
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
    botao.addEventListener("click", (evento) => {
      evento.preventDefault();
      alert("Este link ainda será configurado. Edite o arquivo script.js para adicionar o endereço.");
    });
  }
});
