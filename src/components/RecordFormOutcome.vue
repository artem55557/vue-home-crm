<template>
  <div class="record-body">
    <form class="record-form" @submit.prevent="onSubmit(type)">
      <label for="date">Дата операции</label>
      <datepicker v-model="date" :format="format"></datepicker>
      <!-- <input type="text" id="date" v-model="date" /> -->
      <template v-if="type != 'income'">
        <label for="bill">Счет списания</label>
        <select name id="bill" v-model="fromBill">
          <option v-for="bill in bills" :key="bill.id" :value="bill.id">{{bill.name}} {{bill.currency}}</option>
        </select>
      </template>
      <template v-if="type != 'outcome'">
        <label for="tobill">Счет зачисления</label>
        <select name id="tobill" v-model="toBill">
          <option v-for="bill in bills" :key="bill.id" :value="bill.id">{{bill.name}} {{bill.currency}}</option>
        </select>
      </template>
      <template v-if="type === 'income' || type === 'outcome'">
        <label for="category">Категория</label>
        <select name="category" id="category" v-model="category">
          <option v-for="cat in categoriesByType" :key="cat.id" :value="cat.id">{{cat.title}}</option>
        </select>
      </template>
      <template v-if="type === 'change'">
        <label for="rates">Курс валюты</label>
        <input type="text" id="rates" v-model.number="rates"/>
      </template>
      <label for="amount">Сумма</label>
      <input type="text" id="amount" v-model.number="amount"/>
      <label for="description">Описание</label>
      <input type="text" id="description" v-model="description"/>
      <button class="button">Добавить</button>
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
export default {
  name: 'RecordFormOutome',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data: () => ({
    format: 'dd.MM.yyyy',
    date: new Date(),
    fromBill: '',
    toBill: '',
    currency: '',
    rates: 0,
    category: '',
    amount: '',
    description: '',
    categories: [],
    bills: [],
  }),
  async mounted(){
    this.categories = await this.$store.dispatch('fetchCategory')
    this.bills = await this.$store.dispatch('fetchBills')
  },
  computed: {
    categoriesByType() {
      return this.categories.filter(c => c.type === this.type)
    }
  },
  methods: {
    async onSubmit(type) {
      const recordData = {
        date: this.date.toJSON(),
        billIdFrom: this.fromBill,
        billIdTo: this.toBill,
        category: this.category,
        amount: this.amount,
        description: this.description,
        type: this.type
      }

      try {
        const createRecord = await this.$store.dispatch('createRecord',recordData)
        const idRecord = createRecord.key
        const fromBill = await this.$store.dispatch('fetchBillById', this.fromBill)
        const toBill = await this.$store.dispatch('fetchBillById', this.toBill)
        const categoryName = this.category === '' ? '' : this.categories.filter(c => c.id === this.category)[0].title
        if(this.type === 'outcome') {
          this.updateBill(fromBill, {balance: +fromBill.balance - this.amount})
        }
        if(this.type === 'income') {
          this.updateBill(toBill, {balance: +toBill.balance + this.amount})
        }
        if(this.type === 'transfer') {
          this.updateBill(toBill, {balance: +toBill.balance + this.amount})
          this.updateBill(fromBill, {balance: fromBill.balance - this.amount})
        }
        if(this.type === 'change') {
           this.updateBill(toBill, {balance: +toBill.balance + this.amount/this.rates})
           this.updateBill(fromBill, {balance: fromBill.balance - this.amount})
        }
        this.$store.commit('createRecord', {
          ...recordData,
          id: idRecord,
          categoryName: categoryName,
          billNameFrom: this.type === 'income' ? '' : fromBill.name,
          billNameTo: this.type === 'outcome' ? '' : toBill.name,
          currency: fromBill.currency,
        })
        this.description = ''
        this. amount = ''
        this.$message.success('Данные упешно добавлены')
      } catch (e) {
        throw e
      }
      
    },
    async updateBill(bill, balance) {
      const updateBill = {...bill, ...balance}
      await this.$store.dispatch('updateBill', updateBill)
    }
  },
  components: {
    Datepicker
  }
}
</script>