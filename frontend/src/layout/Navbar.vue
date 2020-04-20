<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="navbar-psi" id="navbar-default">
    <div class="container">

      <router-link to="/" class="navbar-brand"><img :src="require('../assets/logo.svg')" class="img-fluid my-0" style="max-height: 55px" alt=""></router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="ml-md-4" is-nav>
        <b-navbar-nav>
          <router-link v-if="$auth.check('profissional')" :to="{name: 'DashboardProfissional'}" class="nav-link">Dashboard</router-link>
          <router-link v-if="$auth.check('paciente')" :to="{name: 'DashboardPaciente'}" class="nav-link">Dashboard</router-link>
          <router-link v-if="$auth.check('organizacao')" :to="{name: 'DashboardOrgao'}" class="nav-link">Dashboard</router-link>
          <a href="/#voce-profissional" class="nav-link">Profissional</a>
          <a href="/#rank" class="nav-link">Rank dos Heróis</a>
          <router-link :to="{name: 'Instituicoes'}" class="nav-link">Instituições</router-link>
          <router-link :to="{name: 'SaudeMental'}" class="nav-link">Saúde mental</router-link>
          <router-link :to="{name: 'OQueE'}" class="nav-link">Sobre nós</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" id="btn-navbar">
          <router-link v-if="!$auth.check()" to="/login" tag="button" class="btn btn-primary mr-lg-2 btn-login">Login</router-link>
          <router-link v-if="!$auth.check()" to="/cadastro" tag="button" class="btn btn-primary">Cadastro</router-link>
          <b-nav-item-dropdown right no-caret v-if="$auth.check()">
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <div class="d-flex">
                <div class="mr-md-2 pt-1">
                  <div class="text-right">
                    Olá
                  </div>
                  {{$auth.user().nome | firstName | upperFirst}}
                </div>
                <img :src="require('../assets/profile.png')" style="height: 55px; width: 55px" class="rounded-circle m-0 img-fluid" alt="avatar image">
              </div>
            </template>
            <b-dropdown-item href="#" @click="logout">Sair</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    logout () {
      this.$auth.logout()
    }
  },
  filters: {
    firstName (value) {
      return value.split(' ')[0]
    },
    upperFirst (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  }
}
</script>

<style lang="scss">
@media (max-width: 991.98px) {
  .navbar-collapse.collapsing, .navbar-collapse.show {
    text-align: center;
    z-index: 999;
    padding: 1.5rem;
    border-radius: 0.25rem;
    background: #FFF;
    box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
    -webkit-animation: show-navbar-collapse .2s ease forwards;
    animation: show-navbar-collapse .2s ease forwards;
  }
  .navbar-dark .navbar-nav .nav-link {
    color: #808080 !important;
  }
  #btn-navbar {
    align-items: center;
    .btn:first-child {
      background-color: #458AFF;
      color: #fff;
      margin-bottom: 3px;
    }
  }
}

@media (min-width: 992px) {
  #btn-navbar {
    .btn:first-child {
      background-color: #fff;
      color: #458AFF;
    }
  }
}
.navbar-psi {
  background: linear-gradient(90deg, #43C7FF 0%, #44A9FF 64.99%, #4584FF 102.13%);
}

#navbar-default.navbar-dark .navbar-nav .nav-link {
  color: #fff;
}
#navbar-default.navbar-dark .navbar-nav .nav-link:hover {
  color: #e4e4e4;
}
#navbar-default {
  max-height: 81px;
}
#btn-navbar {
  .btn {
    width: 6rem;
    height: 1.75rem;
    font-size: 0.8rem;
    font-weight: bold;
    padding-top: 0;
    padding-bottom: 0;
    border: none;
  }
  .btn:last-child {
    background-color: #FD3C65;
  }
}
</style>
