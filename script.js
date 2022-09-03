const checkbox = document.getElementById('switch');

checkbox.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})