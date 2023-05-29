const dateIn = document.querySelector('#date-of-birth');
const luckyNum = document.querySelector('#lucky-number');
const checkBtn = document.querySelector('#check-btn');

checkBtn.addEventListener('click', () => {
    var dob = dateIn.value;
    var sum = calculateSUM(dob);
    luckyMeter(sum);
})

function calculateSUM(dob) {
    dob = dob.replaceAll('-', '');
    let sum = 0;
    
    for ( let i = 0; i < dob.length; i++ ) {
        sum = sum + Number(dob.charAt(i));
    }

    return sum;
}

function luckyMeter(sum) {
    if ( luckyNum.value.length === 0 || dateIn.value.length === 0) {
        outputBox.innerText = 'please enter both the fields! 🙁'
    }
    else {
        if ( sum % luckyNum.value === 0) {
            outputBox.innerText = 'yaey, your birthday is lucky 🎉';
        }
        else {
            outputBox.innerText = 'sad, your birthday is not so lucky! 😥';
        }
    }
}