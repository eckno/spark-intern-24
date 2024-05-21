
//you can add more colors to the array to display them.
const colors = ["red", "green", "orange"];
const h1 = document.getElementById("heading");

var array_num = colors.length;
var start_num = 0;

function colorChanger(color, element) {
    element.style.backgroundColor = `${color[start_num]}`;
    start_num += 1;

    if (start_num >= array_num) {
        start_num = 0;
    }
}

// Pass the function reference to setInterval
setInterval(() => colorChanger(colors, h1), 1000);
