<template>
  <div class="card card-category">
    <div class="category-title">Категории <template v-if="type === 'outcome'">расходов</template> <template v-if="type === 'income'">доходов</template></div>
    <template v-if="categories.length"><CategoryItem v-for="c in categories" :categoryName="c.title" :key="c.id" :categoryId="c.id" :categoryType="c.type" @updated="updateCategory"></CategoryItem></template>
    <div class="category-item" v-else>
      Категорий пока нет
    </div>
    <div class="category-input" v-if="isVisible">
      <input type="text" name="category" v-model="category" :ref="type"> 
      <span class="icon" @click="toggle"
          ><i><SvgIcon :name="'times'"></SvgIcon></i
      ></span>
    </div>
    <div class="add-category" @click="toggle(type)" v-if="!isVisible">+ добавить категорию</div>
    <div class="add-category" @click="addCategory(type)" v-if="isVisible">Сохранить</div>
  </div>
</template>

<script>
import CategoryItem from '@/components/CategoryItem'
export default {
  name: 'CategoryCard',
  props: {
    categories: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  data: () => ({
    category: '',
    isVisible: false,
    
  }),
  
  methods: {
    toggle(type) {
      this.isVisible = !this.isVisible
      this.category = ''
      if(this.isVisible) {
        this.$nextTick(() => {
          this.$refs[type].focus()
        })
        }
    },
    async addCategory(type) {
      const cat = await this.$store.dispatch('categoryCreate', {
        title: this.category,
        type: type
      })
      this.$emit('created')
      this.category = ''
      this.isVisible = !this.isVisible
    },
    updateCategory(category) {
      this.$emit('updated', category)
    }
  },
  components: {
    CategoryItem
  }
}
</script>