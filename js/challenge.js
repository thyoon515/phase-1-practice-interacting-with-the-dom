document.addEventListener("DOMContentLoaded", () => {

    const interval = setInterval(incrementCounter, 1000)

    const plus = document.getElementById("plus")
    plus.addEventListener("click", incrementCounter)

    const minus = document.getElementById("minus")
    minus.addEventListener("click", () => {
        let count = document.getElementById('counter')
        count.innerHTML = parseInt(count.innerHTML, 10) - 1 
    })
    const heart = document.getElementById("heart")
    let likesObj = {}
    let li = document.createElement("li")
    heart.addEventListener("click",() => {
        let counterValue = document.getElementById('counter').textContent
        if(likesObj[counterValue]){
            likesObj[counterValue] += 1
        } else {
            likesObj[counterValue] = 1
        }
        li.innerHTML = `${counterValue} has been liked ${likesObj[counterValue]}`
        let likesUl = document.querySelector(".likes")
        likesUl.appendChild(li)
    })
    const submit = document.getElementById("submit")
    const pause = document.getElementById("pause")
    pause.addEventListener("click", () => {
        if(pause.innerHTML === "resume"){
            pause.innerHTML = "pause"
           let interval = setInterval(incrementCounter, 1000)
        } else {
            pause.innerHTML = "resume"
            clearInterval(interval) 
        }
        minus.disabled = !minus.disabled
        plus.disabled = !plus.disabled
        heart.disabled = !heart.disabled
        submit.disabled = !submit.disabled
    })
    let form = document.getElementById("comment-form")
    form.addEventListener("submit", e => {
        e.preventDefault()
        const list = document.getElementById("list")
        const li = document.createElement("li")
        li.innerHTML = e.target[0].value
        list.appendChild(li)
        form.reset()
    })
})

function incrementCounter() {
    let count = document.getElementById('counter')
    count.innerHTML = parseInt(count.innerHTML, 10) + 1 
}

function like() {

}
