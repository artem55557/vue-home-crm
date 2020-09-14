<template>
  <ul class="filtres">
    <li :class="{'active' : i == currentFilter}"
    v-for="(filter, i) in filters"
    :key="i"
    >
      <a href="#" @click.prevent="onClick(i, filter.periodInMonth)">{{filter.title}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HistoryFilters',
  data: () => ({
    filters: [
      {title: '1м', periodInMonth: 1},
      {title: '3м', periodInMonth: 3},
      {title: '6м', periodInMonth: 6},
      {title: '1г', periodInMonth: 12},
      {title: 'Все', periodInMonth: 180}
      ],
    currentFilter: 0
  }),
  methods: {
    onClick(i, periodInMonth) {
      this.currentFilter = i
      let date = new Date()
      const currentMonth = date.getMonth()
      const firstMonth = currentMonth - periodInMonth
      date.setMonth(firstMonth)
      // console.log(`Index: ${i}, date: ${date}`);
      this.$emit('date', date)
    }
  }
}
</script>
