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
      <router-link to="/bill" class="card card-bill">
        <div class="row">
          <div class="title">
            <i>
              <SvgIcon :name="'plus'" />
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
      <router-link to="bill" class="card card-bill">
        <div class="row">
          <div class="title">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="27"
                height="20"
              >
                <image
                  x="0px"
                  y="0px"
                  width="24px"
                  height="20px"
                  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAMAAACgaw2xAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABTVBMVEX4+Pj39/f29vb19fX09PTz8/P4+Pi1vtP19fb29/edqcWfqsb4+PilsMrY3Ob39/e5wdWToMDm6O739/ehrMj39/fT1+Oyu9H29vbEy9v29vbw8PLp6+/29vb29vbv8PLk5uzFy9v29vb19fV/j7Sgq8aUocC7w9X19fXN0t/u7/GWo8HR1uFugauToL+Hlrjw8fLc3+fFy9v19fXy8/SdqMT09PSapsPd4Of09PT09PTGzNvn6e1zha3V2eP09PSOm7zx8vNmeaaHlrgNLHXp6+7z8/NpfKlzha9meadhdaVvga1ccaJfc6NXbJ9gdKSMmrxRZ5xLYphNZJmDkrdFXJVNY5pEXZVDW5M/V5FIX5Y4UY1BWZIxS4krRoZAWZI1ToslQYJFXZQkP4JRZ5sfO38aN3wpRIQVM3kvSodPZZkQL3dGXZQQLnb///9gR8DYAAAAR3RSTlMAAAAAAABfwGRh4t+f9Mig5/y4wPxh5vec78Gjzb/Yo9LJk5z5+PvSk8nI67398fObudBYmOif7XBaXMek23iW71znx/1kWuP8h/8AAAABYktHRG4iD1EXAAAAB3RJTUUH4wwRCwkzExYryQAAAOZJREFUGNNty2k7QkEAhuGZZuwRJbtTnDCWSlky9sJBlrJUqNNesv3/r2Yml2aG++P7XC8AQvcfP3vPueqiV+x9/ZeaAfFwDiavhpwKtkPoGr7WjUDIgvvmVpNy8+BJ3416VC4vD2P3modxyICJx4wqOznlYMB0LjczKzEMwyGC7+nZ/5KXFObmRTAD9sKiLcsvEYQQQMvF0gqRrBbLa4QHM1gJmaiDhCvVdR5QpFaLbkhls97YIghgvB1r2jsU/9rda77uYxYwPWi9HdKOo/fWMeUBxxMfms92wPTkVPV1Brr+Y1nWN4fgU6Hy2i5nAAAAAElFTkSuQmCC"
                />
              </svg>
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

      <router-link to="/createbill" class="card-add">
        <i>+</i>
        <span>Добавить счет</span>
      </router-link>
    </div>
  </div>
</template>
