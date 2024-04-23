<script>
  import "../app.pcss"
  import { initializeStores, Modal } from '@skeletonlabs/skeleton'
  import { dev } from '$app/environment'

  initializeStores()
</script>

<svelte:head>
  <title>Shakerr {dev ? 'Dev' : ''}</title>
</svelte:head>
<Modal />
<slot></slot>
