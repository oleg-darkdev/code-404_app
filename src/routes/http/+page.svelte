<script>
	import { httpCodesList } from '$lib/shared';
	import { CodesCardsRow, } from '$lib/widgets';
  // import {  } from '$lib/entities';
</script>


<svelte:head>
  <title>CODE 404</title>
</svelte:head>



{#each httpCodesList.allCodes as httpCodesCategory}
  <section class="section">
    <CodesCardsRow category={httpCodesCategory}/>
  </section>
{/each}
