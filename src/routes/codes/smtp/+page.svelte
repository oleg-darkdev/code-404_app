<script>
	import { smtpCodesList } from '$lib/shared';
	import { CodesCardsRow, } from '$lib/widgets';
  // import {  } from '$lib/entities';
</script>


<svelte:head>
  <title>CODE 404</title>
</svelte:head>


{#each smtpCodesList.allCodes as smtpCodesCategory}
  <section class="section">
    <CodesCardsRow category={smtpCodesCategory}/>
  </section>
{/each}
