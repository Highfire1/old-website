var blogPosts = [
    {title: "Welcome", date: "September 7, 2021", link: "blog/welcome"},
    {title: "Cloud Seeding in British Columbia", date: "November 21, 2021", link: "blog/cloud-seeding"},
    {title: "My position on nuclear power", date: "January 10, 2022", link: "blog/nuclear-power"},
    {title: "City of Vancouver Earthquake Map", date: "April 10, 2024", link: "blog/earthquake-map"}
];

blogPosts = blogPosts.reverse()

// Function to create and populate the grid
function populateBlogGrid() {
    var gridContainer = document.getElementById("blogGrid")

    // Loop through blog posts and create elements
    blogPosts.forEach(function(post) {
        var titleElement = document.createElement("a")
        titleElement.href = post.link
        titleElement.classList.add("post-title")
        titleElement.textContent = post.title

        var dateElement = document.createElement("p")
        dateElement.classList.add("post-date")
        dateElement.textContent = post.date;

        gridContainer.appendChild(titleElement)
        gridContainer.appendChild(dateElement)
    });
}

// Call the function to populate the grid
populateBlogGrid();






// ADD NEW POSTS HERE
posts = [
    {"Welcome!": "posts/post1.html"},
    {"About": "posts/post3.html"},
    {"Geopolitics" : "posts/post4.html"},
    {"Volcano Profile" : "posts/post5.html"},
    {"Taipei 101" : "posts/post6.html"},
    {"Age of ||||||" : "posts/post7.html"},
    {"☕" : "posts/post8.html"},
    {"thermocline!" : "posts/post9.html"},
    {"blue gold notes" : "posts/post10.html"},
    {"bodies of water" : "posts/post11.html"},
    {"remembrance day 🎖" : "posts/post12.html"},
    {"an interlude 🌧️" : "posts/post13.html"},
    {"five themes of geography" : "posts/post14.html"},
    {"Cloud Seeding." : "./custom/seed/seed.html"},
    {"testing..." : "./custom/shop/shop.html"},
    {"BINGO" : "./custom/bingo/bingo.html"},
    {"John Oliver Update" : "posts/post15.html"},
    {"My thoughts on energy" : "posts/post16.html"},
    {"Geographic event!" : "posts/post17.html"},
    {"Another geographic event!" : "posts/post18.html"},
    {"Yet Another geographic event!" : "posts/post19.html"},
]


function toggleSidebar() {
    sidebar = document.getElementById("sidebar")

    // TODO: make this smoother
    if (sidebar.clientWidth != 0) {
        // hide
        document.getElementById("toggleSidebar").src = "assets/expand.png"
        sidebar.classList.remove("show")
        sidebar.classList.add("hide")
        console.log("hiding")
    } else {
        // show
        document.getElementById("toggleSidebar").src = "assets/collapse.png"
        sidebar.classList.remove("hide")
        sidebar.classList.add("show")
        console.log("showing")
    }
}




function populateSidebar() {
    let sidebar = document.getElementById("sidebar")


    for (var i = posts.length - 1; i >= 0; i--) {
        let postName = Object.keys(posts[i])
        let postLink = Object.values(posts[i])

        let postcontainer = document.createElement("div")
        let post = document.createElement("a")

        post.textContent = postName
        post.id = postLink
        post.classList.add("postTitle")

        postcontainer.appendChild(post)

        postcontainer.addEventListener("click", function() {
            populatePost(post.id)

            if(post.id == "./custom/seed/seed.html") {
                toggleSidebar()
            } 
        })

        sidebar.append(postcontainer)
    }
}


function populatePost(url) {    
    let postContent = document.getElementById("postcontent")
    postContent.setAttribute("type", "text/html")
    postContent.src = url
}


//populateSidebar()
//populatePost("posts/post1.html")
