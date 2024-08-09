<script>
	import { ftpCodesList} from '$lib/shared';
	import { CodesCardsRow, } from '$lib/widgets';
  // import {  } from '$lib/entities';
</script>


<svelte:head>
  <title>CODE 404</title>
</svelte:head>

{#each ftpCodesList.allCodes as ftpCodesCategory}
  <section class="section">
    <CodesCardsRow category={ftpCodesCategory}/>
  </section>
{/each}
