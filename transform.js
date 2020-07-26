//var ctx = document.getElementById('penaltyChart').getContext('2d');
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
    return { banks: labels, totals: data};
}

var datums = mydata();

var mybanks = datums.banks
var mytotals = datums.totals

console.log(mybanks);
console.log(mytotals);


const mdata = {
        labels: mybanks,
        datasets: [{
            label: 'dataone',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: mytotals,
        }]
}

/*
var stackedBar = new Chart(ctx, {
      type: 'horizontalBar',
      data: mdata,
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
*/
 



