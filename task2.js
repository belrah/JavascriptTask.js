const data = [
    {Principal: 2500, time: 1.8},
    {Principal: 1000, time: 5},
    {Principal: 3000, time: 1},
    {Principal: 2000, time: 3}
]
function interestCalculator(arr) {
    const interestData = [];
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].Principal >= 2500 && arr[i].time > 1 && arr[i].time < 3) {
            arr[i].rate = 3;
        } else if(arr[i].Principal >= 2500 && arr[i].time >= 3) {
            arr[i].rate = 4;
        } else if (arr[i].Principal < 2500 || arr[i].time <= 1) {
            arr[i].rate = 2;
        } else {
            arr[i].rate = 1;
        };
        //Calculated Interest to be assigned to a variable
        let calInterest = (arr[i].Principal * arr[i].rate * arr[i].time) / 100 ;
        
        //calculated interest should be assigned to the object
        arr[i].interest = calInterest;
        // console.log(arr[i]);
        interestData.push(arr[i]);
    }
}
interestCalculator(data);
