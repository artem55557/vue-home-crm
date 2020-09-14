<template>
  <div class="str datepicker">
    <label for="date-from">С</label>
    <datepicker v-model="dateFrom" :format="format" :language="ru"></datepicker>
    <!-- <input type="text" id="date-from" value="13.10.2019" /> -->
    <label for="date-to">По</label>
    <datepicker v-model="dateTo" :format="format" :language="ru"></datepicker>
    <!-- <input type="text" id="date-to" value="13.11.2019" /> -->
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import {ru, en} from 'vuejs-datepicker/dist/locale'
export default {
  name: 'Datepicker',
  data: () => ({
    dateFrom: new Date(),
    dateTo: new Date(),
    format: 'dd.MM.yyyy',
    ru
  }),
  mounted() {
    this.dateFrom.setDate(1)
  }
}
</script>