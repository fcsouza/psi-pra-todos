<template>
  <div class="home">
    <section class="container" id="primeiro">
      <div class="partone row">
        <div class="col d-flex justify-content-center align-items-center">
          <div class="text-center text-md-left" id="conteudo-primeiro">
            <h1>A plataforma que conecta você ao atendimento ideal</h1>
            <h2>Você já conhece a <div class="nomedosite"><span class="psipara">Psi Para</span> <span class="todos">Todos</span></div>?</h2>
            <div class="d-md-none mb-4">
              <img :src="require('../assets/part1.svg')" class="img-fluid">
            </div>
            <router-link :to="{name: 'OQueE'}" tag="button">SAIBA MAIS</router-link>
          </div>
        </div>
        <div class="col d-none d-md-flex justify-content-center align-items-center p-5" style="box-sizing: border-box">
          <img :src="require('../assets/part1.svg')" class="img-fluid">
        </div>
      </div>
    </section>
    <section class="parttwo" id="saiba">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-4 d-none d-md-block">
            <img :src="require('../assets/part2.svg')" class="img-fluid">
          </div>
          <div class="col-md-8">
            <h1>Quem pode usar?</h1>
            <h2>Qualquer pessoa, maior de 18 anos, pode acessar nossa plataforma, se cadastrar e agendar um dia e horário para falar com um dos profissionais disponíveis via chamada de vídeo, áudio ou chat.</h2>
            <div class="d-flex justify-content-center">
              <router-link :to="{name: 'CadastroPaciente'}" tag="button">CADASTRAR</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="partthree" id="parceiros">
      <div class="container">
        <h1 class="mt-0">Venha ser nosso parceiro</h1>
        <div class="d-flex">
          <img :src="require('../assets/susam1.svg')" class="logo-partthree img-fluid mx-auto">
          <img :src="require('../assets/vivamente1.svg')" class="logo-partthree d-none d-md-block">
          <img :src="require('../assets/pisco1.svg')" class="logo-partthree img-fluid mx-auto">
          <img :src="require('../assets/clinica1.svg')" class="logo-partthree d-none d-md-block">
        </div>
      </div>
    </section>
    <section class="container" id="voce-profissional">
      <div class="partfour row">
        <div class="col">
          <h1>Você é um profissional na área da Psicologia?</h1>
          <div class="row">
            <div class="col d-none d-md-block">
              <img :src="require('../assets/profi.svg')">
            </div>
            <div class="col-md-8 text-left">
              <h2>O <div class="nomedosite"><span class="psipara">Psi Para</span> <span class="todos">Todos</span></div> permite crescimento profissional e conecta o psicólogo com pacientes em horários
                flexíveis de acordo com a disponibilidade de ambos.
              </h2>
              <br>
              <h2>A plataforma permite que o profissional com CRP ativo e cadastro no E-Psi participe de forma individual e em caráter voluntário a partir do cadastramento na plataforma.
              </h2>
              <br>
              <h2>O profissional será avaliado por atendimento e sua pontuação integrará uma lista de “heróis”.
              </h2>
              <div class="justify-content-center d-flex">
                <router-link :to="{name: 'CadastroProfissional'}" class="mt-4" tag="button">QUERO PARTICIPAR</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="partfive" id="rank" style="background-color: #E2ECFF;">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1>Rank de Heróis</h1>
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <card class="px-3">
                    <div class="container">
                      <div class="row rank-usuario" @click="selecionarRank(rank[0])">
                        <div class="col-4"><img class="img-rank" :src="require('../assets/bete.svg')"></div>
                        <div class="col-8 rank-descricao">
                          <h2>Bete Santos</h2>
                          <h4>Herói Diamante <span class="icon-diamante"></span></h4>
                          <div class="icones1">
                            <img :src="require('../assets/amizade.svg')">
                            <img :src="require('../assets/bate-papo.svg')">
                            <img :src="require('../assets/amigo.svg')">
                          </div>
                        </div>
                      </div>
                      <div class="row rank-usuario" @click="selecionarRank(rank[2])">
                        <div class="col-4"><img class="img-rank" :src="require('../assets/perfil2.svg')"></div>
                        <div class="col-8 rank-descricao">
                          <h2>Amanda Louise</h2>
                          <h4>Herói Diamante <span class="icon-diamante"></span></h4>
                          <div class="icones1">
                            <img :src="require('../assets/mao.svg')">
                            <img :src="require('../assets/bate-papo1.svg')">
                            <img :src="require('../assets/amizade.svg')">
                          </div>
                        </div>
                      </div>
                      <div class="row rank-usuario" @click="selecionarRank(rank[1])">
                        <div class="col-4"><img class="img-rank" :src="require('../assets/perfil3.svg')"></div>
                        <div class="col-8 rank-descricao">
                          <h2>Roberta Miranda</h2>
                          <h4>Herói Platina <span class="icon-platina"></span></h4>
                          <div class="icones1">
                            <img :src="require('../assets/bate-papo.svg')">
                            <img :src="require('../assets/amigo.svg')">
                            <img :src="require('../assets/amizade.svg')">
                          </div>
                        </div>
                      </div>
                      <div class="row rank-usuario">
                        <div class="col-4"><img class="img-rank" :src="require('../assets/perfil4.svg')"></div>
                        <div class="col-8 rank-descricao">
                          <h2>Gustavo Silva</h2>
                          <h4>Herói Platina <span class="icon-platina"></span></h4>
                          <div class="icones1">
                            <img :src="require('../assets/amizade.svg')">
                            <img :src="require('../assets/mao.svg')">
                            <img :src="require('../assets/bate-papo.svg')">
                          </div>
                        </div>
                      </div>
                    </div>
                  </card>
                </div>
                <div class="col">
                  <div class="rank-selecionado">
                    <h1>{{selecionado.nome}}</h1>
                    <div class="img-rank-usuario">
                      <img class="img-rank-selecionado" :src="selecionado.imagem">
                      <h4>Herói Platina <span class="icon-platina"></span></h4>
                    </div>
                    <div class="icones2">
                      <img :src="require('../assets/1.svg')">
                      <img :src="require('../assets/2.svg')">
                      <img :src="require('../assets/3.svg')">
                    </div>
                    <div class="text-center">
                      {{selecionado.descricao}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="partsix" id="instituicao">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-4 d-none d-md-block">
              <img :src="require('../assets/orgao.svg')" class="img-fluid">
            </div>
            <div class="col-md-8 text-justify">
              <h1>Instituições</h1>
              <h2 class="my-4">Na plataforma a instituição pode realizar seu cadastro e cadastrar seus colaboradores, permitindo ainda, a visualização das confirmações de atendimento e o cenário de avaliações dos usuários do serviço.
              </h2>
              <router-link :to="{name: 'CadastroOrgao'}" tag="button">SEJA UM PARCEIRO</router-link>
            </div>
          </div>
        </div>
    </section>
    <section class="partseven" id="dicas">
        <div class="container">
          <div class="row">
            <div class="col">
              <h1>Dicas de Saúde Mental</h1>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-8">
                    <h2>A <div class="nomedosite"><span class="psipara">Psi Para</span> <span class="todos">Todos</span></div> traz a você diversas dicas para manter a higiene mental diante da pandemia do Covid-19, e o melhor é que a maioria das dicas você leva para a vida.</h2>

                    <h2>Ressaltamos que esse material não substitui a consulta psicológica, que deve ser realizada por um Profissional de Psicologia com Registro ativo no Conselho de Psicologia.</h2>
                    <h2>Então vamos ao que interessa?</h2>
                    <div class="d-flex justify-content-center">
                      <router-link :to="{name: 'SaudeMental'}" tag="button">LEIA MAIS</router-link>
                    </div>
                  </div>
                  <div class="col-4">
                    <img :src="require('../assets/saudemental.png')" class="saudemental">
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      rank: [
        {
          descricao: 'Bete está no ramo da psicologia há 3 anos. Possui uma clínica de atendimento com especialização em transtornos de ansiedade.',
          imagem: require('../assets/bete.svg'),
          nome: 'Bete Santos'
        },
        {
          descricao: 'Psicóloga Clínica especializada em Terapia Cognitivo Comportamental. Atuação como psicoterapeuta em todas as faixas etárias em consultório particular e em rede pública.  Órgão: Semsa',
          imagem: require('../assets/perfil3.svg'),
          nome: 'Amanda Louise'
        },
        {
          descricao: 'Sou psicólogo e mestrando em Psicologia da Saúde. Tenho 5 anos de experiência profissional em Saúde, formação de docentes e Psicologia Clínica.  Órgão: Susam',
          imagem: require('../assets/perfil2.svg'),
          nome: 'Roberta Miranda'
        }
      ],
      selecionado: {
        descricao: 'Bete está no ramo da psicologia há 3 anos. Possui uma clínica de atendimento com especialização em transtornos de ansiedade.',
        imagem: require('../assets/bete.svg'),
        nome: 'Bete Santos'
      }
    }
  },
  methods: {
    selecionarRank (value) {
      this.selecionado = value
    }
  },
  mounted () {
    var handleHomeContentHeight = function () {
      var altura = $('#conteudo-primeiro').height()
      var alturaMinima = window.innerWidth > 991 ? 488 : window.innerWidth > 767 ? 356 : 300
      altura = altura < 350 ? alturaMinima : altura
      $('#primeiro').height($(window).height() - $('#navbar-default').height()).css('min-height', altura)

      $(window).on('resize', function () {
        var altura = $('#conteudo-primeiro').height()
        var alturaMinima = window.innerWidth > 991 ? 488 : window.innerWidth > 767 ? 356 : 300
        altura = altura < 350 ? alturaMinima : altura
        $('#primeiro').height($(window).height() - $('#navbar-default').height()).css('min-height', altura)
      })
    }
    $(window).on('load', function () {
      handleHomeContentHeight()
    })
  }
}
</script>

