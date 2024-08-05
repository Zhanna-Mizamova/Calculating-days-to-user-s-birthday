function calculateDays() {
    let birthdayInput = document.getElementById('birthday');
    let result = document.getElementById('result');
    let error = document.getElementById('error');

    if (!birthdayInput.value) {
        error.style.display = 'block';
        result.textContent = '';
        return;
    } else {
        error.style.display = 'none';
    }

    var today = new Date();
    var birthday = new Date(birthdayInput.value);
    birthday.setFullYear(today.getFullYear());

    if (birthday < today) {
        birthday.setFullYear(today.getFullYear() + 1);
    }

    let diffTime = birthday - today;
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let dayWord;
    if (diffDays % 10 === 1 && diffDays % 100 !== 11) {
        dayWord = 'день';
    } else if ([2, 3, 4].includes(diffDays % 10) && ![12, 13, 14].includes(diffDays % 100)) {
        dayWord = 'дня';
    } else {
        dayWord = 'дней';
    }

    result.textContent = 'До вашего дня рождения осталось ' + diffDays + ' ' + dayWord;
}