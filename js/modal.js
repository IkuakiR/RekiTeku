document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const modalBackground = document.querySelector('.modal-background');
    const buildingLinks = document.querySelectorAll('.building_main a');

    // リンクをクリックした際にモーダルを表示
    buildingLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            modal.style.display = 'block';
            document.body.classList.add('modal-open');
        });
    });

    // モーダル内の要素をクリックした場合、モーダルが閉じないようにする
    modal.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const modalBackground = document.querySelector('.modal-background');
    const centuryLinks = document.querySelectorAll('.century_main a');

    // リンクをクリックした際にモーダルを表示
    centuryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            modal.style.display = 'block';
            document.body.classList.add('modal-open');
        });
    });

    // モーダル内の要素をクリックした場合、モーダルが閉じないようにする
    modal.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.modal');
    const closeButton = document.querySelector('.modal .close-button');

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    });
});