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
        v-for="record in items"
        :key="record.id"
        :record="record"
        @submit="submit"
        ></HistoryItem>
        <Paginate
          :page-count="pageCount"
          :click-handler="pageChangeHandler"
          :prev-text="'Назад'"
          :next-text="'Вперед'"
          :container-class="'pagination'"
          :page-class="'waves-effect'">
        </Paginate>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import {ru, en} from 'vuejs-datepicker/dist/locale'
import HistoryItem from '@/components/HistoryItem'
import HistoryFilters from '@/components/HistoryFilters'
import { mapGetters } from 'vuex'
import paginationMixin from '@/mixins/pagination.mixin'
export default {
  name: 'History',
  mixins: [paginationMixin],
  data: () => ({
    // records: [],
    recordsFiltred: [],
    dateFrom: new Date(),
    dateTo: new Date(),
    format: 'dd.MM.yyyy',
    ru,
    currentType: 'all'
  }),
  computed: mapGetters(['allRecords']),
  watch: {
    recordsFiltred() {
      this.setupPagination(this.recordsFiltred)
    },
    dateFrom() {
      this.filtersOfType(this.currentType)
    },
    dateTo(){
      this.filtersOfType(this.currentType)
    }
  },
  async mounted() {
    this.dateFrom.setDate(1)
    this.recordsFiltred = this.filtersOfMonth(this.allRecords, this.dateFrom, this.dateTo)
    this.setupPagination(this.recordsFiltred)
  },
  methods: {
    filtersOfType(type) {
      this.currentType = type
      this.recordsFiltred = this.filtersOfMonth(this.allRecords, this.dateFrom, this.dateTo).filter(r => r.type === type)
      if(type === 'all'){
        this.recordsFiltred = this.filtersOfMonth(this.allRecords, this.dateFrom, this.dateTo)
      }
    },
    filtersOfMonth(array, dateFrom, dateTo){
     return array.filter(r => r.date >= dateFrom.toJSON() && r.date <= dateTo.toJSON())
      .sort((prev, next) => new Date(prev.date) - new Date(next.date))
      .reverse()
      
    },
    submit(id) {
      this.recordsFiltred = [...this.allRecords]
    }
  },
  components: {
    HistoryItem, Datepicker, HistoryFilters
  }
}
</script>

<style>
.vdp-datepicker__calendar{
  left: -120%;
}
.pagination{
  margin: 0 auto;
}
.pagination li {
    display: inline-block;
    border-radius: 2px;
    text-align: center;
    vertical-align: top;
    height: 30px;
}
.pagination li.active {
    background-color: #949191;
}
.pagination li a {
  text-decoration: none;
  color: #444;
  display: inline-block;
  font-size: 1.2rem;
  padding: 0 10px;
  line-height: 30px;
}
.pagination li.active a {
  color: #fff;
}
.waves-effect {
  position: relative;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;
  z-index: 1;
  -webkit-transition: .3s ease-out;
  transition: .3s ease-out;
}
.pagination li.disabled a {
  cursor: default;
  color: #999;
}
</style>

