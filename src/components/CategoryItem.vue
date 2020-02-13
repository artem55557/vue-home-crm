<template>
    <div 
      :class="[!isEdit ? 'category-item' : 'category-input']"
    >
      <template v-if="!isEdit">
        {{ categoryName }}
        <span class="icon" @click="toggle(categoryId)">
          <i>
            <SvgIcon :name="'pencil'"></SvgIcon>
          </i>
        </span>
      </template>
      <template v-if="isEdit">
        <input type="text" name="category" v-model="category" :ref="categoryId"/>
        <span class="icon" @click="categoryEdit(categoryId)"
          ><i><SvgIcon :name="'check'"></SvgIcon></i
        ></span>
      </template>
    </div>
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    categoryName: {
      type: String,
      required: true
    },
    categoryId: {
      type: String,
      required :true
    },
    categoryType: {
      type: String,
      required: true
    }
  },
  data: () => ({
    isEdit: false,
    category: '',
    countIndex: ''
  }),
  methods: {
    toggle(categoryId) {
      this.isEdit = !this.isEdit
      this.category = this.categoryName;
      if(this.isEdit) {
        this.$nextTick(() => {
          this.$refs[categoryId].focus()
        })
      }
    },
    async categoryEdit(categoryId) {
      this.isEdit = !this.isEdit;
      const categoryData = {
        title: this.category,
        type: this.categoryType,
        id: categoryId
      }
      await this.$store.dispatch('updateCategory', categoryData)
      this.$emit('updated', categoryData)
    }
  }
};
</script>
