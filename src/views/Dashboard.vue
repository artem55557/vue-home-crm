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
          <div class="cards-bill" v-swiper:billSwiper="swiperOption">
            <div class="swiper-wrapper">
              <DashboardBillCard v-for="bill in bills" :key="bill.id" :bill="bill" class="swiper-slide"></DashboardBillCard>
            </div>
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
          <DashboardCurrencyItem v-for="rates in currencyRates" 
            :key="rates.currency" 
            :currency="rates"
            :currencyYesterday="ratesYesterday"
          >
          </DashboardCurrencyItem>
         
        </div>
      </div>
    </div>
    <div class="content-right">
      <div class="card card-history">
        <div class="card-history-header">
          <div class="card-history-title">История</div>
          <HistoryFilters @type="filtersOfType"></HistoryFilters>
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
import DashboardCurrencyItem from '@/components/DashboardCurrencyItem'
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
    ratesYesterday:[],
    currencyRates:[],
    swiperOption:{
      spaceBetween: 10,
      slidesPerView: "auto",
      grabCursor: true
    }
  }),
  async mounted(){
    this.bills = await this.$store.dispatch('fetchBills')
    this.records = this.allRecords.sort((prev, next) => new Date(prev.date) - new Date(next.date))
    const currency = await this.$store.dispatch('fetchCurrency')
    this.currencyRates = this.currencyRatesTransform(currency.rates, 'RUB')

    Object.keys(currency.rates).map(key => {
      const base = 'RUB'
      const rates = currency.rates[base]/currency.rates[key]
      this.rates[key] = rates
    })

    const date = new Date()
    date.setDate(date.getDate() - 1)
    const yesterday = date.toJSON().split('T')[0]
    const currencyYesterday = await this.$store.dispatch('fetchCurrency', yesterday)
    this.ratesYesterday = this.currencyRatesTransform(currencyYesterday.rates, 'RUB')

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
    },

    currencyRatesTransform(obj, base) {
      const currencyRates = []
      Object.keys(obj).map(key => {
        const rates = obj[base]/obj[key]
        if(key !== base) {
          currencyRates.push({base: base, currency: key, rates: rates})
        }
      })
      return currencyRates
    }
  },
  components: {
    TotalInfo, DashboardBillCard, Transfer, HistoryFilters, CardHistoryItem, DashboardAmount, Chart, DashboardCurrencyItem
  }
}

</script>
<style>
.content-center .wrap-cards-bill{
  padding: 0 10px;
}
.content-center .wrap-cards-bill .card-currency-amount {
  margin-left: 0;
}
.content-center .wrap-cards-bill .card-transfer {
  margin-right: 0;
}
.card-currency {
  flex-direction: column;
  justify-content: flex-start;
}
</style>