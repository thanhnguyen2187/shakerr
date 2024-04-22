function generateColorPalette(numColors: number): string[] {
    const palette: string[] = [];
    for (let i = 0; i < numColors; i++) {
        // Generate a random hue (0-360)
        const hue = Math.floor(Math.random() * 360);
        // Use a fixed saturation and lightness for all colors
        const saturation = 50; // 0-100
        const lightness = 50; // 0-100
        // Convert HSL to RGB
        const rgb = hslToRgb(hue, saturation, lightness);
        // Convert RGB to hex
        const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
        palette.push(hex);
    }
    return palette;
}

function hslToRgb(h: number, s: number, l: number): { r: number, g: number, b: number } {
    // Convert HSL to RGB
    // This is a simplified version of the conversion, for a full version see: https://www.rapidtables.com/convert/color/hsl-to-rgb.html
    let r, g, b;
    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        const hue2rgb = (p: number, q: number, t: number): number => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

function rgbToHex(r: number, g: number, b: number): string {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
