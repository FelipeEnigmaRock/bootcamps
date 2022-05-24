const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const footer = document.querySelector('footer');

console.log(body);

button.addEventListener('click', changeAll)

function changeMode() {
    body.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    button.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');

}
function changeText() {
    if (body.classList.contains('dark-mode')) {
        h1.innerHTML = 'Dark Mode ON';
        button.innerHTML = 'Light Mode'
    } else {
        h1.innerHTML = 'Light Mode ON';
        button.innerHTML = 'Dark Mode'
    }
}

function changeAll() {
    changeMode();
    changeText();
}