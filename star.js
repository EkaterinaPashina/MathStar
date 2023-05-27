//Определение кнопки
const button = document.querySelector("button");

function removeTags(event) {

    //Получение значения комментария
    const textarea = document.querySelector("#text").value;

    //Очищение комметария от ненужных символов
    const removeSymbols = (text) => {
        const symbols = /(<([^>]+)>)/gi;
        result = text.replace(symbols, "");
        return result;
    };

    //Присвоение переменной значения без символов
    clearText = removeSymbols(textarea);

    //Создание нового параграфа с результатом
    const parent = document.querySelector('#result');

    let inputInfo = document.createElement('p');
    inputInfo.textContent = "Полученный текст: " + textarea;
    inputInfo.className = 'input__value';
    parent.appendChild(inputInfo);

    let newP = document.createElement('p');
    newP.textContent = "Текст без тегов: " + clearText;
    newP.className = 'result';
    parent.appendChild(newP);
}

button.addEventListener('click', removeTags);