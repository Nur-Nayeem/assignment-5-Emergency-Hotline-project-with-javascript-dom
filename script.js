
function getValue(id) {
    return parseInt(document.getElementById(id).innerText)
}

function setValue(id, value) {
    document.getElementById(id).innerText = value;
}

const loveBtns = document.getElementsByClassName('love-btn');
let conuntLove = getValue("love-count");
for (const btn of loveBtns) {
    btn.addEventListener("click", function () {
        conuntLove += 1;
        setValue('love-count', conuntLove)
    })
}



// call button functionality:
const callBtns = document.getElementsByClassName("call-btn");
let historyCardSecction = document.getElementById("history-card-secction")
for (const btn of callBtns) {
    btn.addEventListener("click", function () {
        let currentCoin = getValue("total-coin")
        let name = btn.parentNode.parentNode.children[0].children[0].innerText;
        let number = btn.parentNode.parentNode.children[1].children[0].innerText;
        if (currentCoin >= 20) {
            alert("Calling...   " + name + "  (" + number + ")");
            currentCoin -= 20;
            setValue('total-coin', currentCoin)
            const newCard = document.createElement('div');
            newCard.innerHTML = `
            
                 <div class="bg-[#FAFAFA] h-[86px] flex items-center justify-between p-4 rounded-lg">
                        <div>
                            <h2>${name}</h2>
                            <p>${number}</p>
                        </div>
                        <div>11:36:58 AM</div>
                    </div>
            
            `
            historyCardSecction.append(newCard)
        }
        else {
            alert("You don't have sufficient coins!")
        }
    })
}



// history clear functionality

const clearBtn = document.getElementById("clear-btn")
clearBtn.addEventListener("click", function () {
    historyCardSecction.innerHTML = ""
})



//Copy button functionality
const copyBtns = document.getElementsByClassName("copy-btn");
let copyCount = getValue("copy-count");
for (const btn of copyBtns) {
    btn.addEventListener("click", function () {
        copyCount += 1;
        setValue("copy-count", copyCount)
        let number = btn.parentNode.parentNode.children[1].children[0].innerText;
        if (number) {
            navigator.clipboard.writeText(number)
        }
        else {
            console.log("faild to copy");

        }

    })

}

