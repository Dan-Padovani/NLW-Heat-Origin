//Variavel tipo objeto
const LinksSocialMedia = {
	github: 'Dan-Padovani',
	youtube: 'jakelinygracielly',
	facebook: 'maykbrito',
	instagram: 'dan.padovani',
	twitter: 'jakelinytec'
}

function chageSocialMediaLinks() {
	for (let li of socialLinks.children) {
		const social = li.getAttribute('class')
		//guardando a class de cada li para variavel 'social' para utilizar no proximo passo

		li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
		//Acessando a variavel social e a variavel objeto LinksSocialMedia e cada prop. atraves de []

		//Teste do valor lido "alert(li.children[0].href)"
	}
}

chageSocialMediaLinks()

function getGithubProfileInfos() {
	const url = `https://api.github.com/users/${LinksSocialMedia.github}`
	fetch(url)
		.then(myResponse => myResponse.json())
		.then(myData => {
			userName.textContent = myData.name
			userBio.textContent = myData.bio
			userLink.href = myData.html_url
			userAvatar.src = myData.avatar_url
		})
}

getGithubProfileInfos()
