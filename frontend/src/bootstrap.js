import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import Vue from 'vue'
// import axios from 'axios'

window._ = require('lodash')

try {
  window.Popper = require('popper.js').default
  window.$ = window.jQuery = require('jquery')
  require('select2/dist/js/select2.full.min')
  require('bootstrap')
} catch (e) {
  console.error(e)
}

// window.axios = axios.create({
//   baseURL: 'http://localhost:3333',
//   withCredentials: false,
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: 'Bearer ' + localStorage.token,
//     'Access-Control-Allow-Origin': '*',
//     Accept: 'application/json, text/plain, */*',
//     'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
//     'Access-Control-Allow-Credentials': true
//   }
// })
const requireComponent = require.context(
  // O caminho relativo da pasta de componentes
  './components/globais',
  // Se deve ou não olhar subpastas
  false,
  // Expressão regular para localizar nomes de componentes base
  /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Pega a configuração do componente
  const componentConfig = requireComponent(fileName)

  // Obtém nome em PascalCase do componente
  const componentName = upperFirst(
    camelCase(
      // Obtém o nome do arquivo, independentemente da profundidade da pasta
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // Registra o componente globalmente
  Vue.component(
    componentName,
    // Olha para as opções em `.default`, existentes
    // se o componente foi exportado com `export default`,
    // caso contrário usa o módulo raiz.
    componentConfig.default || componentConfig
  )
})
