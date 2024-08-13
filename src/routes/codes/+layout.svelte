<script>
	import {  Faq, Footer, MemoryCards,} from '$lib/widgets';
 //  import {  } from '$lib/entities';
</script>


<svelte:head>
  <title>CODE 404</title>
</svelte:head>


<MemoryCards />

<slot />

<Faq />

<Footer />
