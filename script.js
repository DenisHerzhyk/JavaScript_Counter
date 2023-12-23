let count = 0;

document.getElementById("value").innerHTML = count;


function color() {
    if (count === 0) 
        document.getElementById("value").style.color = "rgb(0,0,0)";
    else if (count < 0) 
        document.getElementById("value").style.color = "rgb(256,0,0)";
    else if (count > 0)    
        document.getElementById("value").style.color = "rgb(0,256,0)";
}
function increace() {
    count += 1;
    document.getElementById("value").innerHTML = count;
    color();
}

function decreace() {
    count -= 1;
    document.getElementById("value").innerHTML = count;
    color();
}

function reset() {
    count = 0;
    document.getElementById("value").innerHTML = count;
    color();
}