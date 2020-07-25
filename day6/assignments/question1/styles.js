console.log("Styles");

// const colours = ["red", "blue", "green", "yellow", ""];
// document.body.style.backgroundColor = "blue"
// setTimeout(colours.forEach(colour=>colour), 1000);

function setBackground(){
    window.setTimeout( "setBackground()", 5000);
    var index = Math.round(Math.random() * 9);
    var ColorValue = "#E6A9EC";
    if(index == 1)
    ColorValue = "FFCCCC";
    if(index == 2)
    ColorValue = "CCAFFF";
    if(index == 3)
    ColorValue = "A6BEFF";
    if(index == 4)
    ColorValue = "99FFFF";
    if(index == 5)
    ColorValue = "D5CCBB";
    if(index == 6)
    ColorValue = "99FF99";
    if(index == 7)
    ColorValue = "FFFF99";
    if(index == 8)
    ColorValue = "FFCC99";
    if(index == 9)
    ColorValue = "CCCCCC";
    document.bgColor=ColorValue;
}