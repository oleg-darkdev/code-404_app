<script>
  import { FullCodesInCategory
  } from '$lib/widgets';
  import {
    CodeCard
  } from '$lib/entities';

  export let data;

  $: codesList = data.codesData;
  let categoryData = data.categoryData;
</script>

<svelte:head>
  <title>CODE 404 - SMTP</title>
</svelte:head>


<FullCodesInCategory {categoryData}/>

<section class="section">
  <div class="padding-top padding-xhuge   margin-bottom margin-huge">
      <a name="about"></a>


    <div class="container">
      <div class="heading-wrapper cc-bestseller">
        <h2 class="big-heading is__inline cc-bestseller-heading">{codesList.title} <span class="big-heading heart-dektop"></span>
        </h2>
      </div>
      <div class="collection-wrapper-lp-products margin-vertical margin-medium teaser-1 is-active w-dyn-list">
        <div role="list" class="collection-list-products bestseller w-dyn-items">

          {#each codesList.allCodes as code}
					  <CodeCard {code} categoryLink={codesList.link}/>
          {/each}

				</div>
			</div>
		</div>
	</div>
</section>

<style>


</style>
