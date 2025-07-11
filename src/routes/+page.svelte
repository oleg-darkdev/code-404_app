<script>
	import { promoTypesOfCodes, ftpCodesList, httpCodesList, smtpCodesList } from '$lib/shared';
	import { Header, Cookie, Cart, Blog, Price, Hero, About, CodesCardsRow, CallToAction, Divider,  Features, MemoryCards, Faq, Newsletter, Footer } from '$lib/widgets';
 //  import {  } from '$lib/entities';
</script>


<svelte:head>
  <title>CODE 404</title>
</svelte:head>

<Header />

<Cookie />

<Cart/>

<Hero />

<About />

<section class="section">
  <a name="ftp"></a>
  <a name="http"></a>
  <a name="smtp"></a>
  <CodesCardsRow category={promoTypesOfCodes}>
    <a href="/app" class="blog-link-block w-inline-block">
      <div class="blog-link-text-wrapper">
        <div class="text-block-5 mr-2">Pełna lista kodów</div>
        <img src="/images/arrow.svg" loading="lazy" alt="" class="button-arrow">
      </div>
    </a>
  </CodesCardsRow>

</section>

<!-- <CallToAction /> -->

<Features />

<MemoryCards />

<!-- <Divider /> -->

<!-- <Faq /> -->

<!-- <Blog /> -->

<!-- <Newsletter /> -->

<!-- <Price /> -->

<Footer />

<style>

</style>

