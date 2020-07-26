var ctx = document.getElementById('bubbleChart'); //.getContext('2d');

//Chart.defaults.global.defaultFontFamily = "Lato";
//Chart.defaults.global.defaultFontSize = 18;

var popData = {
    datasets: [{
      label: ['Deer Population'],
      data: [{
        x: 100,
        y: 0,
        r: 10
      }, {
        x: 60,
        y: 30,
        r: 20
      }, {
        x: 40,
        y: 60,
        r: 25
      }, {
        x: 80,
        y: 80,
        r: 50
      }, {
        x: 20,
        y: 30,
        r: 25
      }, {
        x: 0,
        y: 100,
        r: 5
      }],
      backgroundColor: "#9966FF",
      hoverBackgroundColor: "#000000",
      hoverBorderColor: "#9966FF",
      hoverBorderWidth: 5,
      hoverRadius: 5
    }]
};

var bubbleChart = new Chart(ctx, {
    type: 'bubble',
    data: popData,
//    options: chartOptions
});
