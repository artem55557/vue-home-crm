<template>
  <div class="sidenav">
    
    <router-link 
      tag="li"
      active-class="active"
      v-for="link in links"
      :key="link.name"
      :to="link.url"
      :exact="link.exact"  
      >
      <a to="#">
        <SvgIcon :name="link.name"/>
      </a>
    </router-link>
    
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {title:'Панель управления', url: '/', name: 'dashboard', exact: true},
      {title:'Счета', url: '/bills', name: 'bills'},
      {title:'Запись', url: '/record', name: 'record'},
      {title:'История', url: '/history', name: 'history'},
      {title:'Категории', url: '/category', name: 'category'},
      {title:'Настройки', url: '/settings', name: 'settings'}
      
    ]
  })
}
</script>