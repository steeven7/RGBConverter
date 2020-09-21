// Selectors
const btn = document.querySelector('#convert');
const colorDisplay = document.querySelector('#generated');
const hexCode = document.querySelector('#hex');
const rgb = document.querySelector('#rgb');
const r = document.getElementById('rgb-1');
const g = document.getElementById('rgb-2');
const b = document.getElementById('rgb-3');

//
btn.addEventListener('click', function() {
	const colorRgb = new Color(r, g, b);
	newColor(colorRgb);

	function newColor(colorRgb) {
		const RGB = colorRgb.rgb();
		colorDisplay.style.background = `${RGB}`;
		rgb.innerHTML = `<h3>${RGB}</h3>`;
		hexColor(colorRgb);
	}
	function hexColor(colorRgb) {
		const Hex = colorRgb.hex();
		hexCode.innerHTML = `<h3>${Hex}</h3>`;
	}
	form.reset();
});

// Restrict inputs between 0 - 255
const input = document.querySelectorAll('.colorInput');
input.forEach(function(colInput) {
	colInput.addEventListener('keyup', function() {
		if (parseInt(this.value) > 255) {
			this.value = 255;
			return false;
		}
	});
});
