function compute() {

    var principal = document.getElementById("amountOne").value 
    var interestRate = document.getElementById("rate").value
    var years = document.getElementById("noYears").value
    var InterestValue = principal * interestRate * years *.01 + Number(principal);// this is still wrong
    var x = new Date().getFullYear();
    var futureDate = Number(x) + Number(years); 

    document.getElementById("answer1").innerHTML = "If you deposit $" + principal;
    document.getElementById("answer2").innerHTML = "At a rate of " + interestRate + '%';
    document.getElementById("answer3").innerHTML = "You'll recieve the amount of $" + interestEarned
    document.getElementById("answer4").innerHTML = "In the year " + futureDate
}  
