<template>
  <div class="card-currency-item">
    <div class="card-currency-left">
      <div class="row">
        <span class="currencies">{{currency.currency}}/{{currency.base}}</span>
        <span class="percent">{{percent | number()}}%</span>
      </div>
      <div class="row">
        <span class="amount">{{currency.rates | number()}}</span>
        <span class="currency">{{currency.base}}</span>
      </div>
    </div>
    <div class="card-currency-right">
      <!-- <img src="/img/_src/path8.png" alt /> -->
      <canvas ref='canvas'></canvas>
    </div>
  </div>
</template>
<script>
import {Line} from 'vue-chartjs'
export default {
  name: "CurrencyItem",
  extends: Line,
  props: {
    currency: {
      type: Object,
      required:true
    },
    currencyYesterday:{
      type: Array,
      required: true
    }
  },
  data: () => ({
    percent: 0,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      title: {
        display: false
      },
      scales: {
        xAxes: [ {
          ticks: {
            display: false
          },
          gridLines: {
            display: false
          },
        } ],
        yAxes: [ {
          ticks: {
            display: false
          },
          gridLines: {
            display: false
          },
        } ]
      }
    },
  }),
  mounted() {
    const currencyYesterday = this.currencyYesterday.find(c => c.currency === this.currency.currency).rates
    this.percent =( this.currency.rates - currencyYesterday)*100/currencyYesterday

    const chartData = {
      labels: [1, 2, 3, 4, 5, 6, 7],
      datasets:[{
        label: '',
        data: [73.0, 74.81, 74.15, 73.99, 75.55, 77.08, 75.9],
        fill: false,
        borderColor: 'rgba(42, 43, 49, .8)',
        lineTension: 0,
        pointRadius: 0
      }],
    }
    this.renderChart(chartData, this.options)
  }
}
</script>

<style>
.card-currency-right{
  position: relative;
  height: 40px;
  max-width: 100px;
  padding-right: 20px;
}
</style>