window.onload = function () {
	let mainBlock = document.querySelector('.slider-block');
	let mainBlockTop = Math.floor(mainBlock.getBoundingClientRect().top + window.pageYOffset);
	let checkboxes = document.querySelectorAll('.check');
	let labels = document.querySelectorAll('.slider-block label');
	let i = 0;

	window.onscroll = function () {
		if ((window.pageYOffset + window.innerHeight) < mainBlockTop) {
			console.log('l');
		} else {
			let timeFunc = setInterval(function () {
				for (let j = 0; j < labels.length; j++) {
					labels[j].onclick = function () {
						checkboxes[j].setAttribute('checked', 'true');
						clearInterval(timeFunc);
					}
				}
				checkboxes[i].removeAttribute('checked');
				i++;
				if (i > 0 && i < 10) {
					i = i;
				} else {
					i = 0;
				}
				checkboxes[i].setAttribute('checked', 'true');
			}, 10000);
			window.onscroll = true;
		}
	}
}