// all items
// 0 - item name
// 1 - src file
// 2 - cost
// 3 - amount bought
// 4 - amount in basket

let items = [
    ["ice cream sandwich", "sandwich.png", 1, 0, 0],
    ["melona", "melona.png", 1, 0, 0],
    ["chips", "chips.png", 1, 0, 0],
    ["granola bar", "error.png", 2, 0, 0],
    ["cheap drink", "error.png", 1, 0, 0],
    ["pricy drink", "error.png", 2, 0, 0],
]

// int to money string
const formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 2
})

function reloadGrid() {
    
    let oldgrid = document.getElementById("grid")
    let newgrid = document.createElement("div")
    newgrid.id = "grid"

    for (var i = 0; i < items.length; i++) {

        let div = document.createElement("div")

        let image = document.createElement("img")
        image.src = "assets/" + items[i][1]
        div.append(image)

        let item = document.createElement("p")
        
        item.textContent = items[i][0] + " | $" + items[i][2] + " | " + items[i][3]
        div.append(item)
        
        div.id = i;
        div.addEventListener("click", function() {
            items[this.id][4] += 1
            reloadAll()
            //item.textContent = items[this.id][0] + " | $" + items[this.id][2] + " | " + items[this.id][3]
        })

        div.classList.add("item")
        newgrid.append(div)
    }
    oldgrid.replaceWith(newgrid)
}

function reloadCart() {
    let cost = 0

    let oldcart = document.getElementById("purchaseslist")
    let newcart = document.createElement("div")
    newcart.id = "purchaseslist"

    for (var i = 0; i < items.length; i++) {
        
        if(items[i][4] <= 0) {
            continue
        }

        let item = document.createElement("p")

        item.textContent = items[i][0] + " " + items[i][4]

        item.classList.add("item")
        item.addEventListener("click", function() {
            items[this.id][4] -= 1
            reloadAll()
        })
        newcart.appendChild(item)
        
        cost += items[i][2] * items[i][4]
    }

    //document.getElementById("purchasesdiv").replaceChild(newcart, oldcart)
    oldcart.replaceWith(newcart)

    document.getElementById("pbalance").textContent = "Total: " + formatter.format(cost)
}

function checkout() {
    for (var i = 0; i < items.length; i++) {
        items[i][3] += items[i][4]
        items[i][4] = 0
    }
    reloadAll()
}


function reloadAll() {
    reloadGrid()
    reloadCart()

    let cost = 0
    for (var i = 0; i < items.length; i++) {
        cost += items[i][3]
    }
    document.getElementById("total").textContent = "Day's total: " + formatter.format(cost)

    // download setup
    let csvContent = "data:text/csv;charset=utf-8,";
    items.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });
    let encodedUri = encodeURI(csvContent);
    let link = document.getElementById("download")
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
}


document.getElementById("pcheckout").addEventListener("click", checkout);
reloadAll()

