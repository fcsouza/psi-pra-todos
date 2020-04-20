<template>
  <div>
    <h1 class="text-center text-psi" style="margin-bottom: 4rem">Termo de usuario</h1>
    <div v-html="termo" class="altura-termo">
    </div>
  </div>
</template>

<script>
import politicaPrvacidade from '../../assets/termos/politicaPrvacidade'
export default {
  name: 'TermoUsuarios',
  data () {
    return {
      termo: politicaPrvacidade.conteudo
    }
  }
}
</script>

<style>
.altura-termo {
  max-height: 400px;
  overflow-y: scroll;
}
</style>
