import { browser } from '$app/environment'
import { generateColors, generateNiceColor } from '$lib/colors'
import tinycolor from 'tinycolor2'

export type Item = {
  key: string
  value: string
  textColor: string
  backgroundColor: string
}

export function loadItems() {
  if (!browser) {
    return []
  }
  return JSON.parse(window.localStorage.getItem('shakerr-items') ?? '[]') as Item[]
}

export function saveItems(items: Item[]) {
  window.localStorage.setItem('shakerr-items', JSON.stringify(items))
}

export function generateUUID() {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  };
  return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
}

export function createNewItem(): Item {
  const colors = generateColors()
  return {
    key: generateUUID(),
    value: '',
    textColor: colors[0].toHexString(),
    backgroundColor: colors[1].toHexString(),
  }
}
