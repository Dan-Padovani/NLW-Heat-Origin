const LinksSocialMedia = {
	github: 'Dan-Padovani',
	youtube: 'jakelinygracielly',
	facebook: 'maykbrito',
	instagram: 'dan.padovani',
	twitter: 'jakelinytec'
}

function changeSocialMediaLinks() {
	for (let li of socialLinks.children) {
		const social = li.getAttribute('class')
		li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
	}
}

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

changeSocialMediaLinks()
getGithubProfileInfos()
