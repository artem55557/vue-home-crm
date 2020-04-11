<template>
  <div class="card history-item" :class="{isEdit: isEdit}">
    <a href="#" class="history-item-extras-menu" @click.prevent="onClick(record.id)">
      <i>
        <SvgIcon :name="'ellipsis-v'"></SvgIcon>
      </i>
    </a>
    <template v-if="!isEdit">
      <div class="history-item-date">{{record.date | date('datetime')}}</div>
      <div class="history-item-bill"><i></i> {{record.billNameFrom}}</div>
      <div class="history-item-type">
        {{types[record.type]}}
        <i>
          <SvgIcon :name="record.type"></SvgIcon>
        </i>
      </div>
      <div class="history-item-category">{{record.categoryName}}</div>
      <div class="history-item-description">{{record.description}}</div>
      <div class="history-item-amount">{{record.amount | number()}} {{record.currency}}</div>
    </template>
    <template v-else>
      <form class="history-item-edit" @submit.prevent="onSubmit">
        <div class="history-item-date">
          <datepicker v-model="date" :format="format"></datepicker>
          <!-- <input type="text" id="date" v-model="date" /> -->
        </div>
        <div class="history-item-bill" v-if="true">
          <select name id="bill" v-model="fromBill">
            <option v-for="bill in bills" :key="bill.id" :value="bill.id">{{bill.name}} {{bill.currency}}</option>
          </select>
        </div>
        <div class="history-item-bill" v-if="false"><i></i> 
          <select name id="tobill" v-model="toBill">
            <option v-for="bill in bills" :key="bill.id" :value="bill.id">{{bill.name}} {{bill.currency}}</option>
          </select>
        </div>
        <div class="history-item-type">
          <select name id="type" v-model="type">
            <option v-for="type in types" :key="type">{{type}}</option>
          </select>
        </div>
        <div class="history-item-category">
          <select name="category" id="category" v-model="category">
            <option></option>
          </select>
        </div>
        <div class="history-item-description"> <input type="text" id="description" v-model="description"/></div>
        <div class="history-item-amount"> <input type="text" id="amount" v-model.number="amount"/></div>
        <button class="btn"><SvgIcon :name="'check'"></SvgIcon></button>
      </form>
    </template>
  </div>
</template>


<script>
import Datepicker from 'vuejs-datepicker'
export default {
  name: 'HistoryItem',
  props: {
    record:{
      type: Object,
      required: true
    }
  },
  data: () => ({
    bills: [],
    isEdit: false,
    format: 'dd.MM.yyyy',
    date: '',
    fromBill: '',
    toBill: '',
    currency: '',
    category: '',
    amount: '',
    description: '',
    type: '',
    types: {
      income:  'доход',
      outcome: 'расход',
      transfer: 'перевод',
      change: 'обмен'
    }
  }),
  async mounted() {
     this.bills = await this.$store.dispatch('fetchBills')
    // console.log(this.record);
    this.date = new Date(this.record.date)
    this.fromBill = this.record.billIdFrom
    this.toBill = this.record.billIdTo
    // this.currency = this.record
    this.category = this.record.categoryName
    this.amount = this.record.amount
    this.description = this.record.description
    this.type = this.record.type
  },
  methods: {
    onClick(id) {
      this.isEdit = !this.isEdit
      console.log(id);
      const editData = {
        date:this.date,
        fromBill: this.fromBill,
        toBill: this.toBill,
        category: this.category,
        amount: this.amount,
        description: this.description,
        type: this.type
      }

    },
    onSubmit(){
      console.log('Submit');
    }
  },
  components:{
    Datepicker
  }
}
</script>

<style>
.isEdit{
  transition: transform .5s ease;
  /* transform: scale(1.02); */
}
.history-item-edit{
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
}
.history-item-edit input,
.history-item-edit select {
  border: none;
  padding: 0 1rem;
  /* 1px solid #535353; */
  background-color:  #f1f1f1;
  width: 100%;
  outline: none;
  box-sizing: border-box;
  height: 30px;
  transition: all 1s ease;
}
.history-item-edit input:focus{
  border: 1px solid #535353;
  transition: all 1s ease;
}
.history-item-edit > div {
 /* padding: 0.345rem 1rem; */
 /* flex-grow: 1; */
}
.history-item-type{
  border: none;
  padding: 0;
}
.history-item-edit .btn svg{
 height: 20px;
}
.history-item-edit .btn:hover{
  background: #f1f1f1;
  transition: all 0.3s ease;
  fill: #26f00b;
}
.history-item-edit .history-item-date{
  max-width: 160px ;
}
.history-item-edit .btn:hover svg{
  
}
</style>