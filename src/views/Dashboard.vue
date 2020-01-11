<template>
  <div class="content">
    <div class="content-center">
      <div class="row">
        <div class="wrap-card-info">
          <div class="title">Обзор</div>
          <div class="card card-info">
            <div class="card-header">
              20.11.2019
              <br />
              <span>16:23</span>
            </div>
            <div class="card-icon">
              <span>
                4
                <br />
              </span>Cчета
            </div>
            <div class="card-body">
              <span class="card-title">Текущий балланс:</span>
              <div class="amount rub">
                100 000
                <span>rub</span>
              </div>
              <div class="wrap-currency">
                <div class="amount currency">
                  1421.66
                  <span>eur</span>
                </div>
                <div class="amount currency">
                  1587.30
                  <span>usd</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wrap-cards-bill">
          <div class="title">
            <div class="h2">Мои счета</div>
            <a href="#">Добавить счет</a>
          </div>
          <div class="cards-bill">
            <div class="card card-bill">
              <div class="card-header">Счет1</div>
              <div class="card-icon">
                <img src="/img/_src/vtb24.png" alt class="img-responsive" />
              </div>
              <div class="card-body">
                <div class="amount">30 000</div>
                <div class="currency">rub</div>
              </div>
            </div>
            <div class="card card-bill">
              <div class="card-header">Счет2</div>
              <div class="card-icon">
                <img src="/img/_src/sberbank.png" alt class="img-responsive" />
              </div>
              <div class="card-body">
                <div class="amount">30 000</div>
                <div class="currency">rub</div>
              </div>
            </div>
            <div class="card card-bill">
              <div class="card-header">Счет3</div>
              <div class="card-icon">
                <img src="/img/_src/cash_usd.png" alt class="img-responsive" />
              </div>
              <div class="card-body">
                <div class="amount">150</div>
                <div class="currency">usd</div>
              </div>
            </div>
            <div class="card card-bill">
              <div class="card-header">Счет4</div>
              <div class="card-icon">
                <img src="/img/_src/cash_rub.png" alt class="img-responsive" />
              </div>
              <div class="card-body">
                <div class="amount">25 000</div>
                <div class="currency">rub</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="card card-currency-amount">
              <div class="card-currency-amount-item">
                <div class="doughnut">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="percent">81%</div>
                <div class="currency">rub</div>
                <div class="overwiev">
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
                </div>
              </div>
              <div class="card-currency-amount-item">
                <div class="doughnut">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="percent">12%</div>
                <div class="currency">usd</div>
                <div class="overwiev">
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
                </div>
              </div>
              <div class="card-currency-amount-item">
                <div class="doughnut">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="percent">7%</div>
                <div class="currency">eur</div>
                <div class="overwiev">
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
                </div>
              </div>
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
          </div>
        </div>
      </div>
      <div class="row str">
        <div class="card card-chart"></div>
        <div class="card card-currency">
          <div class="card-currency-title">Курсы валют</div>
          <div class="card-currency-item">
            <div class="card-currency-left">
              <div class="row">
                <span class="currencies">usd/rub</span>
                <span class="percent">1.93%</span>
              </div>
              <div class="row">
                <span class="amount">68.0800</span>
                <span class="currency">rub</span>
              </div>
            </div>
            <div class="card-currency-right">
              <img src="/img/_src/path8.png" alt />
            </div>
          </div>
          <div class="card-currency-item">
            <div class="card-currency-left">
              <div class="row">
                <span class="currencies">usd/rub</span>
                <span class="percent">1.93%</span>
              </div>
              <div class="row">
                <span class="amount">68.0800</span>
                <span class="currency">rub</span>
              </div>
            </div>
            <div class="card-currency-right">
              <img src="/img/_src/path8.png" alt />
            </div>
          </div>
          <div class="card-currency-item">
            <div class="card-currency-left">
              <div class="row">
                <span class="currencies">usd/rub</span>
                <span class="percent">1.93%</span>
              </div>
              <div class="row">
                <span class="amount">68.0800</span>
                <span class="currency">rub</span>
              </div>
            </div>
            <div class="card-currency-right">
              <img src="/img/_src/path8.png" alt />
            </div>
          </div>
          <div class="card-currency-item">
            <div class="card-currency-left">
              <div class="row">
                <span class="currencies">usd/rub</span>
                <span class="percent">1.93%</span>
              </div>
              <div class="row">
                <span class="amount">68.0800</span>
                <span class="currency">rub</span>
              </div>
            </div>
            <div class="card-currency-right">
              <img src="/img/_src/path8.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-right">
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
            <div class="item-content-right">Счет</div>
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
            <div class="item-content-right">Счет</div>
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
            <div class="item-content-right">Счет</div>
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
            <div class="item-content-right">Счет</div>
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
            <div class="item-content-right">Счет</div>
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
            <div class="item-content-right">Счет</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>