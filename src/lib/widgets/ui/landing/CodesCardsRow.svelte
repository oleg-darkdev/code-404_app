<script>
	import { BtnBlackWithArrow } from '$lib/shared';
  import { CodeCard } from '$lib/entities';

  export let category;
</script>


<div class="padding-top padding-xhuge   margin-bottom margin-huge">
  <div class="container">
    <div  class="heading-wrapper cc-bestseller">
      <!-- category.brandColour -->
      <h2 class="big-heading is__inline cc-bestseller-heading">{category.title}  <span class="big-heading heart-dektop"></span>
      </h2>
    </div>
    <div  class="collection-wrapper-lp-products margin-vertical margin-medium teaser-1 is-active w-dyn-list">
      <div role="list" class="collection-list-products bestseller w-dyn-items">

        {#each category.promo as code}
          <CodeCard {code} categoryLink={category.link}/>
        {/each}
        <slot>
          
        </slot>
      </div>
    </div>

    <BtnBlackWithArrow text='Full list of {category.id} codes' link='{category.link}' />
  </div>
</div>


<style>

</style>
