<template>
  <div class="altura-100-centro container">
    <div class="row">
      <div class="col-md-4">
        <card>
          <template slot="header">
            <h2 class="text-center mt-2 text-white"><strong>Seus Agendamentos</strong></h2>
          </template>
          <div class="d-flex justify-content-center">
            <datepicker inline @selected="modalShow" :language="ptBR"></datepicker>
          </div>
        </card>
      </div>
      <div class="modal fade" id="modalAgendamento" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h1 style="font-size: 25px">{{ mostrarLista ? 'Esses são os psicólogos disponíveis' : selecionado.nome }}</h1>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div v-if="mostrarLista" class="modal-body p-0 partfive">
              <div>
                <div class="row rank-usuario rank-usuario-cor-nao" @click="selecionarRank(rank[0])">
                  <div class="col-4"><img class="img-rank" :src="require('../assets/perfil1.svg')"></div>
                  <div class="col-8 rank-descricao">
                    <h2>Bete Santos</h2>
                    <h4>Herói Diamante <span class="icon-diamante"></span></h4>
                    <div class="icones1">
                      <img :src="require('../assets/amizade.svg')">
                      <img :src="require('../assets/bate-papo.svg')">
                      <img :src="require('../assets/amigo.svg')">
                    </div>
                  </div>
                </div>
                <div class="row rank-usuario rank-usuario-cor-sim" @click="selecionarRank(rank[2])">
                  <div class="col-4"><img class="img-rank" :src="require('../assets/perfil2.svg')"></div>
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
                <div class="row rank-usuario rank-usuario-cor-nao" @click="selecionarRank(rank[1])">
                  <div class="col-4"><img class="img-rank" :src="require('../assets/perfil3.svg')"></div>
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
                <div class="row rank-usuario rank-usuario-cor-sim">
                  <div class="col-4"><img class="img-rank" :src="require('../assets/perfil4.svg')"></div>
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
            <div v-if="!mostrarLista" class="modal-body p-4 partfive">
              <div>
                <div class="rank-selecionado">
                  <div class="img-rank-usuario">
                    <img class="img-rank-selecionado" :src="selecionado.imagem">
                    <h4>Herói Platina <span class="icon-platina"></span></h4>
                  </div>
                  <div class="icones2">
                    <img :src="require('../assets/1.svg')">
                    <img :src="require('../assets/2.svg')">
                    <img :src="require('../assets/3.svg')">
                  </div>
                  <div class="text-center">
                    {{selecionado.descricao}}
                  </div>
                </div>
                <div>
                  <h2 class="text-center mt-4">Selecione um horário disponível</h2>
                  <v-select :options="options"></v-select>
                </div>
                <div class="d-flex justify-content-center my-3">
                  <button @click="voltar" class="psi-btn mb-4 pl-2">
                    <span>&#60;</span>
                    <p>Voltar</p>
                  </button>
                  <button @click="agendar" class="psi-btn mb-4 pr-2">
                    <p>Agendar</p>
                    <span>></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <img :src="require('../assets/ultimo_atendimento.svg')" class="img-fluid" width="500px" >
      </div>
      <div class="col-md-4">
        <img :src="require('../assets/atendimentos_no_mes.svg')" class="img-fluid" width="500px" >
      </div>
    </div>
  </div>
</template>

