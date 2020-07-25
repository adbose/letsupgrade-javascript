console.log("Clock");

const name = prompt("Enter you name");
document.getElementById('greeting').innerHTML += `, ${name}!`;

function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
}
    
function display_ct() {
var x = new Date()
document.getElementById('clock').innerHTML = x;
display_c();
}