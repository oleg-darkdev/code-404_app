<script>
  export let categoryData;
</script>


<section class="section pt-10">
  <div class="margin-bottom margin-huge mx-auto">
    <div class="container">
        <div  class="blog-menu-wrapper">
          <div class="blog-menu-inner-wrapper">
            <div class="margin-top margin-large">
              <div class="blog-menu-heading-wrapper">
                <div>Other {categoryData.id} codes</div>
              </div>
            </div>
            <div class="blog-menu-collection-wrapper w-dyn-list">
              <div role="list" class="blog-menu-collection-list w-dyn-items">
              {#each categoryData.categories as codeCategory}
                <div role="listitem" class="blog-menu-collection-item w-dyn-item">
                  <a  href="{codeCategory.link}"  class="blog-menu-item w-inline-block">
                    <div>{codeCategory.title}</div>
                    <img src="/images/right-clean-arrow.svg" loading="lazy" alt="right arrow" class="blog-menu-arrow">
                    <div class="blog-menu-hover-bg"></div>
                  </a>
                </div>
              {/each}
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</section>
