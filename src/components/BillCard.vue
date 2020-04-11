<template>
  <a href="#" class="card card-bill" @click.prevent="$router.push('bill/' + bill.id)">
    <div class="row">
      <div class="title">
        <i>
          <SvgIcon :name="bill.icon" />
        </i>
        {{ bill.name }}
      </div>
      <div class="amount">
        {{ bill.balance | number()}}
        <span class="currency">{{ bill.currency }}</span>
      </div>
    </div>
    <div class="row">
      <div class="card-bill-chart">
        <!-- <img src="/img/_src/chart.png" alt /> -->
        <canvas ref='canvas' style="height: 150"></canvas>
      </div>
    </div>
    <div class="row">
      <div class="card bill-info">
        <div class="info-title">{{currentMonth | date('monthyear')}}</div>
        <div class="income">
          Доход:
          <span class="info-amount">{{bill.summIncome | number()}} {{bill.currency}}</span>
        </div>
        <div class="outcome">
          Расход:
          <span class="info-amount">{{bill.summOutcome | number()}} {{bill.currency}}</span>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
import {Line} from 'vue-chartjs'
export default {
  name: "BillCard",
  extends: Line,
  props: {
    bill: {
      type: Object,
      required: true
    },
    currentMonth: {
      required: true
    }
  },
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      title: {
        display: false
      },
      // scale: {
      //   gridLines: {
      //     display: false
      //   },
      //   scaleLabel: {
      //     display: false
      //   }
      // },
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
    const labels = [...new Set(this.bill.chartData.labels)]
    const chartData = {
      labels: labels,
      datasets:[{
        label: '',
        data: labels.map(l => {
          return this.bill.chartData.data.reduce((acc, item) => {
            if(item.date === l) {
              acc += item.amount
            }
            return acc
          }, 0)
        }),
        fill: false,
        borderColor: 'rgba(42, 43, 49, .8)',
        lineTension: 0,
        pointRadius: 0
      }],
    }
    this.renderChart(chartData, this.options)
  }
};
</script>

<style>
.bills-content .card-bill-chart {
  position: relative;
  height: 150px;
  padding: 0.5rem 4rem;
}
</style>
