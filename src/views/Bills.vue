<template>
  <div class="bills-content">
    <Loader v-if="loading"></Loader>
    <div class="wrap" v-else>
      <div class="bills-content-header">
        <div class="overwiev">
          Обзор
          <i>
            <SvgIcon :name="'ellipsis-v'"/>
          </i>
        </div>
        <div class="view-icons">
          <i>
            <SvgIcon :name="'list'" />
          </i>
          <i class="active">
            <SvgIcon :name="'grid'" />
          </i>
        </div>
      </div>
      <BillCard 
        v-for="bill in bills" 
        :key="bill.id"
        :bill="bill"
        :currentMonth="currentMonth"
      />
      <router-link to="/createbill" class="card-add">
        <i>+</i>
        <span>Добавить счет</span>
      </router-link>
    </div>
  </div>
</template>


<script>
import BillCard from '../components/BillCard'
import dateFilter from '@/filters/date.filter'
export default {
  data: () => ({
    bills: [],
    loading: true,
    recordsCurrentMonth: [],
    currentMonth: new Date()
  }),
  components: {
    BillCard
  },
    async mounted() {
      const bills = await this.$store.dispatch('fetchBills')
      this.currentMonth.setDate(1)
      const records = await this.$store.dispatch('fetchRecord')
      const recordsCurrentMonth = records.filter(r => r.date >= this.currentMonth.toJSON())
      this.bills = bills.map(b => {
        const chartData = {
          labels: [],
          data: []
        } 
        const summOutcome = recordsCurrentMonth.reduce((total, r) => {
          if(b.id === r.billIdFrom) {
            total += +r.amount
            chartData.labels.push(dateFilter(r.date, 'date'))
            chartData.data.push({amount: r.amount, date: dateFilter(r.date, 'date')})
          }
          return total
        }, 0)
        const summIncome = recordsCurrentMonth.reduce((total, r) => {
          if(b.id === r.billIdTo) {
            total += +r.amount
          }
          return total
        }, 0)
        return {...b, summOutcome, summIncome, chartData}
      })
      this.loading = false
    }
    
}
</script>
