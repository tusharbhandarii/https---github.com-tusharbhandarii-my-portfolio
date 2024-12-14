let DayNightMode = function() {
    const toggle = document.getElementById('day-night');
    const body = document.querySelector('body');
    const socialElements = document.getElementsByClassName('fa-brands');

    toggle.addEventListener('click', function() {
        const isDayMode = this.style.backgroundColor === 'black';

        this.style.background = isDayMode ? 'white' : 'black';
        body.style.background = isDayMode ? 'black' : '#f5f5f5';
        body.style.color = isDayMode ? 'white' : 'black';
        body.style.transition = '1s';

        Array.from(socialElements).forEach(element => {
            element.style.color = isDayMode ? 'white' : 'black';
            element.style.transition = '1s';
        });

    });
}

DayNightMode();