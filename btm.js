const input = document.getElementById('phoneInput');
const validTxt = document.getElementById('validMsg');
const invalidTxt = document.getElementById('invalidMsg');
const btn = document.getElementById('btnSubmit');

input.addEventListener('input', () => {
    const val = input.value.trim();
    const isValid = /^0\d{9}$/.test(val);

    if (val === "") {
        validTxt.innerText = "Hợp lệ:";
        invalidTxt.innerText = "Không hợp lệ:";
        btn.disabled = true;
        return;
    }

    if (isValid) {
        validTxt.innerText = "Hợp lệ: " + val;
        invalidTxt.innerText = "Không hợp lệ:";
        btn.disabled = false;
        btn.classList.add('active');
    } else {
        validTxt.innerText = "Hợp lệ:";
        invalidTxt.innerText = "Không hợp lệ: " + val;
        btn.disabled = true;
        btn.classList.remove('active');
    }
});