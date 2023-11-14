let items = [
    ["earthquake", "https://i2.wp.com/historicnewsclippings.com/wp-content/uploads/2017/06/p1030981.jpg?resize=640%2C480", 0],
    ["volcano", "https://upload.wikimedia.org/wikipedia/commons/9/91/Kostal_Volcano.jpg", 0],
    ["flooding", "http://images.dailyhive.com/20181029005243/vancouver-flooding-parking-lot-october-28-2018.jpg", 1],
    ["landslide", "https://smartcdn.prod.postmedia.digital/nationalpost/wp-content/uploads/2021/11/mudslide.jpg", 1],
    ["tsunami", "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/06/11/tsunami-1.jpg?width=640&auto=webp&quality=75", 0],

    ["bushfire", "https://i.cbc.ca/1.4798105.1553011075!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/b-c-wildfire.jpg", 1],
    ["tornado", "https://i.cbc.ca/1.6240276.1636422315!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/waterspout-spotted-in-vancouver-saturday-nov-6-2021.jpg", 1],
    ["drought", "https://i.cbc.ca/1.5178084.1560777869!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_780/french-creek.JPG", 1],
    ["snowstorm", "https://www.ctvnews.ca/polopoly_fs/1.3771232.1516675596!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg", 1],
    ["beach erosion", "https://images.thestar.com/ugdGThhzKSCiJH6CZ62qCZuCTcs=/1086x728/smart/filters:cb(2700061000)/https://www.thestar.com/content/dam/thestar/life/travel/2010/07/05/beauty_and_the_beach_in_bamfield_bc/bradys_beach_bamfield_bctravel.jpeg", 1],

    ["oil spill", "https://i.cbc.ca/1.3818012.1524258787!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/oil-bleeding-off-bella-bella-spill-near-sunken-tug.jpg", 1],
    ["iceberg", "https://www.castanet.net/content/2017/7/CPT105414921_p3233631.jpg", 0],
    ["flash flood", "https://www.vmcdn.ca/f/files/victoriatimescolonist/json/2021/11/web1_11142021-highway1-flooding.jpg", 1],
    ["dust storm", "https://i.ytimg.com/vi/1iC4fB1Mmnc/maxresdefault.jpg", 0],

    ["heatwave", "https://vancouver.citynews.ca/wp-content/blogs.dir/sites/9/2021/06/22/heat-6.jpg", 1],
    ["atmospheric river", "https://globalnews.ca/wp-content/uploads/2021/10/weather-1.png", 1],
    ["mid latitude storm", "https://globalnews.ca/wp-content/uploads/2021/10/bomb-cyclone.png", 1],
    ["ice at shore", "https://www.ctvnews.ca/polopoly_fs/1.2853380.1460336576!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg", 0],
    ["regional flood", "https://i.guim.co.uk/img/media/34de2008c93bf413c22ec79c71bde29d92d1499e/0_71_1079_647/master/1079.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=57bb39a581400c47ae3d6fe8bd7d5f1b", 1],

    ["avalanche", "https://i.ytimg.com/vi/mpYKVBssXew/maxresdefault.jpg", 1],
    ["thunderstorm", "http://images.dailyhive.com/20170504105523/shutterstock_255603052.jpg", 1],
    ["debris avalanche", "https://ars.els-cdn.com/content/image/1-s2.0-S001379520500222X-gr2.jpg", 0],
    ["hail", "https://globalnews.ca/wp-content/uploads/2017/07/hail1.jpg?quality=85&strip=all&w=720", 1],
    ["sea level rise", "https://globalnews.ca/wp-content/uploads/2019/10/updated-data.png", 1],
]

// thanks, stackoverflow
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffleArray(items)

items.splice(12, 0, ["FREE", "https://mediacloud.kiplinger.com/image/private/s--78W5itpk--/f_auto,t_primary-image-mobile@1/v1582660079/slideshow/saving/T063-S001-70-valuable-things-you-can-get-for-free/images/intro.jpg", 1])


let grid = document.getElementById("grid")

for (var i = 0; i < items.length; i++) {

    let image = document.createElement("img")
    image.src = items[i][1]

    let txt = document.createElement("p")
    txt.textContent = items[i][0]
    txt.classList.add("centered")

    let div = document.createElement("div")

    div.appendChild(image)
    div.appendChild(txt)
    div.classList.add("itemdiv")

    if (items[i][2] == 1) {
        div.classList.add("green")
    }

    grid.appendChild(div)
    
}
