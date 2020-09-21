// Color Class
class Color {
	constructor(r, g, b) {
		this.r = r.value;
		this.g = g.value;
		this.b = b.value;
	}
	rgbInput() {
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;
	}
	rgb() {
		return `rgb(${this.rgbInput()})`;
	}

	hex() {
		const { r, g, b } = this;
		return '#' + ((r << 16) | (g << 8) | b).toString(16).toUpperCase();
	}
	hsl() {
		const { h, s, l } = this;
		return `hsl(${h},${s}%, ${l}%)`;
	}
}
