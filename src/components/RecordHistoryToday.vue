<template>
  <div class="history-transfer-today">
    <div class="title">Журнал операций на сегодня</div>
    <div class="card history-item" v-if="loading">
      <p>Идет загрузка данных</p>
    </div>
    <template v-else-if="recordsHistory.length">
      <RecordHistoryItem 
        v-for="record in recordsHistory" 
        :key="record.id" 
        :billName="record.billNameFrom"
        :category="record.categoryName"
        :date="record.date"
        :amount="record.amount"
        :currency="record.currency">
        </RecordHistoryItem>
      </template>
      <div class="card history-item" v-else>
        <p> Операции на сегодня отсутсвуют.</p>
      </div>
  </div>
</template>
<script>
import RecordHistoryItem from '@/components/RecordHistoryItem'
import { mapGetters } from 'vuex'
export default {
  name: 'RecordHistoryToday',
  data: () => ({
    loading: true,
    currentDate: new Date()
  }),
  computed: {
    ...mapGetters(['allRecords']),
    recordsHistory() {
      return this.allRecords.filter(r => r.date >= this.currentDate).slice(0, 10)
    }
    },
  async mounted() {
    this.currentDate.setHours(0,0,0,0)
    this.currentDate = this.currentDate.toJSON()
    this.loading = false
},
  components: {
    RecordHistoryItem
  }
}

</script>
<style scoped>
p{
  padding-left: 2rem;
}
</style>