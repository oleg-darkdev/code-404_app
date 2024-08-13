<script>
  import { navigation } from '$lib/shared';
</script>


<header class="fixed-navbar">
  <div class="navbar">
    <nav class="container navbar-container w-container">
      <div class="navbar-wrapper">
        <a href="/" aria-current="page" class="nav-logo w-inline-block w--current">
          <img src="/images/logo.svg" loading="eager" alt="" class="h-20 ">
        </a>
        <a id="favo-heart-menu" href="/" class="favourite-nav-link w-inline-block">
          <div class="favo-heart hidden"></div>
          <div class="favourite-heart-nav-embed w-embed">
            <svg xmlns="http:/www.w3.org/2000/svg" width="20.552" height="18.195" viewBox="0 0 21.552 18.195">
              <path id="favo-heart" class="favo-heart" d="M9.776,17l7.278-7.026c.1-.1,2.5-2.282,2.5-4.888C19.552,1.9,17.6,0,14.337,0c-1.908,0-3.7,1.5-4.561,2.347C8.913,1.5,7.123,0,5.215,0,1.952,0,0,1.9,0,5.086,0,7.695,2.4,9.877,2.487,9.952Z" transform="translate(0.5 0.5)" fill="currentColor"></path>
            </svg>
          </div>
        </a>
        <div scroll="both" data-w-id="30683a1e-e0e2-a8f5-63f8-d46f99433e45" class="mobil-menu-button">
          <div class="mobil-menu-button-wrapper">
            <div class="burger-line top"></div>
            <div class="burger-line mid"></div>
            <div class="burger-line bottom"></div>
          </div>
        </div>
        <div  scroll="disable"  class="cart-button">
          <div class="nav-link korb only-landscape-mobil">APP</div>
          <div id="cart-items-count" class="cart-items-count">
            <div>0</div>
            <div id="cart-loading-spinner" class="cart-loading-spinner is__active" data-w-id="92b53392-e2f3-10b1-72e0-179e564e0950" data-animation-type="lottie" data-src="https:/cdn.prod.website-files.com/610cf33140aaf753c6f8f7bb/62695a031f1563936b525a72_lf30_editor_3sebc4ky.json" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="3.16" data-duration="0"></div>
          </div>
        </div>
        <div class="nav-link-wrapper">
          <div class="mobil-top-border"></div>
          {#each navigation as {title, link}}
            <a href="{link}" class="nav-link top-link">{title}</a>
          {/each}


          <div class="menu-bottom-bar">
            <div class="menu-social-icons-wrapper">
              <a href="/" target="_blank" class="social-icon-wrapper w-inline-block">
                <img src="/images/624defdcf5ee30e0e1fb5699_facebook%20icon%20white.svg" loading="lazy" alt="" class="facebook-icon">
              </a>
              <a href="/" target="_blank" class="social-icon-wrapper w-inline-block">
                <img src="/images/624defc45b576f7fcb74fb92_instagram-icon-white.svg" loading="lazy" alt="" class="instagram-icon">
              </a>
            </div>
            <div class="menu-ticker-wrapper">
              <div class="ticker-collection-wrapper w-dyn-list">
                <div role="list" class="ticker-collection-list w-dyn-items">
                  <div role="listitem" class="ticker-collection-item w-dyn-item">
                    <div data-w-id="c87bcc98-77ad-6d05-28a3-8b03d34ecb79" class="ticker-marquee">
                      <div class="ticker-content">
                        <p class="ticker-text">+++</p>
                        <p class="ticker-text">Werksverkauf Westerhüsen: Do: 15:30-17:30Uhr</p>
                        <p class="ticker-text">+++</p>
                        <p class="ticker-text">KRÖM Innenstadt: Mo. - Fr.: 11-18 Uhr und Sa.: 10-18 Uhr</p>
                        <p class="ticker-text">+++</p>
                        <p class="ticker-text">Komm vorbei!</p>
                      </div>
                      <div class="ticker-content">
                        <p class="ticker-text">+++</p>
                        <p class="ticker-text">Werksverkauf Westerhüsen: Do: 15:30-17:30Uhr</p>
                        <p class="ticker-text">+++</p>
                        <p class="ticker-text">KRÖM Innenstadt: Mo. - Fr.: 11-18 Uhr und Sa.: 10-18 Uhr</p>
                        <p class="ticker-text">+++</p>
                        <p class="ticker-text">Komm vorbei!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</header>


<style>

</style>
