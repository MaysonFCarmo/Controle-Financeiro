Finance App

Finance App é uma aplicação web para controle de receitas e despesas desenvolvida com HTML, CSS e JavaScript puro. A aplicação permite cadastrar transações, visualizar o saldo total, aplicar filtro mensal e acompanhar os dados por meio de um gráfico dinâmico.

Demonstração das Funcionalidades

A aplicação possui uma tela de login apenas para simulação visual. Após o acesso, o usuário pode cadastrar receitas e despesas, remover transações registradas, aplicar filtro mensal por data e visualizar o cálculo automático do total de receitas, total de despesas e saldo final. Também conta com um gráfico dinâmico no formato donut utilizando ApexCharts e uma interface moderna em tema escuro.

Tecnologias Utilizadas

O projeto foi desenvolvido utilizando HTML5 para estrutura, CSS3 para estilização, JavaScript puro (Vanilla JS) para lógica e manipulação do DOM, e ApexCharts via CDN para geração do gráfico financeiro.

Estrutura do Projeto

O projeto está organizado da seguinte forma:

finance-app/

dashboard.html
README.md

css/
style.css

js/
script.js

Como Funciona

1. Login

A tela inicial é apenas ilustrativa. Ao clicar em “Entrar”, o dashboard principal é exibido.

2. Cadastro de Transações

O usuário pode selecionar o tipo de transação (Receita ou Despesa), informar uma descrição, definir o valor e escolher a data. As transações são armazenadas em um array JavaScript, representado por:

let transacoes = [];

3. Atualização Automática

Sempre que uma transação é criada, removida ou filtrada, o sistema recalcula automaticamente os valores de receitas, despesas, saldo e atualiza o gráfico.

4. Filtro Mensal

O filtro utiliza um campo do tipo month no HTML. A lógica aplicada compara o mês selecionado com a data das transações, utilizando a verificação de início da string da data. Isso permite visualizar apenas as movimentações de um mês específico.

Gráfico Financeiro

O gráfico é gerado utilizando ApexCharts no formato donut. Ele é atualizado dinamicamente com base nos valores de receitas e despesas. As cores seguem o padrão visual da aplicação: verde para receitas e vermelho para despesas.

Interface

A interface foi desenvolvida com tema escuro (dark mode), contendo fundo preto, receitas destacadas em verde, despesas em vermelho, cards com resumo financeiro e um modal para cadastro de novas transações.

Observações

Atualmente o sistema não utiliza banco de dados, não possui backend e não salva dados permanentemente. Ao atualizar a página, todas as informações cadastradas são perdidas.

Melhorias Futuras

Entre as melhorias previstas estão a implementação de localStorage para persistência local, criação de backend com Node.js e banco de dados, possibilidade de editar transações, geração de gráfico por dia do mês, versão responsiva para dispositivos móveis, sistema de autenticação real e deploy online.

Objetivo do Projeto

O projeto foi desenvolvido com foco em prática de manipulação de DOM, estruturação de projeto frontend, lógica de programação, manipulação de datas, integração com biblioteca externa e organização de código.

Aprendizados

Durante o desenvolvimento foram praticados conceitos como trabalho com arrays e objetos, filtragem de dados por data, atualização dinâmica da interface, integração com biblioteca externa (ApexCharts) e estruturação básica de uma aplicação frontend.

Autor: Mayson Farias

Projeto desenvolvido para fins educacionais e prática de desenvolvimento web.
