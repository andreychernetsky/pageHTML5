window.onload = function () {
	let checkboxes = document.querySelectorAll('.check');
	let labels = this.document.querySelectorAll('.slider-block label');
	let i = 0;
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
		console.log(checkboxes[i]);
	}, 10000);
}