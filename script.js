function atualizarRelogio() {
  const agora = new Date();

  // 1. Configurando a hora exata da sua localidade
  const opcoesHora = {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const horaFormatada = agora.toLocaleTimeString("pt-BR", opcoesHora);

  // 2. Configurando a data (DD/MM)
  const opcoesData = {
    timeZone: "America/Sao_Paulo",
    day: "2-digit",
    month: "2-digit",
  };
  const dataFormatadaNum = agora.toLocaleDateString("pt-BR", opcoesData);

  // 3. Pegando o dia da semana traduzido automaticamente
  const opcoesSemana = {
    timeZone: "America/Sao_Paulo",
    weekday: "long",
  };
  let diaSemana = agora.toLocaleDateString("pt-BR", opcoesSemana);
  diaSemana = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);

  const textoData = `${dataFormatadaNum}   ${diaSemana}`;

  // 4. Injeta os resultados no seu HTML
  document.querySelector(".hora").innerHTML = horaFormatada;
  document.querySelector(".data").innerHTML = textoData;
}

atualizarRelogio();

setInterval(atualizarRelogio, 1000);
