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

// Сделать так: href у ссылки указывает на изображение (чтобы ПКМ мог сохранить картинку),
// а реальный сайт хранится в data-target. При обычном (левом) клике открываем data-target.
document.addEventListener('DOMContentLoaded', () => {
    const btnLinks = document.querySelectorAll('.buttons-grid a[data-target]');
    btnLinks.forEach(a => {
        a.addEventListener('click', (e) => {
            // Оставляем поведение для средних кнопок / ПКМ — обработчик click срабатывает только для левой кнопки
            e.preventDefault();
            const target = a.getAttribute('data-target');
            if (target) {
                window.open(target, '_blank', 'noopener');
            }
        });
    });
});