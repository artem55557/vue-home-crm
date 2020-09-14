export default function numberWithSpaces(x, y=2) {
  x = x.toFixed(y)
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}