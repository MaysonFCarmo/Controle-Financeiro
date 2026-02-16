let transacoes = [];
let tipoSelecionado = "despesa";
let chart;

/* LOGIN */
function entrar() {
    document.getElementById("login").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    criarGrafico();
    atualizarSistema(transacoes);
}

function logout() {
    location.reload();
}

/* MODAL */
function abrirModal() {
    document.getElementById("modalTransacao").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modalTransacao").style.display = "none";
}

function tipoTransacao(tipo) {
    tipoSelecionado = tipo;
    document.getElementById("btnReceita").classList.remove("active");
    document.getElementById("btnDespesa").classList.remove("active");

    if (tipo === "receita") {
        document.getElementById("btnReceita").classList.add("active");
    } else {
        document.getElementById("btnDespesa").classList.add("active");
    }
}

/* SALVAR */
function salvarTransacao() {
    const descricao = document.getElementById("descricao").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const data = document.getElementById("data").value;

    if (!descricao || isNaN(valor) || !data) {
        alert("Preencha todos os campos!");
        return;
    }

    transacoes.push({
        id: Date.now(),
        descricao,
        valor,
        tipo: tipoSelecionado,
        data
    });

    fecharModal();
    atualizarSistema(transacoes);
}

/* REMOVER */
function removerTransacao(id) {
    transacoes = transacoes.filter(t => t.id !== id);
    atualizarSistema(transacoes);
}

/* FILTRO MENSAL */
function filtrarPorMes() {
    const mes = document.getElementById("filtroMes").value;

    if (!mes) {
        atualizarSistema(transacoes);
        return;
    }

    const filtradas = transacoes.filter(t =>
        t.data.startsWith(mes)
    );

    atualizarSistema(filtradas);
}

function limparFiltro() {
    document.getElementById("filtroMes").value = "";
    atualizarSistema(transacoes);
}

/* ATUALIZAR SISTEMA */
function atualizarSistema(lista) {

    const listaDiv = document.getElementById("listaTransacoes");
    listaDiv.innerHTML = "";

    let receitas = 0;
    let despesas = 0;

    lista.forEach(t => {

        const div = document.createElement("div");
        div.classList.add("transaction", t.tipo);

        div.innerHTML = `
            <div>
                <strong>${t.descricao}</strong><br>
                <small>${new Date(t.data).toLocaleDateString("pt-BR")}</small>
            </div>
            <div>
                <span class="valor">R$ ${t.valor.toFixed(2)}</span>
                <button onclick="removerTransacao(${t.id})">🗑</button>
            </div>
        `;

        listaDiv.appendChild(div);

        if (t.tipo === "receita") receitas += t.valor;
        else despesas += t.valor;
    });

    document.getElementById("totalReceitas").innerText = `R$ ${receitas.toFixed(2)}`;
    document.getElementById("totalDespesas").innerText = `R$ ${despesas.toFixed(2)}`;
    document.getElementById("saldoTotal").innerText = `R$ ${(receitas - despesas).toFixed(2)}`;

    atualizarGrafico(receitas, despesas);
}

/* GRÁFICO */
function criarGrafico() {

    chart = new ApexCharts(document.querySelector("#graficoFinanceiro"), {
        chart: { type: "donut", height: 350 },
        series: [0, 0],
        labels: ["Receitas", "Despesas"],
        colors: ["#00ff88", "#ff3b3b"]
    });

    chart.render();
}

function atualizarGrafico(receitas, despesas) {
    chart.updateSeries([receitas, despesas]);
}
