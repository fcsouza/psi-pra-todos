import bearer from '@websanova/vue-auth/drivers/auth/bearer'
import axios from '@websanova/vue-auth/drivers/http/axios.1.x'
import router from '@websanova/vue-auth/drivers/router/vue-router.2.x'

const config = {
  auth: bearer,
  http: axios,
  router: router,
  tokenDefaultName: 'jwt-auth',
  tokenStore: ['localStorage'],
  rolesVar: 'perfil',

  // API endpoints used in Vue Auth.
  registerData: {
    url: '/user',
    method: 'POST',
    redirect: '/login'
  },
  loginData: {
    url: '/sessions',
    method: 'POST',
    redirect: '',
    fetchUser: true
  },
  logoutData: {
    url: '/logout',
    method: 'POST',
    redirect: '/',
    makeRequest: false
  },
  fetchData: {
    url: '/user',
    method: 'POST',
    enabled: false
  },
  refreshData: {
    url: '/refresh',
    method: 'GET',
    enabled: false,
    interval: 30
  }
}
export default config
