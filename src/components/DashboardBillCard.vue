<template>
  <div class="card card-bill">
    <div class="card-header">{{bill.name}}</div>
    <div class="card-icon">
     <i>
          <SvgIcon :name="bill.icon" />
    </i>
    </div>
    <div class="card-body">
      <div class="amount">{{bill.balance | number()}}</div>
      <div class="currency">{{bill.currency}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DashboardBillCard',
  props: {
    bill: {
      type: Object,
      required: true
    }
  }
}
</script>
