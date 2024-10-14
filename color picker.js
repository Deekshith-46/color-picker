let containerBgColor = document.getElementById("colorPickerContainer");
let colorHexCode = document.getElementById("selectedColorHexCode");

function firstButtonEvent() {
    containerBgColor.style.backgroundColor = "#e0e0e0";
    colorHexCode.textContent = "#e0e0e0";
}

function secondButtonEvent() {
    containerBgColor.style.backgroundColor = "#6fcf97";
    colorHexCode.textContent = "#6fcf97";
}

function thirdButtonEvent() {
    containerBgColor.style.backgroundColor = "#56ccf2";
    colorHexCode.textContent = "#56ccf2";
}

function fourthButtonEvent() {
    containerBgColor.style.backgroundColor = "#bb6bd9";
    colorHexCode.textContent = "#bb6bd9";
}