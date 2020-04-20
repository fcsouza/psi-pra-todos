<template>
  <div class="login altura-100-centro">
    <card class="px-5">
        <h1 class="text-center text-psi" style="margin-bottom: 4rem">Login</h1>
        <form @submit.prevent="submit">
          <div class="form-group mb-4">
            <label for="username" class="form-label">Email</label>
            <input type="email" required class="form-control" v-model="form.email" id="username">
          </div>
          <div class="form-group">
            <label for="password" class="form-label">Senha</label>
            <input type="password" required class="form-control" v-model="form.password" id="password">
          </div>
          <div class="form-group d-flex justify-content-center align-items-center flex-column" style="margin-top: 4rem">
            <button class="psi-btn mb-4">
              <p>Acessar</p>
              <span>></span>
            </button>
            <router-link :to="{name: 'Esqueci'}">Esqueci minha senha.</router-link>
          </div>
        </form>
    </card>
  </div>
</template>

<script>
import animarInputs from '../mixins/animarInputs'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: null,
        password: null
      }
    }
  },
  mixins: [animarInputs],
  methods: {
    submit () {
      this.$auth.login({
        data: this.form,
        success: function ({ data }) {
          this.$auth.token('jwt-auth', data.token)
          this.$auth.user(data.user)
          localStorage.setItem('user', JSON.stringify(data.user))
          this.$toast.success(`Bem vindo! ${data.user.nome}`, 'Sucesso', this.$root.toastConfig.success)
          this.$router.replace({ path: 'dashboard/' + data.user.perfil })
        },
        error: function (error) {
          console.error(error)
          this.$toast.error('Usuario não cadastrado', 'Erro!', this.$root.toastConfig.error)
        },
        rememberMe: true,
        fetchUser: false
      })
      // const formData = this.$refs.form ? new FormData(this.$refs.form) : new FormData()
      // axios.post('/sessions', this.form).then((response) => {
      //   console.log(response)
      // })
    }
  }
}
</script>

<style lang="scss">
  .login > .card {
    width: 100%;
    padding: 15px;
    margin: auto;
    max-width: 450px;
    h1{
      font-weight: bold;
    }
  }

</style>