<style lang="scss">
  .home {
    .img-rank {
      max-width: 112px;
      max-height: 119px;
      border-radius: 40px;
    }
    .img-rank-selecionado {
      width: 207px;
      height: 219px;
    }
    @media (max-width: 767.98px) {
      h1 {
        font-size: 26px !important;
      }
      h2{
        text-align: center;
      }
      .parttwo {
        padding-top: 20px !important;
        padding-bottom: 15px;
      }
      .partfive{
        h1{
          margin-top: 15px;
        }
        h4{
          padding-left: 15px;
        }
        .col-4{
          img{
            padding-left: 10% !important;
          }
        }
        .icones1{
          padding-left: 15px;
        }
      }
      .partsix{
        h1{
          text-align: center;
        }
        h2{
          text-align: justify;
        }
        button{
          margin:0 auto;
          margin-left: 28%;
        }
      }
      .partseven{
        .col-8{
          flex: 0 0 100%;
          max-width: 100%;
        }
        .col-4{
          max-width: 0%;
        }
        .saudemental{
          display: none;
        }
      }
      .parteight{
        .equipe{
          width: 450px !important;
        }
      }
    }
    @media (max-width: 991.98px) {
      #primeiro {
        margin-top: 15px;
        margin-bottom: 15px;
      }
      .parttwo {
        div{
          h1 {
            font-size: 40px !important;
            text-align: center;
          }
          h2 {
            text-align: center !important;
          }
        }
      }
      .partseven{
        .col-8{
          h2{
            text-align: justify;
          }
        }
        .saudemental{
          width: 183px;
          height: 340px;
        }

        .preventivas{
          .row{
            text-align: center;
            .col-2{
              flex: 0 0 100%;
              max-width: 100%;
            }
            .col-10{
              flex: 0 0 100%;
              max-width: 100%;
            }
          }
        }
      }
      .parteight{
        .equipe{
          width: 677px;
        }
      }
    }
    @media (min-width: 768px) {
      .parttwo {
        min-height: 559px;
      }
    }
    button {
      width: 225px;
      height: 45px;
      border: none;
      background-color: #4589ff;
      border-radius: .9em;
      color: white;
      padding-top: 0;
      font-size: 20px;
      margin-bottom: 10px;
    }
    .partone {
      padding-top: 20px;
      height: 100%;
      div {
        h1 {
          font-size: 35px;
          font-weight: bold;
        }

        h2 {
          margin-top: 30px;
          margin-bottom: 20px;
          font-size: 25px;
          color: #6E6E6E;
        }

        img {
          max-height: 480px;
        }
      }
    }

    .parttwo {
      min-height: 365px;
      background-color: #E2ECFF;
      padding-top: 30px;
      padding-left: 30px;
      padding-right: 30px;
      text-align: right;
      align-items: center;
      display: flex;
      div{
        h1 {
          font-size: 35px;
          font-weight: bold;
        }
        h2 {
          font-size: 18px;
          color: #6E6E6E;
          margin-bottom: 30px;
          line-height: 1.5;
        }
      }
    }

    .partthree {
      padding-top: 10px;
      height: 240px;
      background-color: #458AFF;
      text-align: center;

      div {
        h1 {
          color: #FFFFFF;
          margin-top: 20px;
          margin-bottom: 50px;
          font-weight: bold;
        }
      }

    }

    .partfour {
      text-align: center;
      min-height: 405px;
      padding-bottom: 10px;
      h1 {
        margin-top: 30px;
        margin-bottom: 30px;
      }

      div {
        h2 {
          font-size: 24px;
          color: #6E6E6E;
          text-align: justify;
        }
        button{
          margin-top: 10px;
        }
      }
    }

    .partfive{
      background-color: #ffbe9d;
      padding-top: 20px;
      padding-bottom: 30px;
      div{
        h1{
          text-align: center;
        }
        .rank-usuario:hover {
          opacity: 50%;
        }
        .rank-usuario{
          transition-duration: .3s;
          cursor: pointer;
          margin-top: 10px;
          margin-bottom: 10px;
          h4{
            font-size: 15px;
          }
          .icones1{
            img{
              margin-left: 2px;
              margin-right: 2px;
            }
          }
        }
        .icon-diamante{
          display: inline-block;
          width: 15px;
          height: 15px;
          background-image: url('../assets/diamante.svg');
          background-size: 15px 15px;
        }
        .icon-platina{
          display: inline-block;
          width: 15px;
          height: 15px;
          background-image: url('../assets/platina.svg');
          background-size: 15px 15px;
        }
        .rank-selecionado{
          text-align: center;
        }
      }
    }

    .partsix{
      padding-top: 30px;
      padding-bottom: 10px;
      background-color: #FFFFFF;
    }

    .partseven{
      background-color: #E2ECFF;
      padding-top: 20px;
      padding-bottom: 10px;
      div{
        h1{
          text-align: center;
          color: #4589ff;
        }
        h2{
          margin-top: 15px;
          margin-bottom: 15px;
          color: #6E6E6E;
        }
        .preventivas{
          background-color: #FFFFFF;
          border-radius: 1.25rem;
          padding-top: 20px;
          padding-bottom: 10px;
          margin-bottom: 10px;
          h1{
            color: #4589FF;
          }
          .destaque{
            color: #fd3c65;
            font-weight: bold;
            font-size: 25px;
          }
          .row{
            padding-top: 29px;
            padding-bottom: 20px;
          }
          .col{
            font-size: 25px;
            text-align: justify;
            h2{
              color: #4589FF;
              text-align: center;
              line-height: 1.5;
              font-weight: bold;
            }
          }
          img{
            margin: 0 auto;

          }
        }
      }
    }

    .parteight{
      padding-bottom: 20px;
      .row{
        margin-bottom: 20px;
      }
    }
  }
</style>
