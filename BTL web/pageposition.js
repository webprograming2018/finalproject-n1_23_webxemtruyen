$(window).scroll(function () {
    var siteName = document.getElementsByClassName('name')[0].innerHTML;
    var siteHeight = $(window).scrollTop();
    // console.log(height);
    // localStorage.setItem('position', height);

    var position = {
        name: siteName,
        height: siteHeight,
    }
    if (localStorage.getItem('positions') === null) {
		var positions = [];

		positions.push(position);

		localStorage.setItem('positions', JSON.stringify(positions));
	}
	else {
		var positions = JSON.parse(localStorage.getItem('positions'));

		positions.push(position);
		localStorage.setItem('positions', JSON.stringify(positions));
        
    }
    
})
