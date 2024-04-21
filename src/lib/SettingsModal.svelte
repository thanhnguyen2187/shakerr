<script lang="ts">
  import ItemRow from "./ItemRow.svelte"
  import { createNewItem } from "./data"
  import type { Item } from "./data"
  import { onDestroy, onMount } from 'svelte'
  import { getModalStore } from '@skeletonlabs/skeleton'

  export let items: Item[] = []
  export let saveItemsFn: (items: Item[]) => void = () => {}

  let addButton: HTMLButtonElement

  const modalStore = getModalStore()

  function addNewItem() {
    items = [...items, createNewItem()]
  }

  function removeItem(index: number) {
    items = [
      ...items.slice(0, index),
      ...items.slice(index + 1),
    ]
  }

  onMount(() => {
    addButton.focus()
  })

  onDestroy(() => {
    saveItemsFn(items)
  })
</script>

<div class="w-modal relative max-h-screen overflow-y-scroll">
  <button
    class="btn btn-sm btn-icon absolute top-1.5 right-1 p-2"
    on:click={modalStore.close}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#000000" fill="none">
      <path d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
  <table class="table table-hover">
    <thead class="">
    <tr>
      <th>Text</th>
      <th>Colors</th>
      <th class="hidden md:block">Preview</th>
      <th></th>
    </tr>
    </thead>
    <tbody>
    {#each items as item, index (item.key)}
      <ItemRow
        item={item}
        removeItemFn={() => removeItem(index)}
      />
    {/each}
    <tr class="">
      <td></td>
      <td></td>
      <td class="hidden md:block"></td>
      <td class="text-right">
        <button
          class="btn btn-icon p-2 variant-ghost"
          on:click={addNewItem}
          bind:this={addButton}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#000000" fill="none">
            <path d="M12 4V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</div>
