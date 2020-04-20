<template>
  <div class="altura-100-centro container">
    <div class="row">
      <div class="col-md-4">
        <div class="d-flex justify-content-center">
          <img :src="require('../assets/Agendamentos.svg')" class="img-fluid" width="350px">
        </div>
        <div class="d-flex justify-content-center">
          <img :src="require('../assets/agendamento.svg')" class="img-fluid" width="350px">
        </div>
      </div>
      <div class="col-md-8">
        <div class="row mx-0 justify-content-between">
          <card class="card1 col-lg-5 col-12 mb-3 mb-lg-0">
            <p>Você atendeu</p>
            <h1>3 vezes esse mês</h1>
          </card>
          <card class="card1 col-lg-5 col-12">
            <div class="d-flex align-items-center h-100">
              <h1>Seja um Herói Ouro!</h1>
            </div>
          </card>
        </div>
        <br>
        <card>
          <template slot="header">
            <p class="headerTable">
            Agendamentos pendentes de confirmação
            </p>
          </template>
          <table class="table table-borderless">
            <tr>
              <td class="tg-hmp39">Paciente</td>
              <td class="tg-hmp39">Horário</td>
              <td class="tg-hmp39">Data</td>
              <td class="tg-hmp39">Ação</td>
            </tr>
            <tr>
              <td class="tg-hmp38">Sr. Amarildo</td>
              <td class="tg-hmp38">17:00h PM</td>
              <td class="tg-hmp38">18/04/2020<br></td>
              <td class="tg-hmp38">
                <input type="image" width="15px" alt="confirm" :src="require('../assets/confirm.svg')">
                <input type="image" width="15px" alt="confirm" :src="require('../assets/cancel.svg')">
              </td>
            </tr>
            <tr>
              <td class="tg-hmp38">Sra. Bruna</td>
              <td class="tg-hmp38"><span style="font-weight:400;font-style:normal">11:00h AM</span><br></td>
              <td class="tg-hmp38"><span style="font-weight:400;font-style:normal">19/04/2020</span></td>
              <td class="tg-hmp38">
                <input type="image" width="15px" alt="confirm" :src="require('../assets/confirm.svg')">
                <input type="image" width="15px" alt="confirm" :src="require('../assets/cancel.svg')">
              </td>
            </tr>
            <tr>
              <td class="tg-hmp38">Sra Renata</td>
              <td class="tg-hmp38">14:00 PM</td>
              <td class="tg-hmp38"><span style="font-weight:400;font-style:normal">21/04/2020</span><br></td>
              <td class="tg-hmp38">
                <input type="image" width="15px" alt="confirm" :src="require('../assets/confirm.svg')">
                <input type="image" width="15px" alt="confirm" :src="require('../assets/cancel.svg')">
              </td>
            </tr>
            <tr>
              <td class="tg-hmp38">Sr Apollo</td>
              <td class="tg-hmp38">16:00 PM</td>
              <td class="tg-hmp38"><span style="font-weight:400;font-style:normal">20/04/2020</span></td>
              <td class="tg-hmp38">
                <input type="image" width="15px" alt="confirm" :src="require('../assets/confirm.svg')">
                <input type="image" width="15px" alt="confirm" :src="require('../assets/cancel.svg')">
              </td>
            </tr>
          </table>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss">
.card1 {
  //position: absolute;
  width: auto;
  height: 132px;
  h1 {
    font-size: 25px;
  }
}

.tg-hmp39{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 22px;
  color: #458AFF;
}

.tg-hmp38{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 112.19%;
  /* or 21px */

  color: #A6A0A0;
}

.headerTable{
  font-family: Nunito;
  font-style: normal;
  font-weight: 900;
  font-size: 27px;
  line-height: 112.19%;
  /* or 30px */

  color: #FFFFFF;
}

</style>
