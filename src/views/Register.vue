<template>
  <div>
    <form class="register-form">
      <div class="imput-field">
        <label for="name">Имя</label>
        <input type="text" id="name" />
        <small class="helper-text invalid">Введите имя</small>
      </div>
      <div class="imput-field">
        <label for="email">Email</label>
        <input type="text" id="email" />
      </div>
      <div class="imput-field">
        <label for="pass">Пароль</label>
        <input type="text" id="pass" />
      </div>
      <button type="submit" class="login-btn">Зарегистрироваться</button>
    </form>
    <div>
      <span>Уже есть аккаунт?</span>
      <a href="#">Войти</a>
    </div>
  </div>
</template>