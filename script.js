var colors = ["Orangered","Blue","Yellow","Green","Orange", "Cyan","DodgerBlue", "Violet", "Navy", "Purple", "YellowGreen", "OrangeRed", "SlateBlue", "Salmon", "Crimson", "HotPink", "Magenta"];
var index = 0;

var elem = document.getElementById("para1");

function changeColor()
{
    if(index > colors.length - 1)
    index = 0;
    document.body.style.backgroundColor = colors[index++];
    elem.style.background = colors[index-1];
}