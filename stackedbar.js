var ctx = document.getElementById('myChart').getContext('2d');
//var marked = require('marked');
//console.log(marked('i am using __markdown__.'));
//const {usdata}  = require('./sortedata');
//const z = require("zebras")

//console.log(usdata);

const mydata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
       {
        label: 'dataone',
        backgroundColor: ['rgb(255, 99, 132)',
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)',],
        borderColor: 'rgb(255, 99, 132)',
        data: [9, 10, 5, 2, 20, 30, 45]
    }, 
    
    {
        label: 'datatwo',
        backgroundColor: 'rgb(0, 99, 132)',
        borderColor: 'rgb(0, 99, 132)',
        data: [6, 5, 4, 8, 15,]
    }
    
    ]
}


var stackedBar = new Chart(ctx, {
    type: 'bar',
    data: mydata,
    options: {
        legend: {
            display: true,
            fullWidth: true,
            position: 'bottom',
        }
/*        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    */
    }
});
