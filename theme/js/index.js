document.addEventListener("DOMContentLoaded", function(event) { 

	function isHidden(el) {
		var style = window.getComputedStyle(el);
		return (style.display === 'none')
	}

	const burger = document.getElementById('toggle-burger');
	burger.onclick = function toggleBurger() {
		const menu = document.getElementById('menu-resp');
		let display = "none";
		if (isHidden(menu)) {
			display = "block";
		} else {
			display = "none";
		}
		menu.style.display = display; 
	}

});
