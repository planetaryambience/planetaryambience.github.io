let typeText = document.querySelector(".typeText")
let text = 'Hello World!'

let index = 0
let isTyping = true

function helloWorld() {
    setTimeout(function () {
        typeText.innerText = text.slice(0, index)
        if (isTyping) {
            if (index <= text.length) {
                index++
            } else {
                isTyping = false;
                // wait 2 seconds before playing again
                setTimeout(function () {
                    helloWorld()
                }, 2000)
                return
            }
        } else {
            if (index === 0) {
                isTyping = true
            } else {
                index--
            }
        }
        helloWorld()
    }, 120)
}

helloWorld()