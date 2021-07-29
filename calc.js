var numField1 = document.getElementById("numField1")
var numField2 = document.getElementById("numField2")
var result = document.getElementById("result")

var form = document.getElementById("xisWhatPercentofY")

var printRes = document.getElementById('result')

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}


function myCalFunct(event) {

   // printRes.innerText = "";


    if (!numField1.value || !numField2.value) {
        alert("Please enter values for both fields")
    }
    else if (isNumeric(numField1.value) == false || isNumeric(numField2.value) == false) {
        alert("Make sure they are both numbers")
    }
    else {
        // alert("math") Working
        percentCalc()

    }
    
    function percentCalc() {
        let x = numField1.value;
        let y = numField2.value;
        var mid = (y/x) * 1.0
        var ans = 100.0/mid
        //alert("Your answer is " + ans + "%")
        printRes.innerText = ("Result " + ans + "%")

        
    }
    event.preventDefault()
    
}


form.addEventListener('submit', myCalFunct)








