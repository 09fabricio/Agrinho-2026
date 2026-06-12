// Função para alternar entre as páginas
function mudarPagina(idPagina) {
    // Esconde todas as páginas
    const paginas = document.querySelectorAll('.pagina');
    if (!paginas.length) return;
    paginas.forEach(pagina => pagina.classList.remove('ativa'));

    // Remove a classe 'active' de todos os botões
    const botoes = document.querySelectorAll('.nav-btn');
    botoes.forEach(botao => botao.classList.remove('active'));

    const paginaSelecionada = document.getElementById(idPagina);
    const botaoSelecionado = document.getElementById(`btn-${idPagina}`);
    if (paginaSelecionada) paginaSelecionada.classList.add('ativa');
    if (botaoSelecionado) botaoSelecionado.classList.add('active');
}

// Lógica do Simulador
function atualizarSimulador() {
    const tempInput = document.getElementById('temperatura');
    const umiArInput = document.getElementById('umidade-ar');
    const umiSoloInput = document.getElementById('umidade-solo');
    const valTemp = document.getElementById('val-temp');
    const valUmiAr = document.getElementById('val-umi-ar');
    const valUmiSolo = document.getElementById('val-umi-solo');
    const statusTexto = document.getElementById('status-texto');
    const statusImagem = document.getElementById('status-imagem');

    if (!tempInput || !umiArInput || !umiSoloInput || !valTemp || !valUmiAr || !valUmiSolo || !statusTexto || !statusImagem) {
        return;
    }

    // Pegando os valores dos inputs
    const temp = parseInt(tempInput.value, 10);
    const umiAr = parseInt(umiArInput.value, 10);
    const umiSolo = parseInt(umiSoloInput.value, 10);

    // Atualizando os textos na tela
    valTemp.innerText = temp;
    valUmiAr.innerText = umiAr;
    valUmiSolo.innerText = umiSolo;

    // Referências para atualizar o resultado
    

    // Condições ideais aproximadas para morangos
    // Temp: 15°C a 25°C | Umidade Ar: 60% a 80% | Umidade Solo: 70% a 85%
    let problemas = [];

    if (temp < 15) problemas.push("Muito frio! Risco de geada ou crescimento lento.");
    if (temp > 25) problemas.push("Muito quente! Risco de desidratação das plantas.");
    
    if (umiAr < 60) problemas.push("Ar muito seco! Pode causar ressecamento das folhas.");
    if (umiAr > 80) problemas.push("Ar muito úmido! Alto risco de proliferação de fungos.");
    
    if (umiSolo < 70) problemas.push("Solo seco! A planta precisa de irrigação sustentável.");
    if (umiSolo > 85) problemas.push("Solo encharcado! Desperdício de água e risco de apodrecimento das raízes.");

    // Analisando os resultados
    if (problemas.length === 0) {
        statusTexto.innerText = "Condições Ideais! Uso eficiente de recursos. A produção está equilibrada e sustentável.";
        statusTexto.style.color = "var(--verde-escuro)";
        statusImagem.innerText = "🍓🌱✨";
    } else {
        // Junta os problemas encontrados em um único texto
        statusTexto.innerText = "Alerta Ambiental: " + problemas.join(" ");
        statusTexto.style.color = "var(--vermelho-alerta)";
        
        // Altera o emoji dependendo se está muito seco/quente ou muito úmido/frio
        if (temp > 25 || umiSolo < 70) {
            statusImagem.innerText = "🥀☀️💧";
        } else {
            statusImagem.innerText = "🥀🌧️🍄";
        }
    }
}

// Inicializa o simulador com os valores padrão ao carregar a página
window.onload = atualizarSimulador;