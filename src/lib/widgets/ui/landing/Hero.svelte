<script>
	import { BtnBlackWithArrow } from '$lib/shared';
</script>

<section class="section landing-header-section">
  <div class="container cc-hero-container">
    <div class="hero-featured-product-wrapper w-dyn-list">
      <div role="list" class="hero-featured-product-list w-dyn-items">
        <div role="listitem" class="hero-featured-product-item w-dyn-item">
          <div class="feature-text-wrapper">
            <div>
              <h1 class="big-heading cc-landing-heading">Lorem Ipsum is simply dummy text of</h1>
            </div>
            <div class="normal-text cc-featured-text only-desktop-tablet">Lorem Ipsum is simply dummy text of</div>
              <BtnBlackWithArrow text='lorem impsum' link='/app' />
          </div>
          <div class="featured-image-wrapper">
            <a  href="/" class="featured-image-link-block w-inline-block">
              <div class="hero-image-wrapper">
                <img src="/images/box.png" loading="lazy" alt="" sizes="(max-width: 479px) 63vw, (max-width: 767px) 72vw, (max-width: 991px) 36vw, (max-width: 1439px) 55vw, 56vw"  class="hero-image">
                <!-- <img src="images/620fd40e626c8c7f79d72dcd_Schatten.png" loading="lazy" sizes="(max-width: 479px) 63vw, (max-width: 767px) 72vw, (max-width: 991px) 36vw, 518px"   alt="" class="hero-product-shadow"> -->
              </div>
            </a>
            <div class="hero-product-background"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="marquee-horizontal">
    <div class="hero-ticker-collection-wrapper w-dyn-list">
      <div role="list" class="track-horizontal w-dyn-items">
        <div role="listitem" class="hero-ticker-collection-item w-dyn-item">
          <div class="ticker-wrapper">
            <div class="marquee-text">1хх</div>
            <div class="marquee-text">/</div>
            <div class="marquee-text">2хх</div>
            <div class="marquee-text">/</div>
            <div class="marquee-text">3хх</div>
            <div class="marquee-text">/</div>
            <div class="marquee-text">4хх</div>
            <div class="marquee-text">/</div>
            <div class="marquee-text">5хх</div>
            <div class="marquee-text">/</div>
            <div class="marquee-text">NGINX</div>
            <div class="marquee-text">/</div>
            <div class="marquee-text">Cloudflare</div>
            <div class="marquee-text">/</div>
            <div class="marquee-text">AWS</div>
            <div class="marquee-text">/</div>
            <div class="marquee-text">Microsoft</div>
            <div class="marquee-text">/</div>
            <div class="marquee-text">Shopify</div>
            <div class="marquee-text">/</div>
            <div class="marquee-text">Unofficial</div>
            <div class="marquee-text">/</div>
          </div>
          <div class="ticker-wrapper">
            <div class="marquee-text">1хх</div>
            <div class="marquee-text">/</div>
            <div class="marquee-text">AWS</div>
            <div class="marquee-text">/</div>
            <div class="marquee-text">2хх</div>
            <div class="marquee-text">/</div>
            <div class="marquee-text">Cloudflare</div>
            <div class="marquee-text">/</div>
            <div class="marquee-text">3хх</div>
            <div class="marquee-text">/</div>
            <div class="marquee-text">NGINX</div>
            <div class="marquee-text">/</div>
            <div class="marquee-text">4хх</div>
            <div class="marquee-text">/</div>
            <div class="marquee-text">Microsoft</div>
            <div class="marquee-text">/</div>
            <div class="marquee-text">5хх</div>
            <div class="marquee-text">/</div>
            <div class="marquee-text">Shopify</div>
            <div class="marquee-text">/</div>
            <div class="marquee-text">Unofficial</div>
            <div class="marquee-text">/</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="hero-background-gradient_list-wrapper w-dyn-list">
    <div role="list" class="hero-background-gradient_list w-dyn-items">
      <div role="listitem" class="hero-background-gradient_item w-dyn-item">
        <div class="hero-background_gradient"></div>
        <div style="background-color:#114ea1" class="hero-background_overlay"></div>
        <div style="background-color:#114ea1" class="hero-background_color"></div>
      </div>
    </div>
  </div> -->
</section>


<style>
@media screen and (max-width: 991px) {
  .hero-product-background {
    width: 40vw;
    min-width: 200px;
    height: 40vw;
    min-height: 200px;
    margin-left: 0%;
  }
}
@media screen and (max-width: 767px) {
  .hero-product-background {
    width: 420px;
    min-width: 0;
    max-width: none;
    height: 420px;
    min-height: 0;
    max-height: none;
  }
}
@media screen and (max-width: 479px) {
  .hero-product-background {
    width: 80vw;
    height: 80vw;
  }
}


.hero-product-background {
  z-index: 0;
  border: 1px solid var(--black);
  border-radius: 100vw;
  width: 50vh;
  min-width: 322px;
  max-width: 450px;
  height: 50vh;
  min-height: 322px;
  max-height: 450px;
  margin-left: -15%;
  display: none;
  position: absolute;
  top: auto;
  bottom: auto;
  left: auto;
  right: auto;
}
</style>
