
var i = 1;                  //  set your counter to 1
function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    console.log('hello');   //  your code here
    i++;                    //  increment the counter
    if (i < 10) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 3000)
}


    /*
    console.log("group by ")
    const df = [{"Day": "Monday", "value": 10}, {"Day": "Tuesday", "value": 5}, {"Day": "Monday", "value": 7}]
    const grouped = z.groupBy(x => x.Day, df)
    console.log(z.print(df))
    console.log(grouped)
    console.log(grouped.Monday)
    */


    //myLoop();                   //  start the loop
//    const df = [{"label": "A", "value": 7}, {"label": "B", "value": 2}]
//    const series = ["2010-12-15", "2010-12-16"]
//    z.addCol("date", series, df)




