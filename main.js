//Recriando os links das redes sociais
const linksSocialMedia = {
  github: 'Marcos-Fernando',
  youtube: 'channel/UCe6olqCPDwePTT-lelth3rQ',
  instragam: '__marcosfernando__',
  linkedin: 'in/marcos-costa-64684b1ab'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

//Buscando informações no github

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name,
      userBio.textContent = data.bio,
      userLink.href = data.html_url,
      userImage.src = data.avatar_url,
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()