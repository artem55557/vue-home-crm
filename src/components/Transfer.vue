<template>
  <div class="card card-transfer">
    <form class="transfer" @submit.prevent="onSubmit">
      <div class="input-field">
        <!-- <input type="text"> -->
        <label for="from_account">Списать с</label>
        <select id="from_account" v-model="fromAccount">
          <option v-for="b in bills" :key="b.id" :value="b.id">{{
            b.name
          }} - {{b.balance}}</option>
        </select>
      </div>
      <div class="input-field">
        <!-- <input type="text"> -->
        <label for="to_account">Перевести на</label>
        <select id="to_account" v-model="toAccount">
          <option v-for="b in bills" :key="b.id" :value="b.id">
            {{b.name}} - {{b.balance}}
          </option>
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
    fromAccount: null,
    toAccount: null,
    amount: null,
    bills: null,
  }),
  async mounted() {
    const bills = await this.$store.dispatch('fetchBills')
    this.bills = bills
    this.fromAccount =  this.$route.params.id
  },
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
        date: new Date().toJSON()
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
