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
        :balance="bill.balance" 
        :currency="bill.currency" 
        :name="bill.name" 
        :icon="bill.icon" 
        :id="bill.id"
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
export default {
  data: () => ({
    bills: [],
    loading: true
  }),
  components: {
    BillCard
  },
    async mounted() {
      const bills = await this.$store.dispatch('fetchBills')
      this.bills = bills
      this.loading = false
    }
    
}
</script>
