document.getElementById('bookmark').addEventListener('click', saveBookmark);

function saveBookmark(e) {
	var siteUrl = window.location.href;
	var siteName = document.getElementsByClassName('name')[0].innerHTML;
	var siteImage = document.getElementById('icon').src;
	console.log(siteImage);
	var bookmark = {
		name: siteName,
		url: siteUrl,
		image: siteImage
	}

	if (localStorage.getItem('bookmarks') === null) {
		var bookmarks = [];

		bookmarks.push(bookmark);

		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}
	else {
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

	}

	e.preventDefault();
}

