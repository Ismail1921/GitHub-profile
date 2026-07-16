const userInput = document.querySelector("#userInput");
const searchBtn = document.querySelector("#searchBtn");
const profile = document.querySelector("#profile");

searchBtn.addEventListener("click", async() => { try {const username = userInput.value.trim();
        if (username === "") {
 profile.textContent = "Please enter a GitHub username.";
 return;
}
        const url = `https://api.github.com/users/${username}`;
        profile.innerHTML = "<p>Loading...</p>";
         const response = await fetch(url);
         if (!response.ok) { profile.innerHTML = `<p>Profile not found</p>`;
         return;
         }
         const data = await response.json();
          profile.innerHTML = `
    <img src="${data.avatar_url}" alt="Avatar" width = "100px" height = "100px">

    <h2>${data.name}</h2>

    <p><strong>Username:</strong> ${data.login}</p>

    <p><strong>Followers:</strong> ${data.followers}</p>

    <p><strong>Following:</strong> ${data.following}</p>

    <p><strong>Repositories:</strong> ${data.public_repos}</p>

    <p><strong>Location:</strong> ${data.location}</p>

    <a href="${data.html_url}" target="_blank">
        View GitHub Profile
    </a>
    `; } catch (error) { profile.innerHTML =  ` <p>❌ Something went wrong.</p>
`;
         } userInput.value = "";
 
});