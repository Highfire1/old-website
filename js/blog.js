// ADD NEW POSTS HERE
posts = [
    {"Welcome!": "posts/post1.html"},
    {"About": "posts/post3.html"},
    {"Post2": "posts/post2.html"},
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