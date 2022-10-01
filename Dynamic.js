let select = document.querySelector(".b")

let list = document.querySelector(".c")

let degree = document.querySelector(".rotate")

let select_list = document.querySelectorAll(".select")

let heading = document.querySelector(".b h2")

select.addEventListener('click', () => {
    list.classList.toggle('d')
    degree.classList.toggle('rotate-down')
})

select_list.forEach(obj => {
    obj.addEventListener('click', event => {
        console.log(obj.textContent)
        console.log(event.target.textContent)
        heading.innerHTML = event.target.textContent
        list.classList.toggle('d')
        degree.classList.toggle('rotate-down')
    })
})