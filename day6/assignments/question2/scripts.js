console.log("Tables");

const num = prompt("Enter the number to print the multiplication table");
// const numTable = Array.from(Array(num).keys());
// console.log(numTable);


function printTable(num) {
    var input = num.value;
    if(!isNaN(input)) {
        var table="";
        var number="";
        for(i=1;i<=10;i++) {
            number = input * i;
            table +=  input + " * " + i + " = " + number + "<br/>";
        }
        document.getElementById("tab").innerHTML = table;
    }
    else {
        document.getElementById("tab").innerHTML = "Please Enter a valid Number";
    }
}