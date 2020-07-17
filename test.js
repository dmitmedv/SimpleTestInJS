// Получение доступа к кнопке "Завершить тест"
let button = document.getElementById("finish");

// Назначение обработчика клика по кнопке
button.addEventListener("click", checkTest);

// Функция проверки теста
function checkTest() {

    // Объявление переменной для подсчета правильных ответов
    let result = 0;

    // Проверка первого вопроса
    let a1 = document.getElementById("q1").value;
    if (a1 === "4") {
        result = result + 1;
    } // being knowing only this you can create the full test

    // 2 вопрос
    let a2 = document.getElementById("q2").value;
    if (a2 === "3.1") {
        result = result + 1;
    }

    // 3 вопрос
    // Получить значение выбранного пункта из тегов <input> с атрибутом "name" равным "q3"
    let a3 = document.querySelector("input[name=q3]:checked").value;
    if (a3 === "2") {
        result = result + 1;
    }

    // 4 вопрос
    // Получить значение выбранного пункта из тегов <input> с атрибутом "name" равным "q4"
    let a4 = document.querySelector("input[name=q4]:checked").value;
    if (a4 === "1") {
        result = result + 1;
    }

    // 5 вопрос
    let a5 = document.getElementById("q5").value;
    if (a5 === "read") {
        result = result + 1;
    }

    // 6 вопрос
    let a6 = document.getElementById("q6").value;
    if (a6 === "art") {
        result = result + 1;
    }

    // 7 вопрос
    let a7v1 = document.getElementById("q7v1").checked;
    let a7v2 = document.getElementById("q7v2").checked;
    let a7v3 = document.getElementById("q7v3").checked;
    let a7v4 = document.getElementById("q7v4").checked;

    if (a7v1 === true && a7v2 === true && a7v3 === true && a7v4 === false) {
        result = result + 1;
    }

    // 8 вопрос
    let a8v1 = document.getElementById("q8v1").checked;
    let a8v2 = document.getElementById("q8v2").checked;
    let a8v3 = document.getElementById("q8v3").checked;
    let a8v4 = document.getElementById("q8v4").checked;

    if (a8v1 === true && a8v2 === true && a8v3 === true && a8v4 === true) {
        result = result + 1;
    }


    // 9 вопрос
    let a9 = document.querySelector("input[name=q9]:checked").value;
    if (a9 === "squareroot") {
        result = result + 1;
    }

    // 10 вопрос
    let a10v1 = document.getElementById("q10v1").checked;
    let a10v2 = document.getElementById("q10v2").checked;
    let a10v3 = document.getElementById("q10v3").checked;
    let a10v4 = document.getElementById("q10v4").checked;

    if (a10v1 === true && a10v2 === true && a10v3 === true && a10v4 === false) {
        result = result + 1;
    }

    // Вывод результата
    alert("Результат: " + result);
}