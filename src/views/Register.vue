<template>
  <div>
    <form class="register-form" @submit.prevent="submitHandler">
      <div class="imput-field">
        <label for="name">Имя</label>
        <input type="text" id="name" v-model="name" :class="{ invalid: $v.name.$dirty && !$v.name.required }"/>
        <small class="helper-text invalid" v-if="$v.name.$dirty && !$v.name.required">Введите имя</small>
      </div>
      <div class="imput-field">
        <label for="email">Email</label>
        <input type="text" id="email" v-model="email" :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"/>
        <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.email.required">Введите email</small>
        <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.email.email">Введите корректный email</small>
        <small class="helper-text invalid" v-if="error.code == 'auth/email-already-in-use'">Пользователь с таким email уже зарегистрирован</small>
      </div>
      <div class="imput-field">
        <label for="pass">Пароль</label>
        <input type="password" id="pass" v-model="password" />
        <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.password.required">Введите пароль</small>
        <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.password.minLength">Пароль должет быть не менее {{$v.password.$params.minLength.min}} символов. Сейчас он составляет {{password.length}}</small>
      </div>
      <button type="submit" class="login-btn">Зарегистрироваться</button>
    </form>
    <div>
      <span>Уже есть аккаунт?</span>
      <router-link to="/login">Войти</router-link>
    </div>
  </div>
</template>

<script>
import { email, required, minLength} from 'vuelidate/lib/validators'
export default {
  name: 'register',
  data: () => ({
    title: 'Регистрация пользователя',
    name: '',
    email: '',
    password: '',
    error: ''
  }),
  validations: {
    name: { required },
    email: { email, required },
    password: { required, minLength: minLength(6) }
  },
  created() {
    this.$meta.setTitle(this.title)
  },
  methods: {
    async submitHandler() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      try {
        await this.$store.dispatch('register', formData)
        this.$router.push('/')
      } catch (e) {
        console.log(e)
      }
      
    }
  }
}
</script>