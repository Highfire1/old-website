



let items = [
    ["ice cream sandwich", "melona.png", 1, 0],
    ["melona", "melona.png", 1, 0],
    ["melona", "melona.png", 1, 0],
    ["melona", "melona.png", 1, 0],
    ["melona", "melona.png", 1, 0],
    ["melona", "melona.png", 1, 0],
]



let grid = document.getElementById("grid")

for (var i = items.length - 1; i >= 0; i--) {

    let div = document.createElement("div")

    let image = document.createElement("img")
    image.src = "assets/" + items[0][1]
    div.append(image)

    let item = document.createElement("p")
    
    item.textContent = items[i][0] + " $" + items[i][2]
    div.append(item)

    
    div.addEventListener("click", function() {
        console.log("hi")
    })

    div.classList.add("item")
    grid.append(div)
}