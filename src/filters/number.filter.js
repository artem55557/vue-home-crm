export default function numberWithSpaces(x) {
  x = x.toFixed(2)
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}