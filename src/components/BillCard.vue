<template>
  <router-link to="/bill" class="card card-bill">
        <div class="row">
          <div class="title">
            <i>
              <SvgIcon :name="'vtb'" />
            </i>Счет
          </div>
          <div class="amount">
            <span class="currency">rub</span>30 000
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
      </router-link>
</template>

