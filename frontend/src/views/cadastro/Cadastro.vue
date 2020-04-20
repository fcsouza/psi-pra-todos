<template>
  <div class="container altura-100-centro" id="cadastro">
    <div class="row">
      <div class="col-md-4">
        <router-link :to="{name: 'CadastroPaciente'}">
          <card>
            <img class="img-fluid" v-if="imagensVisiveis" :src="require('../../assets/paciente.svg')">
            <template slot="footer">
              Paciente
            </template>
          </card>
        </router-link>
      </div>
      <div class="col-md-4">
        <router-link :to="{name: 'CadastroProfissional'}">
          <card>
            <img class="img-fluid" v-if="imagensVisiveis" :src="require('../../assets/profissional.svg')">
            <template slot="footer">
              Profissional
            </template>
          </card>
        </router-link>
      </div>
      <div class="col-md-4">
        <router-link :to="{name: 'CadastroOrgao'}">
          <card>
            <img class="img-fluid" v-if="imagensVisiveis" :src="require('../../assets/orgao.svg')">
            <template slot="footer">
              Orgão
            </template>
          </card>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import animarInputs from '../../mixins/animarInputs'

export default {
  name: 'Cadastro',
  mixins: [animarInputs],
  data () {
    return {
      imagensVisiveis: true
    }
  },
  mounted () {
    var self = this
    this.getWindowWidth()
    window.addEventListener('resize', function () {
      self.getWindowWidth()
    })
  },
  destroyed () {
    window.removeEventListener('resize', this.getWindowWidth)
  },
  methods: {
    getWindowWidth () {
      if (window.innerWidth < 767.98) {
        this.imagensVisiveis = false
      } else {
        this.imagensVisiveis = true
      }
    }
  }
}
</script>

<style lang="scss">
  #cadastro {
    a {
      color: #fff;
    }
    .card{
      .card-body{
        text-align: center;
        background-color: #FFFFFF;
        img{
          width: 242px;
          height: 241px;
        }
      }

      .card-footer{
        background-color: #4589ff;
        text-decoration: none;
        color: white;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
      }
    }
  }
</style>
