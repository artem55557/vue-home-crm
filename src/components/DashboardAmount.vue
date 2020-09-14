<template>
  <div class="card card-currency-amount">
    <DashboardAmountItem 
      v-for="amountInCurrency in amountInCurrencies"
      :key="amountInCurrency.currency"
      :amountInCurrency="amountInCurrency">
    </DashboardAmountItem>
    
  </div>
</template>
<script>
import DashboardAmountItem from '@/components/DashboardAmountItem'
export default {
  name: 'DashboardAmount',
  props: {
    bills: {
      type: Array,
      required: true
    },
    currency: {
      type: Object,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    amountInCurrencies: []
  }),
  mounted() {
   this.amountInCurrencies = Object.keys(this. currency)
    .map(key => {
      const total = this.currencyAmount(this.bills, key) || 0
      const range = this.currency[key] || 0
      const percent = total*range*100/this.amount || 0
      return {
        currency: key,
        total: total,
        range: range,
        percent: percent,
        diagram: `${percent} ${100 - percent}`
      }
    })
  },
  methods: {
    currencyAmount(bills, currency){
      return bills.reduce((total, b) => {
        if(b.currency === currency) {
          total += +b.balance
        }
        return total
    }, 0)

    }
  },
  components: {
    DashboardAmountItem
  }
}
</script>
