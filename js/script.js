window.onload = function() {
	plusOne();
	plusThree();
	plusSeven();
}

function plusOne() {
	let button = document.getElementById('b1');
	let progBar = document.getElementById('pb');
	let width = 0;
	button.addEventListener('click', function() {
		width += 1;
		progBar.style.width = width + '%';
		if (width == 100) {
			width = 0;
		}
	})
}

function plusThree() {
	let button = document.getElementById('b3');
	let progBar = document.getElementById('pb');
	let width = 0;
	button.addEventListener('click', function() {
		width += 3;
		progBar.style.width = width + '%';
		if (width >= 100) {
			width = 0;
		}
	})
}

function plusSeven() {
	let button = document.getElementById('b7');
	let progBar = document.getElementById('pb');
	let width = 0;
	button.addEventListener('click', function() {
		width += 7;
		progBar.style.width = width + '%';
		if (width >= 100) {
			width = 0;
		}
	})
}