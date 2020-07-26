var ctx = document.getElementById('myChart').getContext('2d');
//var marked = require('marked');
//console.log(marked('i am using __markdown__.'));
const {usdata}  = require('./sortedata');
//const z = require("zebras")

console.log(usdata);

const mydata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'dataone',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [9, 10, 5, 2, 20, 30, 45]
    }, {
        label: 'dataone',
        backgroundColor: 'rgb(0, 99, 132)',
        borderColor: 'rgb(0, 99, 132)',
        data: [6, 5, 4, 8, 15,]
    }]
}


var stackedBar = new Chart(ctx, {
    type: 'horizontalBar',
    data: mydata,
    options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});
