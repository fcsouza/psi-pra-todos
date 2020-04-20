<template>
  <div class="altura-100-centro">
    <card class="px-3" v-show="showCadastro">
      <h1 class="text-center text-psi">Faça seu cadastro</h1>
      <form ref="form" @submit.prevent="continuar">
        <div class="form-group">
          <label for="username" class="form-label">Nome</label>
          <input type="text" class="form-control" v-model="form.nome" required id="username">
        </div>
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input type="text" class="form-control" v-model="form.email" required id="email">
        </div>
        <div class="form-group">
          <label for="telefone" class="form-label">Telefone</label>
          <input type="text" class="form-control" v-model="form.telefone" required id="telefone">
        </div>
        <div class="form-group">
          <label for="data_nascimento" class="form-label">Data de Nascimento</label>
          <input type="text" onfocus="(this.type='date')" class="form-control" v-model="form.data_nascimento" required
                 id="data_nascimento">
        </div>
        <div class="form-group">
          <label for="cpf" class="form-label">CPF</label>
          <input type="text" class="form-control" v-model="form.cpf" required id="cpf">
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Senha</label>
          <input type="password" minlength="6" class="form-control" v-model="form.password" required id="password">
        </div>
        <div class="form-group d-flex justify-content-center align-items-center flex-column">
          <button class="btn psi-btn">
            <p>Continuar</p>
            <span>></span>
          </button>
          <div class="d-flex justify-content-center">
            <router-link :to="{name: 'Cadastro'}">Voltar</router-link>
          </div>
        </div>
      </form>
    </card>
    <div v-show="showTermo">
      <div class="container">
        <card>
          <termo-usuarios></termo-usuarios>
          <form @submit.prevent="submit">
            <b-form-checkbox
              id="checkbox"
              v-model="status"
              name="checkbox"
              value="aceito"
              unchecked-value="nao_aceito"
              class="my-3"
            >
              Eu aceitos os Termos de Uso e Políticas de Privacidade
            </b-form-checkbox>
            <div class="d-flex justify-content-center">
              <button class="btn psi-btn pl-2 mr-2 d-none d-md-flex" @click="voltar">
                <span>&#60;</span>
                <p>Voltar</p>
              </button>
              <button class="btn psi-btn" :disabled="statusBotao">
                <p>Cadastrar</p>
                <span>></span>
              </button>
              <div class="d-flex justify-content-center">
                <router-link :to="{name: 'Cadastro'}">Voltar</router-link>
              </div>
            </div>
            <div class="d-flex justify-content-center mt-2">
              <button class="btn psi-btn pl-2 mr-2 d-flex d-md-none" @click="voltar">
                <span>&#60;</span>
                <p>Voltar</p>
              </button>
            </div>
          </form>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import animarInputs from '../../mixins/animarInputs'
import TermoUsuarios from './TermoUsuarios'

export default {
  name: 'CadastroPaciente',
  components: { TermoUsuarios },
  data () {
    return {
      status: 'nao_aceito',
      showCadastro: true,
      showTermo: false,
      liberarContinuar: true,
      form: {
        nome: null,
        cpf: null,
        data_nascimento: null,
        password: null,
        telefone: null,
        email: null
      }
    }
  },
  mixins: [animarInputs],
  computed: {
    statusBotao () {
      return (this.status === 'nao_aceito') || (!this.liberarContinuar && this.status === 'aceito')
    }
  },
  methods: {
    voltar () {
      this.showCadastro = true
      this.showTermo = false
    },
    continuar () {
      this.showCadastro = false
      this.showTermo = true
    },
    submit () {
      // const formData = this.$refs.form ? new FormData(this.$refs.form) : new FormData()
      this.liberarContinuar = false
      this.$http.post('/pacientes', this.form).then((response) => {
        this.$auth.login({
          data: this.form,
          success: function ({ data }) {
            this.$auth.token('jwt-auth', data.token)
            this.$auth.user(data.user)
            localStorage.setItem('user', JSON.stringify(data.user))
            this.$toast.success('Bem vindo!', `Sucesso ${data.user.nome}`, this.$root.toastConfig.success)
            this.$router.replace({ path: '/dashboard/' + data.user.perfil })
            this.liberarContinuar = true
          },
          error: function (error) {
            console.error(error)
            this.$router.replace({ path: '/login' })
          },
          rememberMe: true,
          fetchUser: false
        })
      })
        .catch((error) => {
          if (error.response.data.error === 'User already exists') {
            this.$toast.error('Usuario ja cadastrado', 'Erro!', this.$root.toastConfig.error)
          } else {
            this.$toast.error('Erro ao logar, verifique seus dados', 'Erro!', this.$root.toastConfig.error)
          }
          console.error(error)
          this.liberarContinuar = true
        })
    }
  }
}
</script>
