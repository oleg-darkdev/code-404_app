<script>
  export let code, categoryLink;
</script>


<a href='{categoryLink}/{code.code}' target="_blank" role="listitem" class="collection-item-products w-dyn-item">
  <div class="link-block-product cc-landingpage w-inline-block">
    <div class="product-meta-wrapper">
      <div class="product-heading-wrapper">
        <h3 class="product-overview-heading">{code.title}</h3>
      </div>
      <div class="product-overview-price-wrapper">
        <div class="product-overview-price-holder main-price">
          <div class="product-overview-price">{code.code}</div>
        </div>
        <div class="product-overview-price-holder sold-out">

          <div fs-cmssort-field="price" class="product-overview-price">complexity: <span class='ml-2'>{code.complexity}</span></div>
        </div>

      </div>
    </div>
    <div class="product-thumbnail-wrapper">
      <img src="{code.img}" loading="lazy" alt="{code.title}" sizes="(max-width: 479px) 61vw, (max-width: 767px) 48vw, (max-width: 991px) 31vw, 24vw"   class="product-image cc-landingpage">
    </div>
  </div>
</a>
