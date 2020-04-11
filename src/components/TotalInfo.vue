<template>
  <div class="wrap-card-info">
    <div class="title">Обзор</div>
    <div class="card card-info">
      <div class="card-header">
        {{date | date('date')}}
        <br />
        <span>{{date | date('time')}}</span>
      </div>
      <div class="card-icon">
        <span>
          {{bills.length}}
          <br /> </span
        >Cчета
      </div>
      <div class="card-body">
        <span class="card-title">Текущий балланс:</span>
        <div class="amount rub">
         {{amount | number()}}
          <span>rub</span>
        </div>
        <div class="wrap-currency">
          <div class="amount currency">
            {{amount/currency.EUR | number()}}
            <span>eur</span>
          </div>
          <div class="amount currency">
            {{amount/currency.USD | number()}}
            <span>usd</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TotalInfo',
  props: {
    bills: {
      type: Array,
      required: true
    },
    amount:{
      type: Number,
      required: true
    },
    currency:{
      type: Object,
      required: true
    }
  },
  data: () => ({
    date: new Date(),
    setInterval: null,
  }),
  mounted() {
    this.setInterval = setInterval( () => {
      this.date = new Date()
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.setInterval)
  }
}
</script>