const tabs = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault(); // Отменяем стандартный переход по ссылке

        const targetId = tab.getAttribute('href').replace('#', '');

        // 1. Убираем класс active у всех вкладок и секций
        tabs.forEach(t => t.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));

        // 2. Добавляем active текущей вкладке и нужной секции
        tab.classList.add('active');
        document.getElementById(targetId).classList.add('active');
    });
});

// По умолчанию открываем первую вкладку (About/Index)
document.addEventListener('DOMContentLoaded', () => {
    tabs[0].click();
});