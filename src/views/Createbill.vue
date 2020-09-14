<template>
  <div class="create-bill">
    <form class="record-form" @submit.prevent="createBill">
      <label for="name">Наименование счета</label>
      <input type="text" id="name" v-model="name"/>

      <label for="balance">Начальная сумма счета</label>
      <input type="text" id="balance" v-model.number="balance"/>
      <label for="currency">Валюта счета</label>
      <input type="text" id="currency" v-model="currency"/>
      <label for="icon">Иконка</label>
      <input type="text" id="icon" v-model="icon"/>
      <button class="button">Добавить</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'createbill',
  data: () => ({
    title: 'Создать счет',
    name: '',
    balance: '',
    currency: '',
    icon: ''
  }),
  created() {
    this.$meta.setTitle(this.title)
  },
  methods: {
    async createBill() {
      // if (this.$v.$invalid) {
      //   this.$v.$touth()
      //   return
      // }
      console.log(this.$v)
      const formData = {
        name: this.name,
        balance: this.balance,
        currency: this.currency,
        icon: this.icon,
        date: new Date().toJSON()
      }
      try {
        await this.$store.dispatch('crteateBill', formData)
        this.name = ''
        this.balance = ''
        currency = ''
        icon = ''

      } catch (e) {
        
      }
     
    },

    
  }
};
</script>

<style scoped>
.record-form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 50%;
  padding: 20px 40px;
  border: 1px solid #222429;
  border-radius: 5px;
}
label {
  padding-top: 10px;
  padding-left: 20px;
}
input,
select {
  margin-bottom: 10px;
  padding: 10px 20px;
  border: none;
  background-color: #f1f1f1;
}
.button {
  align-self: center;
}
.create-bill {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 90px);
  /* height: 100%; */
  align-self: stretch;
}
</style>