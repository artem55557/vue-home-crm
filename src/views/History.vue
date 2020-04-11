<template>
  <div class="history-content">
    <div class="wrap">
      <div class="history-content-header">
        <div class="overwiev">
          Обзор
          <i>
            <SvgIcon :name="'ellipsis-v'"></SvgIcon>
           
          </i>
        </div>
        <button type="button" class="btn">Экспорт истории</button>
        <div class="str datepicker">
          <label for="date-from">С</label>
          <datepicker v-model="dateFrom" :format="format" :language="ru"></datepicker>
          <!-- <input type="text" id="date-from" value="13.10.2019" /> -->
          <label for="date-to">По</label>
          <datepicker v-model="dateTo" :format="format" :language="ru"></datepicker>
          <!-- <input type="text" id="date-to" value="13.11.2019" /> -->
        </div>
        <div class="view-icons">
          <i class="active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="17"
              height="13"
              viewBox="0 0 17 13"
            >
              <defs>
                <clipPath id="clip-path">
                  <path
                    id="Mask"
                    d="M17,13H0V7H17v6Zm0-7H0V0H17V6Z"
                    transform="translate(4437 -3881)"
                  />
                </clipPath>
              </defs>
              <g id="Group_123" data-name="Group 123" transform="translate(-4437 3881)">
                <path
                  id="Mask-2"
                  data-name="Mask"
                  d="M17,13H0V7H17v6Zm0-7H0V0H17V6Z"
                  transform="translate(4437 -3881)"
                />
              </g>
            </svg>
          </i>
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="17"
              height="13"
              viewBox="0 0 17 13"
            >
              <defs>
                <clipPath id="clip-path">
                  <path
                    id="Mask"
                    d="M17,13H12V7h5v6Zm-6,0H6V7h5v6ZM5,13H0V7H5v6ZM17,6H12V0h5V6ZM11,6H6V0h5V6ZM5,6H0V0H5V6Z"
                    transform="translate(4462 -3881)"
                  />
                </clipPath>
              </defs>
              <g id="Group_122" data-name="Group 122" transform="translate(-4462 3881)">
                <path
                  id="Mask-2"
                  data-name="Mask"
                  d="M17,13H12V7h5v6Zm-6,0H6V7h5v6ZM5,13H0V7H5v6ZM17,6H12V0h5V6ZM11,6H6V0h5V6ZM5,6H0V0H5V6Z"
                  transform="translate(4462 -3881)"
                />
              </g>
            </svg>
          </i>
        </div>
      </div>
      <HistoryFilters @type="filtersOfType"></HistoryFilters>
      <HistoryItem 
        v-for="record in recordsOfMonth"
        :key="record.id"
        :record="record"
        ></HistoryItem>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import {ru, en} from 'vuejs-datepicker/dist/locale'
import HistoryItem from '@/components/HistoryItem'
import HistoryFilters from '@/components/HistoryFilters'
import { mapGetters } from 'vuex'
export default {
  name: 'History',
  data: () => ({
    // records: [],
    recordsFiltred: [],
    dateFrom: new Date(),
    dateTo: new Date(),
    format: 'dd.MM.yyyy',
    ru
  }),
  computed: {
    ...mapGetters(['allRecords']),
    recordsOfMonth(){
      return this.recordsFiltred.filter(r => r.date >= this.dateFrom.toJSON() && r.date <= this.dateTo.toJSON())
      .sort((prev, next) => new Date(prev.date) - new Date(next.date))
      .reverse()
    }
  },
  async mounted() {
    this.dateFrom.setDate(1)
    this.recordsFiltred = [...this.allRecords]
  },
  methods: {
    filtersOfType(type) {
      this.recordsFiltred = this.records.filter(r => r.type === type)
      if(type === 'all'){
        this.recordsFiltred = [...this.records]
      }
    }
  },
  components: {
    HistoryItem, Datepicker, HistoryFilters
  }
}
</script>

<style scoped>
.vdp-datepicker__calendar{
  left: -120%;
}
</style>

