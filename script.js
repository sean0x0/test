let count = 0;
const value = document.querySelector("#value");
const addButton = document.querySelector("#add");
const minusButton = document.querySelector("#minus");
const resetButton = document.querySelector("#reset");

// 按下 +1 的按鈕事件
addButton.addEventListener("click", function() {
    count = count + 1;
    value.textContent = count;
});

// 按下 -1 的按鈕事件
minusButton.addEventListener("click", function() {
    count = count - 1;
    value.textContent = count;
});

// 按下 歸零 的按鈕事件
resetButton.addEventListener("click", function() {
    count = 0;
    value.textContent = count;
});