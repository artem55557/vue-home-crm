<template>
  <div class="category-content">
    <div class="wrap">
      <Loader v-if="loading"></Loader>
      <template v-else>
      <CategoryCard :categories="outcome" :type="'outcome'" @created="addNewCategory" @updated="updateCategory"></CategoryCard>
      <CategoryCard :categories="income" :type="'income'" @created="addNewCategory" @updated="updateCategory"></CategoryCard>
      <!-- <div class="card card-category">
        <div class="category-title">Категории расходов</div>
        <template v-if="categories.outcome.length"><CategoryItem v-for="c in categories.outcome" :categoryName="c.title" :key="c.id"></CategoryItem></template>
        <div class="category-item" v-else>
          Категорий пока нет
        </div>
        <div class="category-input" v-if="isVisible">
          <input type="text" name="category" id="category" v-model="category">
        </div>
        <div class="add-category" @click="toggle" v-if="!isVisible">+ добавить категорию</div>
        <div class="add-category" @click="addCategory('outcome')" v-if="isVisible">Сохранить</div>
      </div>
      <div class="card card-category">
        <div class="category-title">Категории доходов</div>
          <template v-if="categories.income.length"><CategoryItem v-for="c in categories.income" :categoryName="c.title" :key="c.id"></CategoryItem></template>
        <div class="category-item" v-else>
          Категорий пока нет
        </div>
        <div class="category-input" v-if="isVisible">
          <input type="text" name="category" id="category" v-model="category">
        </div>
        <div class="add-category" @click="toggle" v-if="!isVisible">+ добавить категорию</div>
        <div class="add-category" @click="addCategory('income')" v-if="isVisible">Сохранить</div>
      </div> -->
      <div class="card card-category add-group-category">+ добавить группу категорий</div>
      </template>
    </div>
  </div>
</template>

<script>
import CategoryCard from '@/components/CategoryCard'
export default {
  name: 'Category',
  data: () => ({
    loading: true,
    categories: []
    // categories: {
    //   income: [],
    //   outcome: []
    //   },
    
  }),
  computed:{
    income() {
      return this.categories.filter(c => c.type === 'income')
    },
    outcome() {
      return this.categories.filter(c => c.type === 'outcome')
    }
  },
  async mounted() {
    const cat = await this.$store.dispatch('fetchCategory')
    this.categories = cat
    // this.categories.income = cat.filter(c => c.type === 'income')
    // this.categories.outcome = cat.filter(c => c.type === 'outcome')
    
    this.loading = false
  },
  methods: {
    async addNewCategory() {
      this.categories =  await this.$store.dispatch('fetchCategory')
      // this.categories.push(category)
      // if(category.type === 'income') {
      //   this.categories.income.push(category)
      // }
      // if(category.type === 'outcome') {
      //   this.categories.outcome.push(category)
      // }
    },
    updateCategory(category) {
      // console.log(category)
      const index = this.categories.findIndex(c => c.id === category.id)
      this.categories[index].title = category.title
      this.categories[index].type = category.type
      // console.log(index)

      // if(category.id === 'income') {
      //   const index = this.categories.income.findIndex(c => c.id === category.id)
      //   this.categories.income[index].title = category.title
      //   this.categories.income[index].title = category.type
      // }
      // if(category.id === 'outcome') {
      //   const index = this.categories.income.findIndex(c => c.id === category.id)
      //   this.categories.outcome[index].title = category.title
      //   this.categories.outcome[index].title = category.type
      // }
    }
  },
  components: {
    CategoryCard
  }
}
</script>
