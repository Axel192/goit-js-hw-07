const items = document.querySelectorAll(".item")
 console.log(`В списке ${items.length} категории.`)
items.forEach(item => {
    const categories = item.querySelector("h2")
    console.log(`Категория: ${categories.innerText}` )
    const list = item.querySelectorAll('li')
    console.log (`Количество элементов: ${list.length}`)

})