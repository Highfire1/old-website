let items = [
    ["ice cream sandwich", "sandwich.png", 1, 0],
    ["melona", "melona.png", 1, 0],
    ["chips", "melona.png", 1, 0],
    ["granola bar", "melona.png", 2, 0],
    ["drink", "melona.png", 2, 0],
    ["pricy drink", "melona.png", 2, 0],
]



let grid = document.getElementById("grid")

for (var i = 0; i <= items.length; i++) {

    let div = document.createElement("div")

    let image = document.createElement("img")
    image.src = "assets/" + items[i][1]
    div.append(image)

    let item = document.createElement("p")
    
    item.textContent = items[i][0] + " | $" + items[i][2] + " | " + items[i][3]
    div.append(item)
    
    div.id = i;
    div.addEventListener("click", function() {
       items[this.id][3] += 1
       item.textContent = items[this.id][0] + " | $" + items[this.id][2] + " | " + items[this.id][3]
    })

    div.classList.add("item")
    grid.append(div)
}