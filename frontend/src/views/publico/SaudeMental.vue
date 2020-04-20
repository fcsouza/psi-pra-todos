<template>
  <div class="container my-5">
    <div class="row">
      <div class="col mb-3">
        <h1>Como preservar a saúde mental?</h1>
        <h2>
          Para preservar a sáude mental, existe um técnica chamada higiene mental.
        </h2>
        <h2>A higiene mental nada mais é do que um conjunto de hábitos e práticas para manter sua mente prevenida dos
          diversos adoecimentos psíquicos.</h2>
        <h2>
          Durante a pandemia muito se fala quanto a higiene das mãos e de ações para
          manter você e as outras pessoas longe do vírus, e quando falamos de saúde mental seguimos a mesma lógica,
          pois o nível elevado de estresse e ansiedade diante do cenário pode te levar ao adoecimento psíquico e
          emocional.
        </h2>
      </div>
    </div>
    <div class="row preventivas">
      <div class="col">
        <h1>E quais ações preventivas devo tomar?</h1>
        <div class="container">
          <div class="row">
            <div class="col-md-2">
              <img :src="require('../../assets/mantenhase.svg')">
            </div>
            <div class="col-10"><span class="destaque">Mantenha-se descansado!</span> O sono é essencial para a
              reparação do corpo e consolidação da memória.
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <img :src="require('../../assets/pratique.svg')">
            </div>
            <div class="col-md-10"><span class="destaque">Pratique exercícios físicos!</span> Além de outros benefícios,
              eles ajudam na liberação de neurotransmissores naturais do corpo, associados ao bem-estar.
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <img :src="require('../../assets/rotina.svg')">
            </div>
            <div class="col-10"><span class="destaque">Crie uma rotina</span>, de forma que você se mantenha ativo e
              produtivo durante o dia. A sugestão é que busque intercalar atividades que te tragam bem-estar e
              atividades de trabalho (laborais).
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <img :src="require('../../assets/ociosidade.svg')">
            </div>
            <div class="col-10"><span class="destaque">Evite a ociosidade.</span> A mente vazia pode trazer à tona
              pensamentos de desvalor, desvalia ou desesperança, ou seja, tenha sempre o que fazer.
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <img :src="require('../../assets/fake.svg')">
            </div>
            <div class="col-10"><span class="destaque">Não caia em fake news!</span> Reduza a leitura ou o contato com
              notícias que podem causar ansiedade ou estresse. Busque informação apenas de fontes confiáveis, como a OMS, Ministério da Saúde e da
              Secretaria de saúde do seu Estado e da sua cidade.
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <img :src="require('../../assets/empatia.svg')">
            </div>
            <div class="col-10"><span class="destaque">Tenha empatia.</span> Busque, na medida do possível, apoiar os
              outros. A assistência a pessoas em momento de carência ajuda tanto quem recebe o apoio quanto dá apoia,
              principalmente pessoas do grupo de risco. Telefone para seus vizinhos, familiares ou pessoas em sua comunidade que precisam de assistência extra.
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <img :src="require('../../assets/cuidedevoce.svg')">
            </div>
            <div class="col-10"><span class="destaque">Cuide de você!</span> Durante seu trabalho em casa, procure beber
              bastante água e adicionar intervalos de descanso e pausa.  Isso ajuda a reduzir o nível de estresse e te
              mantém mais produtivo e saudável.
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <img :src="require('../../assets/mantenhacontato.svg')">
            </div>
            <div class="col-10"><span class="destaque">Mantenha contato</span> com seus familiares, amigos, namorada(o)
              e pessoas por quem você tem afeto, você não está sozinho! Vocês podem enfrentar isso juntos!
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <img :src="require('../../assets/incentive.svg')">
            </div>
            <div class="col-10"><span class="destaque">Incentive boas ações!</span> Manifeste seu apoio aos
              profissionais que estão na linha de frente durante a pandemia, compartilhe boas práticas e bons projetos
              que podem ajudar a sociedade, como a
              <div class="nomedosite"><span class="psipara">Psi Para</span> <span class="todos">Todos.</span></div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h2>Estar em quarentena não significa estar só no mundo! Existem milhões de pessoas que assim como você
                estão em suas casas e isso é um ato de amor, respeito ao próximo! São atos em favor da vida!</h2>
              <h2>Cuidar da saúde mental é cuidar de quem você é!</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col">
        <h1>E nos casos de crise ou de maior gravidade?</h1>
        <h2>Procure imediatamente um profissional de psicologia, pois auxílio profissional será eficaz para redução
          dos prejuízos e enfrentamento da dificuldade. </h2>
        <h2>Não pense que é um “ato de fraqueza”, você pode estar doente e a doença precisa ser tratada
          adequadamente.</h2>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <h1>Você não está sozinho!</h1>
        <h2>Hoje existem diversas doenças mentais, consideradas por alguns como “frescura”. Sabemos hoje através
          de estudos científicos que são doenças, e possuem tratamento!</h2>
        <h2>A <div class="nomedosite"><span class="psipara">Psi Para</span> <span class="todos">Todos</span></div> possui profissionais cadastrados, de diversos órgãos e projetos, qualificados para atender
          as mais diversas demandas! Cadastre-se e agende sua consulta
          <router-link :to="{name:'CadastroPaciente'}">clicando aqui</router-link>
          .
        </h2>
        <h2>Vamos juntos fazer a nossa parte e cuidar da saúde física e mental, contribuindo com a
          integridade de quem tanto amamos.</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SaudeMental'
}
</script>

<style lang="scss" scoped>
div {
  h1 {
    text-align: center;
    color: #4589ff;
    margin-bottom: 30px;
  }

  h2 {
    margin-top: 15px;
    margin-bottom: 15px;
    color: #6E6E6E;
  }

  .preventivas {
    background-color: #FFFFFF;
    border-radius: 1.25rem;
    padding-top: 20px;
    padding-bottom: 10px;
    margin-bottom: 10px;

    h1 {
      color: #4589FF;
    }

    .destaque {
      color: #fd3c65;
      font-weight: bold;
      font-size: 25px;
    }

    .row {
      padding-top: 29px;
      padding-bottom: 20px;
    }

    .col {
      font-size: 25px;
      text-align: justify;

      h2 {
        color: #4589FF;
        text-align: center;
        line-height: 1.5;
        font-weight: bold;
      }
    }

    img {
      margin: 0 auto;

    }
  }
}
</style>
