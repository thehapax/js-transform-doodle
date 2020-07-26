var ctx = document.getElementById('penaltyChart').getContext('2d');
const z = require("zebras")
const {usdata}  = require('./sortedata');

function mydata() {   
    var mynodes = usdata.data.allAirtable.nodes
    var keys = Object.keys(mynodes)
    var df = [];
    for (n=0; n < keys.length; n++) {
      df.push(usdata.data.allAirtable.nodes[n].data)
    }  
    const summed = z.gbSum("Penalty_amount_in_native_currency", z.groupBy(d => d.Business_Name, df))
    const labels = z.getCol("group", summed)
    // console.log(labels)
    const data = z.getCol("sum", summed)
    //console.log(data)
    var len = labels.length
    return { banks: labels, totals: data, length: len };
}

var datums = mydata();

var mybanks = datums.banks
var mytotals = datums.totals
var size = datums.length
var currency = 'USD'

console.log(mybanks);
console.log(mytotals);
console.log(size)

var colors = [
'rgba(255, 99, 132, 0.7)',
'rgba(54, 162, 235, 0.7)',
'rgba(255, 206, 86, 0.7)',
'rgba(75, 192, 192, 0.7)',
'rgba(153, 102, 255, 0.7)',
'rgba(255, 159, 64, 0.7)',
]

var newcolor = [];
var repeat = Math.floor(size/6) +1
console.log("repeater")
console.log(repeat)

for (i=0; i < repeat; i++) {
  for (n = 0 ; n< 6; n++)
    newcolor.push(colors[n])
}
//console.log(newcolor)


const mdata = {
        labels: mybanks,
        datasets: [{
            label: 'Penalty in '+currency,
            backgroundColor: newcolor,
            borderColor: 'grey',
            borderWidth: 0.5,
            data: mytotals,
        }]
}


var stackedBar = new Chart(ctx, {
      type: 'pie',
      data: mdata,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
          display: true,
          fullWidth: true,
          position: 'left',
      },
      
    }
});