<script>
import { ptBR } from 'vuejs-datepicker/dist/locale'
export default {
  name: 'DashboardPaciente',
  data () {
    return {
      ptBR: ptBR,
      options: [
        '10:00',
        '11:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00'
      ],
      mostrarLista: true,
      rank: [
        {
          descricao: 'Bete está no ramo da psicologia há 3 anos. Possui uma clínica de atendimento com especialização em transtornos de ansiedade.',
          imagem: require('../assets/bete.svg'),
          nome: 'Bete Santos'
        },
        {
          descricao: 'Psicóloga Clínica especializada em Terapia Cognitivo Comportamental. Atuação como psicoterapeuta em todas as faixas etárias em consultório particular e em rede pública.  Órgão: Semsa',
          imagem: require('../assets/perfil3.svg'),
          nome: 'Amanda Louise'
        },
        {
          descricao: 'Sou psicólogo e mestrando em Psicologia da Saúde. Tenho 5 anos de experiência profissional em Saúde, formação de docentes e Psicologia Clínica.  Órgão: Susam',
          imagem: require('../assets/perfil2.svg'),
          nome: 'Roberta Miranda'
        }
      ],
      selecionado: {
        descricao: 'Bete está no ramo da psicologia há 3 anos. Possui uma clínica de atendimento com especialização em transtornos de ansiedade.',
        imagem: require('../assets/bete.svg'),
        nome: 'Bete Santos'
      }
    }
  },
  methods: {
    agendar () {
      this.$toast.success('Seu agendamento foi feito com sucess', 'Sucesso!', this.$root.toastConfig.success)
      $('#modalAgendamento').modal('hide')
    },
    voltar () {
      this.mostrarLista = true
    },
    selecionarRank (value) {
      this.selecionado = value
      this.mostrarLista = false
    },
    modalShow (e) {
      $('#modalAgendamento').modal('show')
      this.mostrarLista = true
      console.log(e)
    }
  }
}
</script>
<style lang="scss">
.partfive{
  padding-top: 20px;
  padding-bottom: 30px;
  .row {
    margin: 0;
  }
  .img-rank {
    max-width: 112px;
    max-height: 119px;
    border-radius: 40px;
  }
  .img-rank-selecionado {
    width: 207px;
    height: 219px;
  }
  div{
    h1{
      text-align: center;
    }
    .rank-usuario:hover {
      opacity: 50%;
    }
    .rank-usuario-cor-sim {
      background-color: #E2ECFF;
    }
    .rank-usuario-cor-nao {
      background-color: #e5e5e5;
    }
    .rank-usuario{
      padding: 0 15px;
      transition-duration: .3s;
      cursor: pointer;
      padding-top: 10px;
      padding-bottom: 10px;
      h4{
        font-size: 15px;
      }
      .icones1{
        img{
          margin-left: 2px;
          margin-right: 2px;
        }
      }
    }
    .icon-diamante{
      display: inline-block;
      width: 15px;
      height: 15px;
      background-image: url('../assets/diamante.svg');
      background-size: 15px 15px;
    }
    .icon-platina{
      display: inline-block;
      width: 15px;
      height: 15px;
      background-image: url('../assets/platina.svg');
      background-size: 15px 15px;
    }
    .rank-selecionado{
      text-align: center;
    }
  }
}
</style>
<style lang="scss">
.vdp-datepicker .vdp-datepicker__calendar {
  box-shadow: none !important;
}
.rtl {
  direction: rtl;
}
.vdp-datepicker {
  width: 100%;
  position: relative;
  text-align: left;
}
.vdp-datepicker * {
  box-sizing: border-box;
}
.vdp-datepicker input {
  border: none;
}

.vdp-datepicker__calendar {
  position: absolute;
  z-index: 100;
  background: #fff;
  width: 300px;
  border: 1px solid #ccc;
}
.vdp-datepicker__calendar header {
  display: block;
  line-height: 40px;
}
.vdp-datepicker__calendar header span {
  display: inline-block;
  text-align: center;
  width: 71.42857142857143%;
  float: left;
}
.vdp-datepicker__calendar header .prev,
.vdp-datepicker__calendar header .next {
  width: 14.285714285714286%;
  float: left;
  text-indent: -10000px;
  position: relative;
}
.vdp-datepicker__calendar header .prev:after,
.vdp-datepicker__calendar header .next:after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  border: 6px solid transparent;
}
.vdp-datepicker__calendar header .prev:after {
  border-right: 10px solid #000;
  margin-left: -5px;
}
.vdp-datepicker__calendar header .prev.disabled:after {
  border-right: 10px solid #ddd;
}
.vdp-datepicker__calendar header .next:after {
  border-left: 10px solid #000;
  margin-left: 5px;
}
.vdp-datepicker__calendar header .next.disabled:after {
  border-left: 10px solid #ddd;
}
.vdp-datepicker__calendar header .prev:not(.disabled),
.vdp-datepicker__calendar header .next:not(.disabled),
.vdp-datepicker__calendar header .up:not(.disabled) {
  cursor: pointer;
}
.vdp-datepicker__calendar header .prev:not(.disabled):hover,
.vdp-datepicker__calendar header .next:not(.disabled):hover,
.vdp-datepicker__calendar header .up:not(.disabled):hover {
  background: #eee;
}
.vdp-datepicker__calendar .disabled {
  color: #ddd;
  cursor: default;
}
.vdp-datepicker__calendar .flex-rtl {
  display: flex;
  width: inherit;
  flex-wrap: wrap;
}
.vdp-datepicker__calendar .cell {
  display: inline-block;
  padding: 0 5px;
  width: 14.285714285714286%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
}
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day,
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month,
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year {
  cursor: pointer;
}
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {
  border: 1px solid #4bd;
}
.vdp-datepicker__calendar .cell.selected {
  background: #4bd;
}
.vdp-datepicker__calendar .cell.selected:hover {
  background: #4bd;
}
.vdp-datepicker__calendar .cell.selected.highlighted {
  background: #4bd;
}
.vdp-datepicker__calendar .cell.highlighted {
  background: #cae5ed;
}
.vdp-datepicker__calendar .cell.highlighted.disabled {
  color: #a3a3a3;
}
.vdp-datepicker__calendar .cell.grey {
  color: #888;
}
.vdp-datepicker__calendar .cell.grey:hover {
  background: inherit;
}
.vdp-datepicker__calendar .cell.day-header {
  font-size: 75%;
  white-space: nowrap;
  cursor: inherit;
}
.vdp-datepicker__calendar .cell.day-header:hover {
  background: inherit;
}
.vdp-datepicker__calendar .month,
.vdp-datepicker__calendar .year {
  width: 33.333%;
}
.vdp-datepicker__clear-button,
.vdp-datepicker__calendar-button {
  cursor: pointer;
  font-style: normal;
}
.vdp-datepicker__clear-button.disabled,
.vdp-datepicker__calendar-button.disabled {
  color: #999;
  cursor: default;
}

