var block = document.getElementById("block");
var hole = document.getElementById("hole");
var char = document.getElementById("char");
var jumping = 0;
var counter = 0;

hole.addEventListener("animationiteration", () => {
    var random = Math.random() * 3;
    var top = (random * 100) + 150;
    hole.style.top = -(top) + "px";
    counter++;
});

setInterval(function () {
    var charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
    if (jumping == 0) {
        char.style.top = (charTop + 3) + "px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
    var cTop = -(500 - charTop);
    if ((charTop > 480) || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
        alert("Game Over . Score: " + counter);
        char.style.top = 100 + "px";
        counter = 0;
    }

}, 10);


function jump() {
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function () {
        var charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
        if ((charTop > 6) && (jumpCount < 15)) {
            char.style.top = (charTop - 5) + "px";
        }
        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;

    }, 10);
}