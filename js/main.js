

// OCLOCK

document.addEventListener('DOMContentLoaded', () => {
    const oclockTime = document.querySelector('.oclock__time');

    function updateOclock () {
        const nowTime = new Date();
        const hours = nowTime.getHours().toString().padStart(2, '0');
        const minutes = nowTime.getMinutes().toString().padStart(2, '0');
        const seconds = nowTime.getSeconds().toString().padStart(2, '0');
        oclockTime.textContent = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateOclock, 1000);
});
