const LinksSocialMedia = {
  github: 'r0drigoceezar',
  youtube: 'c/RocketSeat',
  facebook: 'rodrigo.cezar.1253/',
  instagram: 'rodrigoceezar/',
  twitter: 'rodrigoceezar1'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  // para puxar os dados da API do github
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userProfile.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

// FUNCTION DEFAULT
//function nomeDaFunção(argumentos){
//code
//}

//ARROW FUNCTIONS
// argumentos ==> { code }
