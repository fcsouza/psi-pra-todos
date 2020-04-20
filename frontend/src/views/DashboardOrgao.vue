<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-4 adicionarProf">
        <div>
          <button class="psi-btn mb-4" data-toggle="modal" data-target="#adicionarProfissional">
            <p>Adicionar Funcionário</p>
            <span>></span>
          </button>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="adicionarProfissional" tabindex="-1" role="dialog" aria-labelledby="adicionarProfissionalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content borda-redonda">
              <div class="modal-header card-header">
                <h5 class="modal-title" id="adicionarProfissionalLabel">Cadastrar Funcionário</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                <form ref="form" @submit.prevent="submit">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label for="username" class="form-label">Nome</label>
                          <input type="text" class="form-control" v-model="form.nome" required id="username">
                        </div>
                        <div class="form-group">
                          <label for="email" class="form-label">Email</label>
                          <input type="email" class="form-control" v-model="form.email" required id="email">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label for="telefone" class="form-label">Telefone</label>
                          <input type="text" class="form-control" v-model="form.telefone" required id="telefone">
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="data_nascimento" class="form-label">Data de Nascimento</label>
                          <input type="text" class="form-control" v-model="form.data_nascimento" required id="data_nascimento">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label for="cpf" class="form-label">CPF</label>
                          <input type="text" class="form-control" v-model="form.cpf" required id="cpf">
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="cpf" class="form-label">CRP</label>
                          <input type="text" class="form-control" v-model="form.crp" required id="crp">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label for="cpf" class="form-label">Matricula</label>
                          <input type="text" class="form-control" required id="matricula">
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="password" class="form-label">Senha</label>
                          <input type="password" minlength="6" class="form-control" v-model="form.password" required id="password">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group d-flex justify-content-center align-items-center flex-column">
                    <button class="btn psi-btn">
                      <p>Cadastrar</p>
                      <span>></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-8 profCadastrados">
        <card>
          <template slot="header">
            <h2 class="text-center mt-2 text-white"><strong>Funcionários Cadastrados</strong></h2>
          </template>
          <div class="d-flex justify-content-center">
            <div class="container">
              <div class="row rank-usuario">
                <div class="col-4"><img :src="require('../assets/perfil1.svg')"></div>
                <div class="col-8 rank-descricao">
                  <h2>Carlos Assunção</h2>
                  <h4>Herói Diamante <span class="icon-diamante"></span></h4>
                  <div class="icones1">
                    <img :src="require('../assets/amizade.svg')">
                    <img :src="require('../assets/bate-papo.svg')">
                    <img :src="require('../assets/amigo.svg')">
                  </div>
                </div>
              </div>
              <div class="row rank-usuario">
                <div class="col-4"><img :src="require('../assets/perfil2.svg')"></div>
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
              <div class="row rank-usuario">
                <div class="col-4"><img :src="require('../assets/perfil3.svg')"></div>
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
                <div class="col-4"><img :src="require('../assets/perfil4.svg')"></div>
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
          </div>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import animarInputs from '../mixins/animarInputs'

export default {
  name: 'DashboardOrgao',
  data () {
    return {
      form: {
        nome: null,
        cpf: null,
        data_nascimento: null,
        password: null,
        telefone: null,
        email: null,
        crp: null
      }
    }
  },
  mixins: [animarInputs],
  methods: {
    continuar () {
      this.showCadastro = false
    },
    submit () {
      // const formData = this.$refs.form ? new FormData(this.$refs.form) : new FormData()
      this.$http.post('/professionals', this.form).then((response) => {
        this.$auth.login({
          data: this.form,
          success: function ({ data }) {
            this.$toast.success('Bem vindo!', `Sucesso ${data.user.nome}`, this.$root.toastConfig.success)
            $('#adicionarProfissional').modal('hide')
          },
          error: function (error) {
            console.error(error)
          },
          rememberMe: true,
          fetchUser: false
        })
      })
    }
  }
}
</script>
<style>
.adicionarProf{
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profCadastrados{
  padding: 20px;
}
.rank-usuario {
  margin-top: 10px;
  margin-bottom: 10px;
}
.card-header{
  background: linear-gradient(90deg, #43C7FF 0%, #44A9FF 64.99%, #4584FF 102.13%);
  color: #fff;
  border-radius: 10px 10px 0 0 !important;
}
.borda-redonda{
  border-radius: 10px 10px 0 0 !important;
}
</style>
