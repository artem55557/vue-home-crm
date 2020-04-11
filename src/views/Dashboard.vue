<template>
  <div class="content">
    <Loader v-if="loading"></Loader>
    <template v-else>
    <div class="content-center" >
      <div class="row">
        <TotalInfo :bills="bills" :amount="amount" :currency="rates"></TotalInfo>
        <div class="wrap-cards-bill">
          <div class="title">
            <div class="h2">Мои счета</div>
            <a href="#">Добавить счет</a>
          </div>
          <div class="cards-bill">
            <DashboardBillCard v-for="bill in bills" :key="bill.id" :bill="bill"></DashboardBillCard>
          </div>
          <div class="row">
            <DashboardAmount :bills="bills" :currency="rates" :amount="amount"></DashboardAmount>
            <Transfer></Transfer>
          </div>
        </div>
      </div>
      <div class="row str">
         <Chart :records='records' class="card-chart"></Chart>
        <div class="card card-currency">
          <div class="card-currency-title">Курсы валют</div>
          <div class="card-currency-item">
            <div class="card-currency-left">
              <div class="row">
                <span class="currencies">usd/rub</span>
                <span class="percent">1.93%</span>
              </div>
              <div class="row">
                <span class="amount">68.0800</span>
                <span class="currency">rub</span>
              </div>
            </div>
            <div class="card-currency-right">
              <img src="/img/_src/path8.png" alt />
            </div>
          </div>
          <div class="card-currency-item">
            <div class="card-currency-left">
              <div class="row">
                <span class="currencies">usd/rub</span>
                <span class="percent">1.93%</span>
              </div>
              <div class="row">
                <span class="amount">68.0800</span>
                <span class="currency">rub</span>
              </div>
            </div>
            <div class="card-currency-right">
              <img src="/img/_src/path8.png" alt />
            </div>
          </div>
          <div class="card-currency-item">
            <div class="card-currency-left">
              <div class="row">
                <span class="currencies">usd/rub</span>
                <span class="percent">1.93%</span>
              </div>
              <div class="row">
                <span class="amount">68.0800</span>
                <span class="currency">rub</span>
              </div>
            </div>
            <div class="card-currency-right">
              <img src="/img/_src/path8.png" alt />
            </div>
          </div>
          <div class="card-currency-item">
            <div class="card-currency-left">
              <div class="row">
                <span class="currencies">usd/rub</span>
                <span class="percent">1.93%</span>
              </div>
              <div class="row">
                <span class="amount">68.0800</span>
                <span class="currency">rub</span>
              </div>
            </div>
            <div class="card-currency-right">
              <img src="/img/_src/path8.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-right">
      <div class="card card-history">
        <div class="card-history-header">
          <div class="card-history-title">История</div>
          <HistoryFilters @type="filtersOfType"></HistoryFilters>
          <div class="filteres">
            <a class="active" href="#">Все</a>
            <a href="#">Расход</a>
            <a href="#">Доход</a>
            <a href="#">Перевод</a>
          </div>
        </div>
        <CardHistoryItem v-for="record in recordsHistoryFiltred" :key="record.id" :record="record"></CardHistoryItem>
        
      </div>
    </div>
    </template>
  </div>
</template>

<script>
import TotalInfo from '@/components/TotalInfo'
import DashboardBillCard from '@/components/DashboardBillCard'
import Transfer from '@/components/Transfer'
import HistoryFilters from '@/components/HistoryFilters'
import CardHistoryItem from '@/components/CardHistoryItem'
import DashboardAmount from '@/components/DashboardAmount'
import Chart from '@/components/Chart'
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data: () => ({
    loading: true,
    bills: [],
    records: [],
    recordsHistoryFiltred: [],
    amount: 0,
    rates: {RUB: 0, USD: 0, EUR: 0},
  }),
  async mounted(){
    this.bills = await this.$store.dispatch('fetchBills')
    this.records = this.allRecords.sort((prev, next) => new Date(prev.date) - new Date(next.date))
    const currency = await this.$store.dispatch('fectchCurrency')
    Object.keys(currency.rates).map(key => {
      this.rates[key] = currency.rates.RUB/currency.rates[key]
    })
    this.recordsHistoryFiltred = this.records.slice(0, 10)
    this.amount = this.bills.reduce((total, b) => {
      if(b.currency === 'RUB'){
        total += +b.balance
      }
      if(b.currency === 'USD'){
        total += +b.balance*this.rates.USD
      }
      return total
    }, 0)
    this.loading = false
  },
  computed: mapGetters(['allRecords']),
  methods: {
    filtersOfType(type) {
      this.recordsHistoryFiltred = this.records.filter(r => r.type === type).reverse().slice(0, 10)
      if(type === 'all'){
        this.recordsHistoryFiltred = this.records.slice(0, 10)
      }
    }
  },
  components: {
    TotalInfo, DashboardBillCard, Transfer, HistoryFilters, CardHistoryItem, DashboardAmount, Chart
  }
}

</script>