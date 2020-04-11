<template>
  <div class="content">
    <Loader v-if="loading"></Loader>
    <template v-else>
      <div class="bill-content-center">
        <div class="bill-header">
          <a href="#" class="back" @click.prevent="$router.go(-1)">
            <i>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="chevron-left"
                class="svg-inline--fa fa-chevron-left fa-w-10"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                />
              </svg>
            </i>Назад
          </a>
          <div class="bill dropdown">
            {{bill.name}} {{bill.currency}}
            <div class="bill-icon"><i><SvgIcon :name="bill.icon" /></i></div>
          </div>
        </div>
        <div class="card bill-total-balace">
          <div class="title">Баланс:</div>
          <div class="total-amount">
            {{bill.balance | number()}}
            <span>rub</span>
          </div>
          <button class="button outcome">Расход</button>
          <button class="button income">Доход</button>
        </div>
        <Transfer></Transfer>
        <div class="card card-history">
          <div class="card-history-header">
            <div class="card-history-title">История</div>
            <HistoryFilters @type="filtersOfType"></HistoryFilters>
          </div>
          <CardHistoryItem v-for="record in recordsHisoryFiltred" :key="record.id" :record="record"></CardHistoryItem>
          <button class="button" @click="counter">Показать еще</button>
        </div>
      </div>
      <div class="bill-content-right">
        <div class="bill-header">
          <router-link to="/createbill">Добавить счет</router-link>
        </div>
        <Chart :records='records'></Chart>
      </div>
    </template>
  </div>
</template>

<script>
import Transfer from '@/components/Transfer'
import HistoryFilters from '@/components/HistoryFilters'
import CardHistoryItem from '@/components/CardHistoryItem'
import Chart from '@/components/Chart'
import { mapGetters } from 'vuex'
export default {
  name: 'Bill',
  data: () => ({
    bill: null,
    records: [],
    recordsHistory:[],
    recordsHisoryFiltred: [],
    type: 'all',
    firstIndex: 0,
    lastIndex: 4,
    loading: true
  }),
  async mounted() {
    const id = this.$route.params.id
    const bill = await this.$store.dispatch('fetchBillById', id)
    this. bill = bill
    this.records = this.allRecords.filter(r => r.billIdFrom === this.bill.id)
      .sort((prev, next) => new Date(prev.date) - new Date(next.date))
    this.recordsHistory = [...this.records].reverse()
    this.recordsHisoryFiltred = this.recordsHistory.slice(this.firstIndex, this.lastIndex)
    this.loading = false
  },
  computed: mapGetters(['allRecords']),
  methods: {
    filtersOfType(type) {
      this.type = type
      this.recordsHisoryFiltred = this.recordsHistory.filter(r => r.type === type).slice(this.firstIndex, this.lastIndex)
      if(type === 'all'){
        this.recordsHisoryFiltred = this.recordsHistory.slice(this.firstIndex, this.lastIndex)
      }
    },
    counter() {
      this.firstIndex++
      this.lastIndex++
      this.filtersOfType(this.type)
    }
  },
  components: {
    Transfer, HistoryFilters, CardHistoryItem, Chart
  }
}
</script>

<style>
.dropdown {
  display: flex;
  align-items: center;
}

.bill-icon {
  padding-left: 1rem;
}
</style>