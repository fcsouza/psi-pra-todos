<template>
  <div class="container altura-100-centro">
    <div class="row">
      <div class="col">
        <card>
          <!-- testando -->
          <h1>Esqueci minha senha</h1>
          <form>
            <div class="form-group mb-4">
              <label for="email" class="form-label">Email</label>
              <input type="text" class="form-control" id="email" name="email">
            </div>
            <div class="form-group d-flex justify-content-center align-items-center flex-column" style="margin-top: 4rem">
              <button class="psi-btn mb-4">
                <p>Enviar</p>
                <span>></span>
              </button>
            </div>
          </form>
        </card>
      </div>
      <div class="col">
        <h2>Digite seu Email e clique em Enviar, em instantes você receberá um e-mail automático contendo um link e as instruções para redefinir a senha.</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Esqueci'
}
</script>

<style lang="scss">
form{
  padding-top: 15px;
}
</style>
