<template>
  <div>
    <form class="login-form" @submit.prevent="submitHandler">
      <div class="imput-field">
        <label for="email">Email</label>
        <input type="text" id="email" v-model="email" :class="{invalid: ($v.email.$dirty && $v.email.required) || ($v.email.$dirty && $v.email.email)}"/>
        <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.email.required">Поле email не должно быть пустым</small>
        <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.email.email">Введите корректынй email</small>
        <small class="helper-text invalid" v-if="error.code == 'auth/user-not-found'">Пользователь не найден</small>
        
      </div>
      <div class="imput-field">
        <label for="pass">Пароль</label>
        <input type="password" id="pass" v-model="password" />
        <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.password.required">Введите пароль</small>
        <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.password.minLength">Пароль должет быть не менее {{$v.password.$params.minLength.min}} символов. Сейчас он составляет {{password.length}}</small>
        <small class="helper-text invalid" v-if="error.code == 'auth/wrong-password'">Неверный пароль</small>
      </div>
      <button type="submit" class="login-btn">Войти</button>
			
    </form>
    <span>Забыли пароль? Нет учетной записи?</span>
    <router-link to="/register">Зарегистрироваться</router-link>
		</div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
import messages from '@/utils/messages'
export default {
  name: "login",
  data: () => ({
    email: '',
    password: '',
    error: ''
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) }
  },
  methods: {
    async submitHandler() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      };
      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/')
      } catch (e) {}
    }
  },
  mounted() {
    if(messages[this.$route.query.message]){
      this.$message.success(messages[this.$route.query.message])
    }
  }
};
</script>
