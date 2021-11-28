


let items = [
    {"a" : "b"},
    {"b" : "c"},
]



let grid = document.getElementById("grid")

for (var i = items.length - 1; i >= 0; i--) {
    let itemName = Object.keys(items[i])
    let itemLink = Object.values(items[i])

    let item = document.createElement("p")
    
    item.textContent = itemName
    item.id = itemLink
    item.classList.add("grid-item")

    item.addEventListener("click", function() {
        console.log("hi")
    })

    grid.append(item)
}