var app = new Vue({
  el: '#quotecards',
  components: { Swatches: window.VueSwatches.default } ,
  data: {
    quote: "'The only people who ever get anyplace interesting are the people who get lost.' -- Henry David Thoreau. ",
    boxWidth: 600,
    boxHeight: 450,
    padding: 20,
    bgColor: "#34495e",
    color: "#CCCCCC",
    lineHeight: 24
  }
})
