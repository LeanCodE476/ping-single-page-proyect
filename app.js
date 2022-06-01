const errText = document.getElementById("error-text");
const btn = document.getElementById("btn");
const input = document.getElementById("input")

btn.addEventListener('click', () => {
    let val = input.value
    let exp =
        /^[a-z0-9!#$%&'+/=?^`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(val);
    if (exp === false || val.length === 0) {
        errText.style.display = "block"
        input.classList.add('active')
    }
    else {
         errText.style.display = "none";
         input.classList.remove("active");
    }
})