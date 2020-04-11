<template>
  <div class="card-currency-amount-item">
    <div class="doughnut">
      <svg viewBox="0 0 42 42" class="donut">
        <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
        <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" stroke-width="3"></circle>
        <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#4C4D55" stroke-width="3" :stroke-dasharray="amountInCurrency.diagram" stroke-dashoffset="25"></circle>
      </svg>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="percent">{{amountInCurrency.percent | number}}%</div>
    <div class="currency">{{amountInCurrency.currency}}</div>
    <div class="overwiev">
      <SvgIcon :name="'ellipsis-v'"></SvgIcon>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DashboardAmountItem',
  props: {
    amountInCurrency: {
      type: Object,
      required: true
    }
  }
}
</script>