<template>
  <div class="history-content">
    <div class="wrap">
      <div class="history-content-header">
        <div class="overwiev">
          Обзор
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
        </div>
        <button type="button" class="btn">Экспорт истории</button>
        <div class="str datepicker">
          <label for="date-from">С</label>
          <input type="text" id="date-from" value="13.10.2019" />
          <label for="date-to">По</label>
          <input type="text" id="date-to" value="13.11.2019" />
        </div>
        <div class="view-icons">
          <i class="active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="17"
              height="13"
              viewBox="0 0 17 13"
            >
              <defs>
                <clipPath id="clip-path">
                  <path
                    id="Mask"
                    d="M17,13H0V7H17v6Zm0-7H0V0H17V6Z"
                    transform="translate(4437 -3881)"
                  />
                </clipPath>
              </defs>
              <g id="Group_123" data-name="Group 123" transform="translate(-4437 3881)">
                <path
                  id="Mask-2"
                  data-name="Mask"
                  d="M17,13H0V7H17v6Zm0-7H0V0H17V6Z"
                  transform="translate(4437 -3881)"
                />
              </g>
            </svg>
          </i>
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="17"
              height="13"
              viewBox="0 0 17 13"
            >
              <defs>
                <clipPath id="clip-path">
                  <path
                    id="Mask"
                    d="M17,13H12V7h5v6Zm-6,0H6V7h5v6ZM5,13H0V7H5v6ZM17,6H12V0h5V6ZM11,6H6V0h5V6ZM5,6H0V0H5V6Z"
                    transform="translate(4462 -3881)"
                  />
                </clipPath>
              </defs>
              <g id="Group_122" data-name="Group 122" transform="translate(-4462 3881)">
                <path
                  id="Mask-2"
                  data-name="Mask"
                  d="M17,13H12V7h5v6Zm-6,0H6V7h5v6ZM5,13H0V7H5v6ZM17,6H12V0h5V6ZM11,6H6V0h5V6ZM5,6H0V0H5V6Z"
                  transform="translate(4462 -3881)"
                />
              </g>
            </svg>
          </i>
        </div>
      </div>
      <div class="filteres">
        <a class="active" href="#">Все</a>
        <a href="#">Расход</a>
        <a href="#">Доход</a>
        <a href="#">Перевод</a>
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
        <div class="history-item-date">16:23, 12 декабря 2018</div>
        <div class="history-item-bill">
          <i></i> Счет
        </div>
        <div class="history-item-type">
          Тип операции
          <i>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="long-arrow-alt-right"
              class="svg-inline--fa fa-long-arrow-alt-right fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"
              />
            </svg>
          </i>
        </div>
        <div class="history-item-category">Категория</div>
        <div class="history-item-description">Описание</div>
        <div class="history-item-amount">1 000 rub</div>
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
        <div class="history-item-date">16:23, 12 декабря 2018</div>
        <div class="history-item-bill">
          <i></i> Счет
        </div>
        <div class="history-item-type">
          Тип операции
          <i>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="exchange-alt"
              class="svg-inline--fa fa-exchange-alt fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"
              />
            </svg>
          </i>
        </div>
        <div class="history-item-category">Категория</div>
        <div class="history-item-description">Описание</div>
        <div class="history-item-amount">1 000 rub</div>
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
        <div class="history-item-date">16:23, 12 декабря 2018</div>
        <div class="history-item-bill">
          <i></i> Счет
        </div>
        <div class="history-item-type">
          Тип операции
          <i>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="long-arrow-alt-left"
              class="svg-inline--fa fa-long-arrow-alt-left fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
              />
            </svg>
          </i>
        </div>
        <div class="history-item-category">Категория</div>
        <div class="history-item-description">Описание</div>
        <div class="history-item-amount">1 000 rub</div>
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
        <div class="history-item-date">16:23, 12 декабря 2018</div>
        <div class="history-item-bill">
          <i></i> Счет
        </div>
        <div class="history-item-type">
          Тип операции
          <i>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="long-arrow-alt-right"
              class="svg-inline--fa fa-long-arrow-alt-right fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"
              />
            </svg>
          </i>
        </div>
        <div class="history-item-category">Категория</div>
        <div class="history-item-description">Описание</div>
        <div class="history-item-amount">1 000 rub</div>
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
        <div class="history-item-date">16:23, 12 декабря 2018</div>
        <div class="history-item-bill">
          <i></i> Счет
        </div>
        <div class="history-item-type">
          Тип операции
          <i>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="exchange-alt"
              class="svg-inline--fa fa-exchange-alt fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"
              />
            </svg>
          </i>
        </div>
        <div class="history-item-category">Категория</div>
        <div class="history-item-description">Описание</div>
        <div class="history-item-amount">1 000 rub</div>
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
        <div class="history-item-date">16:23, 12 декабря 2018</div>
        <div class="history-item-bill">
          <i></i> Счет
        </div>
        <div class="history-item-type">
          Тип операции
          <i>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="long-arrow-alt-left"
              class="svg-inline--fa fa-long-arrow-alt-left fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
              />
            </svg>
          </i>
        </div>
        <div class="history-item-category">Категория</div>
        <div class="history-item-description">Описание</div>
        <div class="history-item-amount">1 000 rub</div>
      </div>
    </div>
  </div>
</template>