
/* ==================================================
   ENTRAR NO SITE
================================================== */

function entrarNoSite() {
    document.getElementById("telaLogin").classList.add("escondido");
    document.getElementById("site").classList.remove("escondido");
    mostrarInicio();
}

/* ==================================================
   SAIR DO SITE
================================================== */

function sair() {
    document.getElementById("site").classList.add("escondido");
    document.getElementById("telaLogin").classList.remove("escondido");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* ==================================================
   INÍCIO
================================================== */

function mostrarInicio() {
    const conteudo = document.getElementById("conteudo");

    conteudo.innerHTML = `

        <section id="paginaInicio" class="pagina">

            <div class="hero">
                <div class="hero-conteudo">

                    <img
                        class="logo-hero"
                        src="./imagens/logo.png.jpeg"
                        alt="Nós Por Nós Basketball"
                    >

                    <h1>NÓS POR NÓS</h1>
                    <h3>BASKETBALL</h3>

                    <p>
                        Mais que um time,<br>
                        somos uma família.
                    </p>

                    <button
                        class="btn-laranja"
                        onclick="mostrarPagina('clube')"
                    >
                        Conheça o time →
                    </button>

                </div>

                <div class="disciplinas">
                    <span>DISCIPLINA</span>
                    <span>RESPEITO</span>
                    <span>UNIÃO</span>
                    <span>EVOLUÇÃO</span>
                </div>
            </div>

            <!-- SOBRE NÓS -->
            <section class="sobre">

                <div class="sobre-texto">

                    <span class="titulo-laranja">SOBRE NÓS</span>
                    <h2>NÓS POR NÓS</h2>

                    <p>
                        O Nós Por Nós Basketball nasceu da vontade
                        de jogar, evoluir e conquistar juntos.
                    </p>

                    <p>
                        Aqui, cada um importa. A quadra é o nosso
                        espaço, e o respeito é a nossa base.
                    </p>

                    <div class="valores">

                        <div>
                            <strong>♧</strong>
                            <b>UNIÃO</b>
                            <small>Nós por nós</small>
                        </div>

                        <div>
                            <strong>🏆</strong>
                            <b>DISCIPLINA</b>
                            <small>Dentro e fora</small>
                        </div>

                        <div>
                            <strong>🏀</strong>
                            <b>EVOLUÇÃO</b>
                            <small>Constante</small>
                        </div>

                        <div>
                            <strong>♕</strong>
                            <b>RESPEITO</b>
                            <small>Sempre</small>
                        </div>

                    </div>
                </div>

                <div class="sobre-imagem">

                    <img
                        src="./imagens/logo.png.jpeg"
                        alt="Nós Por Nós"
                    >

                    <div class="frase-imagem">
                        JUNTOS<br>
                        SOMOS<br>
                        MAIS FORTES
                    </div>

                </div>
            </section>

            <!-- =====================================
                 ELENCO COM FOTOS AJUSTADAS
            ====================================== -->

            <section class="elenco">

                <div class="cabecalho">

                    <div>
                        <span class="titulo-laranja">
                            QUEM SOMOS DENTRO DE QUADRA
                        </span>

                        <h2>ELENCO</h2>
                    </div>

                    <button onclick="mostrarPagina('time')">
                        Ver todos os jogadores →
                    </button>

                </div>

                <div class="jogadores">

                    <!-- JV -->
                    <div
                        class="jogador"
                        onclick="mostrarJogador('JV')"
                    >
                        <div class="foto-jogador">
                            <img
                                src="./imagens/jv.jpg"
                                alt="JV em quadra"
                            >
                        </div>

                        <strong>JV</strong>
                        <small>ARMADOR</small>
                        <b>#23</b>
                    </div>

                    <!-- RLK -->
                    <div
                        class="jogador"
                        onclick="mostrarJogador('RLK')"
                    >
                        <div class="foto-jogador">
                            <img
                                src="./imagens/rlk.jpg"
                                alt="RLK em quadra"
                            >
                        </div>

                        <strong>RLK</strong>
                        <small>ARMADOR</small>
                        <b>#10</b>
                    </div>

                    <!-- FABIO -->
                    <div
                        class="jogador"
                        onclick="mostrarJogador('FABIO')"
                    >
                        <div class="foto-jogador">
                            <img
                                src="./imagens/fabio.jpg"
                                alt="FABIO em quadra"
                            >
                        </div>

                        <strong>FABIO</strong>
                        <small>ALA</small>
                        <b>#12</b>
                    </div>

                    <!-- JOTINHA -->
                    <div
                        class="jogador"
                        onclick="mostrarJogador('JOTINHA')"
                    >
                        <div class="foto-jogador">
                            <img
                                src="./imagens/jotinha.jpg"
                                alt="JOTINHA em quadra"
                            >
                        </div>

                        <strong>JOTINHA</strong>
                        <small>PIVÔ</small>
                        <b>#34</b>
                    </div>

                    <!-- DICAPRIO -->
                    <div
                        class="jogador"
                        onclick="mostrarJogador('DICAPRIO')"
                    >
                        <div class="foto-jogador">
                            <img
                                src="./imagens/dicaprio.jpg"
                                alt="DICAPRIO em quadra"
                            >
                        </div>

                        <strong>DICAPRIO</strong>
                        <small>ALA</small>
                        <b>#7</b>
                    </div>

                </div>
            </section>

            <!-- JOGOS -->
            <section class="jogos-resumo">

                <div class="proximo-jogo">

                    <span class="titulo-laranja">PRÓXIMO JOGO</span>

                    <div class="confronto">

                        <div>
                            <strong>NPN</strong>
                            <small>NÓS POR NÓS</small>
                        </div>

                        <span>VS</span>

                        <div>
                            <strong>???</strong>
                            <small>ADVERSÁRIO</small>
                        </div>

                    </div>

                    <p>📅 20/09/2026</p>
                    <p>📍 Vila Cruzeiro - Campo do Ordem</p>

                    <button
                        class="btn-detalhes"
                        onclick="mostrarPagina('jogos')"
                    >
                        Ver detalhes →
                    </button>

                </div>

                <div class="ultimo-jogo">

                    <span class="titulo-laranja">ÚLTIMO JOGO</span>

                    <div class="placar">
                        <strong>NPN</strong>
                        <b>52</b>
                        <span>×</span>
                        <b>51</b>
                        <strong>BSTUY</strong>
                    </div>

                    <div class="estatisticas">

                        <div>
                            <strong>16</strong>
                            <small>PTS</small>
                        </div>

                        <div>
                            <strong>5</strong>
                            <small>AST</small>
                        </div>

                        <div>
                            <strong>7</strong>
                            <small>REB</small>
                        </div>

                    </div>
                </div>

            </section>

        </section>
    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* ==================================================
   FUNÇÕES DAS PÁGINAS
================================================== */

function mostrarPagina(pagina) {
    const conteudo = document.getElementById("conteudo");

    if (pagina === "inicio") {
        mostrarInicio();
        return;
    }

    const paginas = {

        jogos: `
            <section class="pagina-interna">
                <span class="titulo-laranja">NOSSA AGENDA</span>
                <h2>🏀 JOGOS</h2>

                <div class="caixa-informacao">
                    <p><strong>Próximo jogo</strong></p>
                    <p>NÓS POR NÓS x Adversário</p>
                    <p>📅 Data: 20/09/2026</p>
                    <p>🕒 Horário: 15:00</p>
                    <p>📍 Local: Vila Cruzeiro - Campo do Ordem</p>
                </div>

                <div class="caixa-informacao">
                    <p><strong>Último jogo</strong></p>
                    <p>NPN 52 x 51 BSTUY</p>
                    <p>Destaque: 16 pontos, 5 assistências e 7 rebotes.</p>
                </div>
            </section>
        `,

        treinos: `
            <section class="pagina-interna">
                <span class="titulo-laranja">NOSSA ROTINA</span>
                <h2>🏋️ TREINOS</h2>

                <div class="caixa-informacao">
                    <p><strong>Dias:</strong></p>
                    <p>Segunda-feira e Quarta-feira</p>
                    <p><strong>Horário:</strong></p>
                    <p>18:00 - 20:00</p>
                    <p><strong>Local:</strong></p>
                    <p>Vila Cruzeiro - Campo do Ordem</p>
                </div>
            </section>
        `,

        uniformes: `
            <section class="pagina-interna">
                <span class="titulo-laranja">NOSSO MANTO</span>
                <h2>👕 UNIFORMES</h2>

                <div class="caixa-informacao">
                    <p><strong>Manto Principal</strong></p>
                    <p>Preto e Amarelo</p>
                    <p><strong>Manto Reserva</strong></p>
                    <p>Branco</p>
                    <p>Lançamento da nova coleção em breve!</p>
                </div>
            </section>
        `,

        clube: `
            <section class="pagina-interna">
                <span class="titulo-laranja">SOBRE O PROJETO</span>
                <h2>🏆 NÓS POR NÓS</h2>

                <div class="caixa-informacao">
                    <p>O Nós Por Nós é um projeto social e clube de basquete.</p>
                    <p>Nosso objetivo é utilizar o basquete como uma forma de união, evolução e oportunidade para os jovens.</p>
                    <p><strong>Missão:</strong></p>
                    <p>Basquete, união, evolução, respeito e inclusão social.</p>
                    <p><strong>Local:</strong></p>
                    <p>Vila Cruzeiro - Campo do Ordem</p>
                </div>
            </section>
        `,

        time: `
            <section class="pagina-interna">
                <span class="titulo-laranja">NOSSO TIME</span>
                <h2>ELENCO</h2>

                <div class="caixa-informacao">
                    <p><strong>JV</strong> — Armador — #23</p>
                    <p><strong>RLK</strong> — Armador — #10</p>
                    <p><strong>FABIO</strong> — Ala — #12</p>
                    <p><strong>JOTINHA</strong> — Pivô — #34</p>
                    <p><strong>DICAPRIO</strong> — Ala — #7</p>
                </div>
            </section>
        `,

        galeria: `
            <section class="pagina-interna">
                <span class="titulo-laranja">NOSSOS MOMENTOS</span>
                <h2>📸 GALERIA</h2>

                <div class="caixa-informacao">
                    <p>Em breve serão adicionadas fotos dos jogos, treinos, jogadores e momentos do Nós Por Nós Basketball.</p>
                </div>
            </section>
        `,

        perfil: `
            <section class="pagina-interna">
                <span class="titulo-laranja">FALE CONOSCO</span>
                <h2>👤 CONTATO</h2>

                <div class="caixa-informacao">
                    <p><strong>Clube:</strong></p>
                    <p>NÓS POR NÓS</p>
                    <p><strong>Endereço:</strong></p>
                    <p>Vila Cruzeiro - Campo do Ordem</p>
                    <p><strong>Email:</strong></p>
                    <p>contato@nospornos.org</p>
                </div>
            </section>
        `
    };

    if (paginas[pagina]) {
        conteudo.innerHTML = paginas[pagina];
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function mostrarPagina(id) {
    document.querySelectorAll('.pagina').forEach(pagina => {
        pagina.classList.remove('ativa');
    });

    const paginaSelecionada = document.getElementById(id);

    if (paginaSelecionada) {
        paginaSelecionada.classList.add('ativa');
    }
}
/* ==================================================
   JOGADORES
================================================== */

function mostrarJogador(nome) {
    const dados = {

        JV: {
            nome: "JV",
            texto:
                "ARMADOR • #23<br><br>" +
                "Destaque do Nós Por Nós Basketball.<br><br>" +
                "Último jogo: 16 pontos, 5 assistências e 7 rebotes."
        },

        RLK: {
            nome: "RLK",
            texto:
                "ARMADOR • #10<br><br>" +
                "Jogador com destaque para visão de jogo e criação."
        },

        FABIO: {
            nome: "FABIO",
            texto:
                "ALA • #12<br><br>" +
                "Jogador com destaque para infiltrações e presença ofensiva."
        },

        JOTINHA: {
            nome: "JOTINHA",
            texto:
                "PIVÔ • #34<br><br>" +
                "Jogador de força e destaque defensivo."
        },

        DICAPRIO: {
            nome: "DICAPRIO",
            texto:
                "ALA • #7<br><br>" +
                "Jogador do elenco Nós Por Nós Basketball."
        }
    };

    const jogador = dados[nome];

    if (!jogador) {
        return;
    }

    const nomeElemento = document.getElementById("nomeJogador");
    const infoElemento = document.getElementById("informacaoJogador");
    const modal = document.getElementById("modalJogador");

    if (!nomeElemento || !infoElemento || !modal) {
        return;
    }

    nomeElemento.innerHTML = jogador.nome;
    infoElemento.innerHTML = jogador.texto;
    modal.classList.add("ativo");
}

/* ==================================================
   FECHAR JOGADOR
================================================== */

function fecharJogador() {
    const modal = document.getElementById("modalJogador");

    if (modal) {
        modal.classList.remove("ativo");
    }
}

/* ==================================================
   FECHAR MODAL CLICANDO FORA
================================================== */

document.addEventListener("click", function(event) {
    const modal = document.getElementById("modalJogador");

    if (modal && event.target === modal) {
        fecharJogador();
    }
});

/* ==================================================
   ESC PARA FECHAR
================================================== */

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        fecharJogador();
    }
});


