<template>
  <div class="content">
    <div class="bill-content-center">
      <div class="bill-header">
        <a href="#" class="back">
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
          Счет RUB
          <div class="bill-icon"></div>
        </div>
      </div>
      <div class="card bill-total-balace">
        <div class="title">Баланс:</div>
        <div class="total-amount">
          30 000
          <span>rub</span>
        </div>
        <button class="button outcome">Расход</button>
        <button class="button income">Доход</button>
      </div>
      <div class="card card-transfer">
        <form class="transfer">
          <div class="input-field">
            <!-- <input type="text"> -->
            <label for="from_account">Списать с</label>
            <select id="from_account">
              <option value="0">Счет списания</option>
              <option value="bill1">Счет1</option>
              <option value="bill2">Счет2</option>
              <option value="bill3">Счет3</option>
            </select>
          </div>
          <div class="input-field">
            <!-- <input type="text"> -->
            <label for="to_account">Перевести на</label>
            <select id="to_account">
              <option value="0">Счет зачисления</option>
              <option value="bill1">Счет1</option>
              <option value="bill2">Счет2</option>
              <option value="bill3">Счет3</option>
            </select>
          </div>
          <div class="input-field">
            <label for="amount">Сумма</label>
            <input type="text" id="amount" />
          </div>
          <button class="button" type="submit">Перевести</button>
        </form>
      </div>
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
  </div>
</template>