window.onload = function () {
    window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 200) {
			document.querySelector("header").classList.add('scroll');
		} else {
			document.querySelector("header").classList.remove('scroll');
		}
	});
}