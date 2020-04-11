<template>
  <div class="record-content">
    <div class="card record-content-center">
      <ul>
        <li v-for="(t, i) in operationType" :key="i" :class="{'active': i === currentType}">
          <a class="outcome" @click.prevent="onClick(i)">{{t.title}}</a>
        </li>
      </ul>
      <RecordFormOutcome :type="operationType[currentType].type"></RecordFormOutcome>
    </div>
    <RecordHistoryToday></RecordHistoryToday>
  </div>
</template>

<script>
import RecordFormOutcome from '@/components/RecordFormOutcome'
import RecordHistoryToday from '@/components/RecordHistoryToday'
export default {
  name: 'Record',
  data: () => ({
    operationType: [
      {title: 'Расход', type: 'outcome'},
      {title: 'Доход', type: 'income'},
      {title: 'Перевод', type: 'transfer'},
      {title: 'Обмен', type: 'change'}
      ],
    currentType: 0,
  }),
  methods: {
    onClick(i) {
      this.currentType = i
    }
  },
  components: {
    RecordFormOutcome, RecordHistoryToday
  }
}
</script>