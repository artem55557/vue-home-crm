<template>
  <div class="card chart">
    <div class="chart-header">
      <span class="title"></span>
      <ChartFilters @date="setDateFrom"></ChartFilters>
      <div class="datepicker">
        <label for="date-from">С</label>
        <datepicker v-model="dateFrom" :format="format" :language="ru"></datepicker>
        <label for="date-to">По</label>
        <datepicker v-model="dateTo" :format="format" :language="ru"></datepicker>
      </div>
    </div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import {ru, en} from 'vuejs-datepicker/dist/locale'
import ChartFilters from '@/components/ChartFilters'
import { Line } from 'vue-chartjs'
import dateFilter from '@/filters/date.filter'
export default {
  name: 'Chart',
  extends: Line,
  props: {
    records: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    dateFrom: new Date(),
    dateTo: new Date(),
    format: 'dd.MM.yyyy',
    ru,
    options: {
      legend: {
        display: false
      }
    }
  }),
  mounted() {
    const currentMonth = this.dateFrom.getMonth()
    this.dateFrom.setMonth(currentMonth-1)
    this.renderChart((this.chartData(this.recordsFiltred)), this.options)
    this.$watch('recordsFiltred', function(){
      this.renderChart((this.chartData(this.recordsFiltred)), this.options)
    })
  },
  computed: {
    recordsFiltred(){
      return this.records.filter(i => i.date >= this.dateFrom.toJSON() && i.date <= this.dateTo.toJSON() && i.type === 'outcome')
    },
  },
  
  methods: {
    setDateFrom(date) {
      this.dateFrom = date
      // this.renderChart((this.chartData(this.recordsFiltred)))
    },

    chartData(array) {
      const labels = [... new Set(array.map(r => dateFilter(r.date, 'date')))]
       return { 
        labels: labels,
        datasets:[{
          label: '',
          data: labels.map(r => {
              return array.reduce((total, t) =>{
                if(dateFilter(t.date) === r){
                  total += t.amount
                }
                return total
              }, 0)
            }),
          fill: false,
          borderColor: 'rgba(42, 43, 49, .8)',
          lineTension: 0
        }]
       }
    }
  },
  components: {
    Datepicker, ChartFilters
  }
  
}
</script>

<style scoped>
.vdp-datepicker__calendar{
  left: -232%;
}
</style>
