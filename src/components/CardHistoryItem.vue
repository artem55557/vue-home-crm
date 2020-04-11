<template>
  <div class="card-history-item">
    <div class="row">
      <div class="item-content-left">
        <span class="datetime">{{record.date | date('time')}}, {{record.date | date('date')}}</span>
      </div>
      <div class="item-content-right">
        <i></i>
        <span class="amount">{{record.amount | number() }} {{record.currency}}</span>
      </div>
    </div>
    <div class="row">
      <div class="item-content-left">{{record.categoryName}}</div>
      <div class="item-content-right">{{record.billNameFrom}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardHistoryItem',
  props: {
    record: {
      type: Object,
      required: true
    }
  }
}
</script>
