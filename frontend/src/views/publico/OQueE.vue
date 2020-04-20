<template>
  <div class="container mb-4">
    <div class="mx-md-5 text-center">
      <h1 class="text-center">O que é Psi Para Todos?</h1>
      <h2>Uma solução que une a população e psicólogos facilitando a conexão e agendamento de serviços psicológicos
        voluntariamente, de maneira simples, humana e segura, com apenas um clique!</h2>
      <h2>
        Períodos de pandemia e quarentena aumentam ainda mais os casos de transtornos ansiosos, como no caso da COVID-19.
        O problema pode-se tornar ainda maior com uma possível crise econômica.
      </h2>
      <h2>A oferta de serviços de atendimento psicológico voluntário é uma prática existente não só pelos profissionais
        psicólogos, mas também por instituições públicas e privadas.
      </h2>
      <h2>Diante deste cenário, a demanda pela busca de serviços torna-se maior e a necessidade de distanciamento
        isolamento social pode dificultar que o cidadão o encontre.</h2>
      <h2> O
        <div class="nomedosite"><span class="psipara">Psi Para</span> <span class="todos">Todos</span></div>
        é um serviço que reúne as ofertas de atendimento psicológico voluntário de profissionais e instituições públicas e
        privadas fazendo uma conexão com o cidadão.
      </h2>
      <div>
        <div class="row">
          <div class="col">
            <h1>Nossa Missão</h1>
            <h2>Nossa missão é que a
              <div class="nomedosite"><span class="psipara">Psi Para</span> <span class="todos">Todos</span></div>
              atenda à população que não tem acesso a serviços psicológicos e conectar cada vez mais as pessoas com
              psicólogos.
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h1>Equipe de Desenvolvimento</h1>
            <h2>Somos um time multidisciplinar engajados em formular soluções para promoção da saúde, através de um evento
              promovido pelo Ministério Público do Amazonas, intitulado Pandemic Hackfest Saúde.</h2>
          </div>
          <div class="col d-flex">
            <img :src="require('../../assets/equipe.svg')" class="equipe mx-auto">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OQueE'
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 45px;
}
h2 + h2 {
  margin-top: 25px;
}
</style>
