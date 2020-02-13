<template>
  <a href="#" class="card card-bill" @click.prevent="$router.push('bill/' + id)">
    <div class="row">
      <div class="title">
        <i>
          <SvgIcon :name="icon" />
        </i>
        {{ name }}
      </div>
      <div class="amount">
        {{ balance }}
        <span class="currency">{{ currency }}</span>
      </div>
    </div>
    <div class="row">
      <div class="card-bill-chart">
        <img src="/img/_src/chart.png" alt />
      </div>
    </div>
    <div class="row">
      <div class="card bill-info">
        <div class="info-title">Ноябрь 2019</div>
        <div class="income">
          Доход:
          <span class="info-amount">1045 rub</span>
        </div>
        <div class="outcome">
          Расход:
          <span class="info-amount">1045 rub</span>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  name: "BillCard",
  props: {
    balance: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
};
</script>
