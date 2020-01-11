<template>
  <nav class="navbar">
    <div class="title">Панель инструментов</div>
    <div class="search">
      <input type="text" placeholder="Поиск..." />
      <i>
        <SvgIcon :name="'search'"/>
      </i>
    </div>
    <div class="support">
      <a href class="nav-btn">
        <i>
          <SvgIcon :name="'exclamation'"/>
        </i>Поддержка
      </a>
      <a href class="nav-btn">+</a>
    </div>
    <div class="user_info">
      Имя пользователя
      <a href class="nav-btn">
        <SvgIcon :name="'user'" />
      </a>
    </div>
  </nav>
</template>