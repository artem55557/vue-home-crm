<template>
  <div class="content">
    <Loader v-if="loading"></Loader>
    <template v-else>
      <div class="bill-content-center">
        <div class="bill-header">
          <a href="#" class="back" @click.prevent="$router.go(-1)">
            <i>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="chevron-left"
                class="svg-inline--fa fa-chevron-left fa-w-10"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                />
              </svg>
            </i>Назад
          </a>
          <div class="bill dropdown">
            {{bill.name}} {{bill.currency}}
            <div class="bill-icon"><i><SvgIcon :name="bill.icon" /></i></div>
          </div>
        </div>
        <div class="card bill-total-balace">
          <div class="title">Баланс:</div>
          <div class="total-amount">
            {{bill.balance}}
            <span>rub</span>
          </div>
          <button class="button outcome">Расход</button>
          <button class="button income">Доход</button>
        </div>
        <Transfer></Transfer>
        <div class="card card-history">
          <div class="card-history-header">
            <div class="card-history-title">История</div>
            <div class="filteres">
              <a class="active" href="#">Все</a>
              <a href="#">Расход</a>
              <a href="#">Доход</a>
              <a href="#">Перевод</a>
            </div>
          </div>
          <div class="card-history-item">
            <div class="row">
              <div class="item-content-left">
                <span class="datetime">16:23, 12.12.2018</span>
              </div>
              <div class="item-content-right">
                <i></i>
                <span class="amount">100 rub</span>
              </div>
            </div>
            <div class="row">
              <div class="item-content-left">Продукты</div>
              <div class="item-content-right">Описание</div>
            </div>
          </div>
          <div class="card-history-item">
            <div class="row">
              <div class="item-content-left">
                <span class="datetime">16:23, 12.12.2018</span>
              </div>
              <div class="item-content-right">
                <i></i>
                <span class="amount">100 rub</span>
              </div>
            </div>
            <div class="row">
              <div class="item-content-left">Продукты</div>
              <div class="item-content-right">Описание</div>
            </div>
          </div>
          <div class="card-history-item">
            <div class="row">
              <div class="item-content-left">
                <span class="datetime">16:23, 12.12.2018</span>
              </div>
              <div class="item-content-right">
                <i></i>
                <span class="amount">100 rub</span>
              </div>
            </div>
            <div class="row">
              <div class="item-content-left">Продукты</div>
              <div class="item-content-right">Описание</div>
            </div>
          </div>
          <button class="button">Показать еще</button>
        </div>
      </div>
      <div class="bill-content-right">
        <div class="bill-header">
          <a href>Добавить счет</a>
        </div>
        <div class="card chart">
          <div class="chart-header">
            <span class="title">График расходов по счету</span>
            <ul class="filtres">
              <li>
                <a href="#">1м</a>
              </li>
              <li class="active">
                <a href="#">3м</a>
              </li>
              <li>
                <a href="#">6м</a>
              </li>
              <li>
                <a href="#">1г</a>
              </li>
              <li>
                <a href="#">Все</a>
              </li>
            </ul>
            <div class="datepicker">
              <label for="date-from">С</label>
              <input type="text" id="date-from" value="13.10.2019" />
              <label for="date-to">По</label>
              <input type="text" id="date-to" value="13.11.2019" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Transfer from '@/components/Transfer'
export default {
  name: 'Bill',
  data: () => ({
    bill: null,
    loading: true
  }),
  async mounted() {
    const id = this.$route.params.id
    const bill = await this.$store.dispatch('fetchBillById', id)
    this. bill = bill
    this.loading = false
  },
  components: {
    Transfer
  }
}
</script>

<style>
.dropdown {
  display: flex;
  align-items: center;
}

.bill-icon {
  padding-left: 1rem;
}
</style>