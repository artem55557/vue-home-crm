<template>
  <span>
    <svg
      v-if="name == 'logo'"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="wallet"
      class="svg-inline--fa fa-wallet fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
      />
    </svg>
    <svg
      v-if="name == 'dashboard'"
      xmlns="http://www.w3.org/2000/svg"
      width="15.2"
      height="15.71"
      viewBox="0 0 15.2 15.71"
    >
      <path
        id="dashboard"
        d="M8.751,15.71V7.064H15.2V14.67a1.04,1.04,0,0,1-1.04,1.04Zm-7.71,0A1.04,1.04,0,0,1,0,14.67V10.51H6.449v5.2ZM0,8.646V1.04A1.04,1.04,0,0,1,1.04,0H6.449V8.646ZM8.751,5.2V0H14.16A1.04,1.04,0,0,1,15.2,1.04V5.2Z"
      />
    </svg>
    <svg
      v-if="name == 'bills'"
      xmlns="http://www.w3.org/2000/svg"
      width="15.2"
      height="15.6"
      viewBox="0 0 15.2 15.6"
    >
      <path
        id="bills"
        data-name="bills"
        d="M13.761,15.6H1.04A1.041,1.041,0,0,1,0,14.56V1.04A1.042,1.042,0,0,1,1.04,0H13.761A1.042,1.042,0,0,1,14.8,1.04V2.6H6.115A1.041,1.041,0,0,0,5.076,3.64V11.96A1.041,1.041,0,0,0,6.115,13H14.8V14.56A1.041,1.041,0,0,1,13.761,15.6Zm.4-4.16H8.078a1.041,1.041,0,0,1-1.04-1.04V5.2a1.042,1.042,0,0,1,1.04-1.04H14.16A1.042,1.042,0,0,1,15.2,5.2v5.2A1.041,1.041,0,0,1,14.16,11.44ZM9.6,6.46a.521.521,0,0,0-.52.52V8.628a.521.521,0,0,0,.52.52h1.466a.521.521,0,0,0,.52-.52V6.98a.521.521,0,0,0-.52-.52Z"
      />
    </svg>
    <svg
      v-if="name == 'record'"
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="edit"
      class="svg-inline--fa fa-edit fa-w-18"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
      />
    </svg>
    <svg
      v-if="name == 'history'"
      xmlns="http://www.w3.org/2000/svg"
      width="14.405"
      height="15.751"
      viewBox="0 0 14.405 15.751"
    >
      <path
        id="history"
        data-name="history"
        d="M0,8.548a7.216,7.216,0,0,1,5.462-6.99L5.644.268A.312.312,0,0,1,5.953,0H8.465a.313.313,0,0,1,.31.269L8.952,1.56A7.2,7.2,0,1,1,0,8.548ZM6.242,4.568V9.527H8.163l-1.914,0h0l4.659,1.7a.52.52,0,0,0,.667-.311l.3-.827a.521.521,0,0,0-.311-.667l-3.4-1.235V4.568a.52.52,0,0,0-.52-.52h-.88A.52.52,0,0,0,6.242,4.568Z"
      />
    </svg>
    <svg
      v-if="name == 'category'"
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="elementor"
      class="svg-inline--fa fa-elementor fa-w-14"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        d="M425.6 32H22.4C10 32 0 42 0 54.4v403.2C0 470 10 480 22.4 480h403.2c12.4 0 22.4-10 22.4-22.4V54.4C448 42 438 32 425.6 32M164.3 355.5h-39.8v-199h39.8v199zm159.3 0H204.1v-39.8h119.5v39.8zm0-79.6H204.1v-39.8h119.5v39.8zm0-79.7H204.1v-39.8h119.5v39.8z"
      />
    </svg>
    <svg
      v-if="name == 'settings'"
      xmlns="http://www.w3.org/2000/svg"
      width="15.787"
      height="15.787"
      viewBox="0 0 15.787 15.787"
    >
      <path
        id="settings"
        data-name="settings"
        d="M9.013,15.787H6.764a.312.312,0,0,1-.309-.269L6.22,13.811A6.072,6.072,0,0,1,4.9,13.25L3.512,14.3a.312.312,0,0,1-.409-.029l-1.59-1.59a.314.314,0,0,1-.028-.41l1.076-1.418a6.069,6.069,0,0,1-.513-1.275L.268,9.322A.314.314,0,0,1,0,9.013V6.764a.312.312,0,0,1,.269-.309l1.809-.248a6.084,6.084,0,0,1,.515-1.232l-1.1-1.463A.314.314,0,0,1,1.52,3.1l1.591-1.59a.311.311,0,0,1,.409-.028l1.457,1.1a6.029,6.029,0,0,1,1.234-.516L6.466.268A.313.313,0,0,1,6.774,0H9.023a.314.314,0,0,1,.31.269L9.58,2.061a6.059,6.059,0,0,1,1.255.515l1.441-1.084a.311.311,0,0,1,.408.028l1.591,1.591a.314.314,0,0,1,.028.409L13.225,4.942a6.092,6.092,0,0,1,.537,1.276l1.757.248a.313.313,0,0,1,.268.309V9.023a.31.31,0,0,1-.269.31l-1.73.238a6.121,6.121,0,0,1-.535,1.319L14.3,12.276a.313.313,0,0,1-.029.408l-1.59,1.591a.314.314,0,0,1-.41.028L10.9,13.269a6.023,6.023,0,0,1-1.342.558l-.239,1.692A.314.314,0,0,1,9.013,15.787ZM7.918,5.99a1.951,1.951,0,1,0,1.929,1.95A1.942,1.942,0,0,0,7.918,5.99Z"
      />
    </svg>
    <svg
      v-if="name == 'ellipsis-v'"
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
    <svg
      v-if="name == 'list'"
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
    <svg
      v-if="name == 'grid'"
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
    <svg
      v-if="name == 'vtb'"
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
    <svg
      v-if="name == 'search'"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="search"
      class="svg-inline--fa fa-search fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
      />
    </svg>
    <svg
      v-if="name == 'exclamation'"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="exclamation-circle"
      class="svg-inline--fa fa-exclamation-circle fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
      />
    </svg>
    <svg
      v-if="name == 'user'"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="user"
      class="svg-inline--fa fa-user fa-w-14"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
      />
    </svg>
    <svg
      v-if="name == 'pencil'"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="pencil-alt"
      class="svg-inline--fa fa-pencil-alt fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
      />
    </svg>
    <svg
      v-if="name == 'check'"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="check"
      class="svg-inline--fa fa-check fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
      ></path>
    </svg>
    <svg
      v-if="name == 'times'"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="times"
      class="svg-inline--fa fa-times fa-w-11"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 352 512"
    >
      <path
        fill="currentColor"
        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>
