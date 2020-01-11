<template>
  <div class="record-content">
    <div class="card record-content-center">
      <ul>
        <li class="active">
          <a class="outcome">Расход</a>
        </li>
        <li>
          <a class="income">Доход</a>
        </li>
        <li>
          <a class="transfer">Перевод</a>
        </li>
        <li>
          <a class="change">Обмен</a>
        </li>
      </ul>
      <div class="record-body">
        <form class="record-form">
          <label for="date">Дата операции</label>
          <input type="text" id="date" />
          <label for="bill">Счет списания</label>
          <select name id="bill">
            <option value="bill1">Счет 1</option>
            <option value="bill2">Счет 2</option>
            <option value="bill3">Счет 3</option>
            <option value="bill4">Счет 4</option>
          </select>
          <label for="category">Категория</label>
          <select name="category" id="category">
            <option value="categoty1">Категория 1</option>
            <option value="categoty2">Категория 2</option>
            <option value="categoty3">Категория 3</option>
            <option value="categoty4">Категория 4</option>
          </select>
          <label for="amount">Сумма</label>
          <input type="text" id="amount" />
          <label for="description">Описание</label>
          <input type="text" id="description" />
          <button class="button">Добавить</button>
        </form>
      </div>
    </div>
    <div class="history-transfer-today">
      <div class="title">Журнал операций на сегодня</div>
      <div class="card history-item">
        <a href="#" class="history-item-extras-menu">
          <i>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="ellipsis-v"
              class="svg-inline--fa fa-ellipsis-v fa-w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
            >
              <path
                d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
              />
            </svg>
          </i>
        </a>
        <div class="row">
          <div class="history-item-date">16:23, 12 декабря 2018</div>
          <div class="history-item-bill">Счет</div>
          <div class="history-item-category">Категория</div>
          <div class="history-item-amount">1 000 rub</div>
        </div>
      </div>
      <div class="card history-item">
        <a href="#" class="history-item-extras-menu">
          <i>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="ellipsis-v"
              class="svg-inline--fa fa-ellipsis-v fa-w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
            >
              <path
                d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
              />
            </svg>
          </i>
        </a>
        <div class="row">
          <div class="history-item-date">16:23, 12 декабря 2018</div>
          <div class="history-item-bill">Счет</div>
          <div class="history-item-category">Категория</div>
          <div class="history-item-amount">1 000 rub</div>
        </div>
      </div>
      <div class="card history-item">
        <a href="#" class="history-item-extras-menu">
          <i>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="ellipsis-v"
              class="svg-inline--fa fa-ellipsis-v fa-w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
            >
              <path
                d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
              />
            </svg>
          </i>
        </a>
        <div class="row">
          <div class="history-item-date">16:23, 12 декабря 2018</div>
          <div class="history-item-bill">Счет</div>
          <div class="history-item-category">Категория</div>
          <div class="history-item-amount">1 000 rub</div>
        </div>
      </div>
      <div class="card history-item">
        <a href="#" class="history-item-extras-menu">
          <i>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="ellipsis-v"
              class="svg-inline--fa fa-ellipsis-v fa-w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
            >
              <path
                d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
              />
            </svg>
          </i>
        </a>
        <div class="row">
          <div class="history-item-date">16:23, 12 декабря 2018</div>
          <div class="history-item-bill">Счет</div>
          <div class="history-item-category">Категория</div>
          <div class="history-item-amount">1 000 rub</div>
        </div>
      </div>
      <div class="card history-item">
        <a href="#" class="history-item-extras-menu">
          <i>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="ellipsis-v"
              class="svg-inline--fa fa-ellipsis-v fa-w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
            >
              <path
                d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
              />
            </svg>
          </i>
        </a>
        <div class="row">
          <div class="history-item-date">16:23, 12 декабря 2018</div>
          <div class="history-item-bill">Счет</div>
          <div class="history-item-category">Категория</div>
          <div class="history-item-amount">1 000 rub</div>
        </div>
      </div>
      <div class="card history-item">
        <a href="#" class="history-item-extras-menu">
          <i>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="ellipsis-v"
              class="svg-inline--fa fa-ellipsis-v fa-w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
            >
              <path
                d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
              />
            </svg>
          </i>
        </a>
        <div class="row">
          <div class="history-item-date">16:23, 12 декабря 2018</div>
          <div class="history-item-bill">Счет</div>
          <div class="history-item-category">Категория</div>
          <div class="history-item-amount">1 000 rub</div>
        </div>
      </div>
    </div>
  </div>
</template>