/* Vue Datepicker */
.vdp-datepicker input[readonly] {
  opacity: 1;
}
.vdp-datepicker .vdp-datepicker__calendar {
  border: none;
  box-shadow: 0 5px 30px 0 rgba(0,0,0,.25);
  padding: 5px;
  border-radius: 6px;
}
.vdp-datepicker.inline .vdp-datepicker__calendar {
  box-shadow: none;
  padding: 0;
  min-width: 300px;
  width: 100%;
}
.vdp-datepicker__calendar .cell.day-header,
.vdp-datepicker__calendar header span {
  font-size: 12px;
  font-weight: 700;
  color: #2d353c;
}
.vdp-datepicker__calendar header span {
  font-size: 16px;
}
.vdp-datepicker__calendar .cell {
  height: 32px;
  line-height: 32px;
  color: #2d353c;
  border: none;
}
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {
  border: none;
  border-radius: 4px;
  background: #eee;
  color: #2d353c;
}
.vdp-datepicker__calendar .cell.selected {
  border: none;
  background: #348fe2 !important;
  color: #fff !important;
  border-radius: 4px;
}
body .vdp-datepicker__calendar .cell.day-header {
  font-size: 12px;
  height: 30px;
}
body .vdp-datepicker__calendar .cell {
  height: 30px;
  line-height: 30px;
  border: none !important;
  font-weight: 600;
  color: #6f8293;
}
body .vdp-datepicker__calendar .month,
body .vdp-datepicker__calendar .year {
  height: 54px;
  line-height: 54px;
}
body .vdp-datepicker__calendar .cell.day:not(.blank):not(.disabled):hover,
body .vdp-datepicker__calendar .cell.day:not(.blank):not(.disabled):focus,
body .vdp-datepicker__calendar .cell.month:not(.blank):not(.disabled):hover,
body .vdp-datepicker__calendar .cell.month:not(.blank):not(.disabled):focus,
body .vdp-datepicker__calendar .cell.year:not(.blank):not(.disabled):hover,
body .vdp-datepicker__calendar .cell.year:not(.blank):not(.disabled):focus  {
  background: #f2f4f5;
  text-shadow: none;
}
body .vdp-datepicker__calendar header {
  line-height: 30px;
}

body .vdp-datepicker__calendar header span {
  font-size: 12px;
  border-radius: 4px;
}
body .vdp-datepicker__calendar header span:not(.disabled):hover,
body .vdp-datepicker__calendar header span:not(.disabled):focus {
  background: #f2f4f5 !important;
  text-shadow: none;
}
body .vdp-datepicker__calendar header span.next:after,
body .vdp-datepicker__calendar header span.prev:after {
  content: '\f054';
  transform: none;
  border: none;
  font-family: Font Awesome\ 5 Free,Font Awesome\ 5 Pro,FontAwesome!important;
  font-weight: 900;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  text-indent: 0;
  top: 0;
  left: 0;
  right: 0;
}
body .vdp-datepicker__calendar header span.prev:after {
  content: '\f053';
}
</style>
