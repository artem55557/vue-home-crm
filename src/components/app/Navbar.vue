<template>
  <nav class="navbar">
    <div class="title">{{ pageTitle[this.$route.name] }}</div>
    <div class="search">
      <input type="text" placeholder="Поиск..." />
      <i>
        <SvgIcon :name="'search'"/>
      </i>
    </div>
    <div class="support">
      <a href class="nav-btn" @click.prevent="testInfo">
        <i>
          <SvgIcon :name="'exclamation'"/>
        </i>Поддержка
      </a>
      <a href class="nav-btn">+</a>
    </div>
    <div class="user_info">
      {{name}}
      <a href="#" class="nav-btn" @click.prevent="logout">
        <SvgIcon :name="'user'" />
      </a>
    </div>
  </nav>
</template>
<script>
import firebase from 'firebase/app'
export default {
  data: () => ({
    pageTitle: {
      'Home': 'Главная',
      'Bills': 'Счета',
      'Bill': 'Счет',
      'Record': 'Запись',
      'History': 'Исория',
      'Category': 'Категории',
      'CreateBill': 'Создание счета',
      'Settings': 'Настройки'
    },
  }),

  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    },
    async testInfo() {
      const uid = await this.$store.dispatch('getUid')
      const userUid = firebase.auth().currentUser.uid
      console.log(`StoreUid: ${uid} UID: ${userUid}`)
    },
  },
  computed: {
    name() {
      return this.$store.getters.info.name
    }
  }
}
</script>