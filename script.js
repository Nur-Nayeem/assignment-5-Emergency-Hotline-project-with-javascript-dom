const loveBtns = document.getElementsByClassName('love-btn');

function getValue(id) {
    return parseInt(document.getElementById(id).innerText)
}

function setValue(id, value) {
    document.getElementById(id).innerText = value;
}

let conuntLove = getValue("love-count");
for (const btn of loveBtns) {
    btn.addEventListener("click", function () {
        conuntLove += 1;
        setValue('love-count', conuntLove)
    })
}