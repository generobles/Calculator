const checkbox = document.getElementById('switch');
const numButtons = document.querySelectorAll('.num');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const equalsButton = document.getElementById('equal');


checkbox.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementById('input').innerHTML += button.textContent;
    })
})

clearButton.addEventListener('click', () => {
    document.getElementById('input').innerHTML = "";
    document.getElementById('output').innerHTML = "";
})

deleteButton.addEventListener('click', () => {
    let text = document.getElementById('input').innerHTML;
    document.getElementById('input').innerHTML = text.slice(0, -1);
})

equalsButton.addEventListener('click', () => {
    const inputDisp = document.getElementById('input').textContent;
    let answer = eval(inputDisp);
    document.getElementById('output').innerHTML = "=" + answer;
})

