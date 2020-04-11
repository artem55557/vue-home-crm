<template>
  <div class="card history-item">
      <a href="#" class="history-item-extras-menu">
        <i>
          <SvgIcon :name="'ellipsis-v'"></SvgIcon>
        </i>
      </a>
      <div class="row">
        <div class="history-item-date">{{date | date('datetime')}}</div>
        <div class="history-item-bill">{{billName}}</div>
        <div class="history-item-category">{{category}}</div>
        <div class="history-item-amount">{{amount | number()}} {{currency}}</div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'RecordHistoryItem',
  props: [ 'billName', 'category', 'date', 'amount', 'currency' ]
  
}
</script>