<template>
  <div class="container my-4">
    <h1 class="text-center">Instituições</h1>
    <h2>A parceria com as instituições que disponibilizam serviços de psicologia, através de Tecnologias da Informação e
      comunicação (TIC), é de extrema relevância e produz benefícios a todos:</h2>
    <h2 class="my-4">
      <ol type="I">
        <li>Auxilia no gerenciamento da agenda direcionando o usuário ao serviço disponível no momento</li>
        <li>Ajuda a organização no acompanhamento do serviço e auxilia a prestação de contas gerando dados sobre o
          serviço como: confirmação de atendimento realizado, quantidade de horas de serviços já realizadas e muito
          mais.
        </li>
        <li>Proporciona à população um canal transparente com informações seguras e atendimento humano, para minimizar
          prejuízos.
        </li>
        <li>O fluxo de acessos e o aumento da demanda produz dados que serão disponibilizados aos setores públicos para
          o desenvolvimento de estratégias e de políticas públicas cada vez melhores de saúde mental.
        </li>
      </ol>
    </h2>
    <h2>
      Na plataforma a instituição podem realizar seu cadastro e cadastrar seus colaboradores, permitindo ainda, a
      visualização das confirmações de atendimento e o cenário de avaliações dos usuários do serviço.
    </h2>
    <div class="d-flex justify-content-center">
      <router-link :to="{name: 'CadastroOrgao'}" class="psi-btn mt-4" tag="button">SEJA UM PARCEIRO</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Instituicao'
}
</script>

<style scoped>
li {
  margin-top: 9px;
}
.psi-btn{
  width: 174px !important;
}
.psi-btn:hover{
  color: #ffffff;
}
</style>
