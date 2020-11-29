let count = 0;
const value = document.querySelector("#value");
const addButton = document.querySelector("#add");
const minusButton = document.querySelector("#minus");
const resetButton = document.querySelector("#reset");

// 按下 +1 的按鈕事件
addButton.addEventListener("click", () => {
    count = count + 2;
    value.textContent = count;
});

// 按下 -1 的按鈕事件
minusButton.addEventListener("click", () => {
    count = count - 2;
    value.textContent = count;
});

// 按下 歸零 的按鈕事件
resetButton.addEventListener("click", () => {
    count = 0;
    value.textContent = count;
});