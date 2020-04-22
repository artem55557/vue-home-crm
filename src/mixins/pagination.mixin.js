export default {
  data() {
    return {
      page: + this.$route.query.page || 1,
      pageSize: 8,
      pageCount: 0,
      allItems: [],
      items: []
    }
  },
  methods: {
    pageChangeHandler(page) {
      this.$router.push(`${this.$route.path}?page=${page}`)
      this.items = this.allItems[page - 1] || this.allItems[0]
    },
    setupPagination(allItems) {
      this.allItems = allItems.reduce((acc, item) => {
        if(acc[acc.length-1].length === this.pageSize) {
          acc.push([])
        }
        acc[acc.length-1].push(item)
        return acc
      },[[]])
      this.pageCount = this.allItems.length
      this.items = this.allItems[this.page - 1] || this.allItems[0]
    }
  }
}