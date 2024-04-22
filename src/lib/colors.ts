import tinycolor from 'tinycolor2'

// Source: https://gist.github.com/bendc/76c48ce53299e6078a76
export function generateNiceColor() {
  const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  const h = randomInt(0, 360)
  const s = randomInt(42, 98)
  const l = randomInt(40, 90)

  return {h, s, l}
}

export function generateColors() {
  const baseColor = tinycolor(generateNiceColor())
  while (true) {
    const nextColor = tinycolor.random()
    if (tinycolor.isReadable(baseColor, nextColor)) {
      return [baseColor, nextColor]
    }
  }
}
