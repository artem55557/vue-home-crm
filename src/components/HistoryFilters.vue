<template>
  <div class="filteres">
    <a :class="{'active' : i == currentFilter}" href="#" 
      v-for="(filter, i) in filters" 
      :key="i"
      @click.prevent="onClick(i, filter.type)"
      >{{filter.title}}</a>
    
  </div>
</template>

<script>
export default {
  name: 'HistoryFilters',
  data: () => ({
    filters: [
      {title: 'Все', type: 'all'},
      {title: 'Расход', type: 'outcome'},
      {title: 'Доход', type: 'income'},
      {title: 'Перевод', type: 'transfer'},
      {title: 'Обмен', type: 'change'}
      ],
    currentFilter: 0
  }),
  methods: {
    onClick(i, type) {
      this.currentFilter = i
      this.$emit('type', type)
    }
  }
}
</script>
