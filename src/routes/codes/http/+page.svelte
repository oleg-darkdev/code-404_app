<script>
	import { CodesCardsRow} from '$lib/widgets';
 //  import {  } from '$lib/entities';
  export let data;
</script>


<svelte:head>
  <title>CODE 404 - HTTP</title>
</svelte:head>


{#each data.allCodes as codesCategory}
  <section class="section">
    <CodesCardsRow category={codesCategory}/>
  </section>
{/each}



