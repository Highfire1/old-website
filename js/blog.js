// ADD NEW POSTS HERE
posts = [
    {"Welcome!": "posts/post1.html"},
    {"About": "posts/post3.html"},
    {"Geopolitics" : "posts/post4.html"},
    {"Volcano Profile" : "posts/post5.html"},
]

let button = document.getElementById("toggleSidebar")
button.addEventListener("click", toggleSidebar)


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

        let post = document.createElement("a")
        post.textContent = postName
        post.id = postLink
        post.classList.add("postTitle")

        post.addEventListener("click", function() {
            populatePost(post.id)
        })

        sidebar.append(post)
    }
}

populateSidebar()



function populatePost(url) {
    let postContent = document.getElementById("postcontent")
    postContent.src = url


}
populatePost("posts/post1.html")


var theme = "dark"
toggleTheme()

function toggleTheme() {
    console.log(document.styleSheets)

    switch (theme) {
        case "dark":
            document.styleSheets[1].disabled = true
            document.styleSheets[2].disabled = false
            theme = "light"
            break // don't fall through to other case

        case "light":
            document.styleSheets[1].disabled = false
            document.styleSheets[2].disabled = true
            theme = "dark"
    }
}

let themeButton = document.getElementById("toggleTheme")
themeButton.addEventListener("click", toggleTheme)