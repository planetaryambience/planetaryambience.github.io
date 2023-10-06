const reposURL = `https://api.github.com/users/planetaryambience/repos`
let user = {}

async function getUserRepos() {
    try {
        let response = await fetch(reposURL)
        return response
    } catch (err) {
        console.log(err)
    }
}

getUserRepos()
    .then(response => response.json())
    .then(data => {
        user = data[0].owner
        document.getElementById("userImage").src = user.avatar_url
        for (let i in data) {
            let ul = document.getElementById('repos');
            let li = document.createElement('li');
            li.innerHTML = (`
                <p class="green"><strong>${data[i].name}</strong></p>
                <p>${data[i].description}</p>
                <p><a class="pink" href="${data[i].html_url}">${data[i].html_url}</a></p>`);
            ul.appendChild(li);
        }
    })

async function getUser() {
    try {
        let response = await fetch(userURL)
        return response
    } catch (err) {
        console.log(err)
    }
}