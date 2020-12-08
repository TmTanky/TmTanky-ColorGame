const colorRan = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 0, 255)", "rgb(0, 128, 0)"]
const msg = document.querySelector(`.msg`)
const resetBtn = document.querySelectorAll(`.btn`)


setTimeout(function(){
    ranNum = Math.floor(Math.random() * 4 )
}, 5000)

function pickColor() {
    const boxes = document.querySelectorAll(`.colorbox`)
    for (const box of boxes) {
        box.addEventListener(`click`, () => {
            const styles = getComputedStyle(box)
            console.log(`Color is ${styles.backgroundColor}`)
            if (styles.backgroundColor === colorRan[ranNum]) {
                console.log(`You win`)

                // setTimeout(function(){
                    msg.innerHTML = `<h1> You win! <h1>`
                // }, 1000)
            } else {
                console.log(`Try again`)
            }
        })
    }
}

pickColor()

















