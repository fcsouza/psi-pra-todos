import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profissional from '../views/Profissional.vue'
import Login from '../views/Login.vue'
import Esqueci from '../views/Esqueci.vue'
import Cadastro from '../views/cadastro/Cadastro.vue'
import CadastroPaciente from '../views/cadastro/CadastroPaciente.vue'
import CadastroProfissional from '../views/cadastro/CadastroProfissional.vue'
import CadastroOrgao from '../views/cadastro/CadastroOrgao.vue'
import DashboardPaciente from '../views/DashboardPaciente.vue'
import DashboardProfissional from '../views/DashboardProfissional.vue'
import DashboardOrgao from '../views/DashboardOrgao.vue'
import OQueE from '../views/publico/OQueE'
import Instituicao from '../views/publico/Instituicao'
import SaudeMental from '../views/publico/SaudeMental'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profissional',
    name: 'Profissional',
    component: Profissional
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      auth: false
    }
  },
  {
    path: '/esqueci',
    name: 'Esqueci',
    component: Esqueci
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/cadastro/paciente',
    name: 'CadastroPaciente',
    component: CadastroPaciente
  },
  {
    path: '/cadastro/profissional',
    name: 'CadastroProfissional',
    component: CadastroProfissional
    // meta: {
    //   auth: {
    //     roles: ['paciente'],
    //     redirect: {
    //       name: 'login'
    //     },
    //     forbiddenRedirect: '/403'
    //   }
    // }
  },
  {
    path: '/o-que-e',
    name: 'OQueE',
    component: OQueE
  },
  {
    path: '/instituicoes',
    name: 'Instituicoes',
    component: Instituicao
  },
  {
    path: '/saude-mental',
    name: 'SaudeMental',
    component: SaudeMental
  },
  {
    path: '/dashboard/paciente',
    name: 'DashboardPaciente',
    component: DashboardPaciente,
    meta: {
      auth: {
        roles: ['paciente'],
        redirect: {
          name: 'login'
        },
        forbiddenRedirect: '/403'
      }
    }
  },
  {
    path: '/dashboard/organizacao',
    redirect: '/dashboard/instituto'
  },
  {
    path: '/dashboard/instituto',
    name: 'DashboardOrgao',
    component: DashboardOrgao,
    meta: {
      auth: {
        roles: ['organizacao'],
        redirect: {
          name: 'login'
        },
        forbiddenRedirect: '/403'
      }
    }
  },
  {
    path: '/cadastro/orgao',
    name: 'CadastroOrgao',
    component: CadastroOrgao
  },
  {
    path: '/dashboard/profissional',
    name: 'DashboardProfissional',
    component: DashboardProfissional
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
