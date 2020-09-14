<template>
  <div class="card card-transfer">
    <form class="transfer" @submit.prevent="onSubmit">
      <div class="input-field">
        <!-- <input type="text"> -->
        <label for="from_account">Списать с</label>
        <select id="from_account" v-model="fromAccount">
          <template v-if="bills.length">
            <option v-for="b in bills" :key="b.id" :value="b.id">{{
              b.name
            }} - {{b.balance}}</option>
          </template>
        </select>
      </div>
      <div class="input-field">
        <!-- <input type="text"> -->
        <label for="to_account">Перевести на</label>
        <select id="to_account" v-model="toAccount">
          <template v-if="bills.length">
            <option v-for="b in bills" :key="b.id" :value="b.id">
              {{b.name}} - {{b.balance}}
            </option>
          </template>
        </select>
      </div>
      <div class="input-field">
        <label for="amount" >Сумма</label>
        <input type="text" id="amount" v-model.number="amount"/>
      </div>
      <button class="button" type="submit">Перевести</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'transfer',
  data: () => ({
    fromAccount: '',
    toAccount: '',
    amount: null,
    bills: [],
    currency: ''
  }),
  async mounted() {
    const bills = await this.$store.dispatch('fetchBills')
    this.bills = bills
    if(bills.length) {
      this.fromAccount =  this.$route.params.id || bills[0].id
      const indx = bills.findIndex(b => b.id === this.fromAccount)
      this.currency = bills[indx].currency
    }

    // console.log(this.currency);
    // this.currency = 
  },
  // computed: {
  //   billTo() {
  //     const indx = this.bills.findIndex(b => b.id === this.fromAccount)
  //     const currency = this.bills[indx].currency
  //     return this.bills.filter(b => b.currency === currency)
  //   }
  // },
  methods: {
    async onSubmit() {
      const billFrom = await this.$store.dispatch('fetchBillById', this.fromAccount)
      const billTo = await this.$store.dispatch('fetchBillById', this.toAccount)
      
      await this.$store.dispatch('createRecord', {
        billIdFrom: this.fromAccount,
        billIdTo: this.toAccount,
        amount: this.amount,
        type: 'transfer',
        description: `Перевод на счет ${billTo.name}`,
        date: new Date().toJSON(),
        category: ''
      })
      // console.log(recordData);
      const balanceFrom = {balance: billFrom.balance - this.amount}
      const updateBillFrom = {...billFrom, ...balanceFrom}
      // console.log(updateBillFrom);
      await this.$store.dispatch('updateBill', updateBillFrom)

      const balanceTo = {balance: billTo.balance + this.amount}
      const updateBillTo = {...billTo, ...balanceTo}
      // console.log(updateBillTo);
      await this.$store.dispatch('updateBill', updateBillTo)
      this.toAccount = null
      this.amount = null
    }
  }
}
</script>
