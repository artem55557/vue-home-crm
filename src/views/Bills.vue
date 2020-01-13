<template>
  <div class="bills-content">
    <div class="wrap">
      <div class="bills-content-header">
        <div class="overwiev">
          Обзор
          <i>
            <SvgIcon :name="'ellipsis-v'"/>
          </i>
        </div>
        <div class="view-icons">
          <i>
            <SvgIcon :name="'list'" />
          </i>
          <i class="active">
            <SvgIcon :name="'grid'" />
          </i>
        </div>
      </div>
      <BillCard />
      <router-link to="/createbill" class="card-add">
        <i>+</i>
        <span>Добавить счет</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import BillCard from '../components/BillCard'
export default {
  components: {
    BillCard
  }
}
</script>
