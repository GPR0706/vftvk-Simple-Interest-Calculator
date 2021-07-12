function compute() {

    let principal = document.getElementById("amountOne").value 
    let interestRate = document.getElementById("rate").value
    let years = document.getElementById("noYears").value
    let interestEarned = principal * years * interestRate / 100;
    let d = new Date();
    let n = d.getFullYear();
    let futureDate = Number(n) + Number(years); 

    document.getElementById("answer1").innerHTML = "If you deposit $" + principal;
    document.getElementById("answer2").innerHTML = "At a rate of " + interestRate + '%';
    document.getElementById("answer3").innerHTML = "You'll recieve the amount of $" + interestEarned
    document.getElementById("answer4").innerHTML = "In the year " + futureDate
}   
