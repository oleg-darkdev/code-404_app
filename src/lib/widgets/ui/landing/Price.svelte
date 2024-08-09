<script>
  	import { prices } from '$lib/shared';
</script>

<section class="section has__violet-gradient">
  <div class="padding-top padding-custom1">
    <div class="container has__bottom-sep-line">
      <div class="page-heading-wrapper has__text-inside _64px-grid standard-heading-wrapper">
        <div  class="headline-wrapper">
          <h1 class="big-heading">Lorem Ipsum has</h1>
        </div>
        <div class="heading-subtext-wrapper">
          <div class="normal-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="padding-vertical padding-xhuge">
    <div class="container">

       <a name="prices"></a>

      <div class="layout-plans">
        <div class="collection-wrapper-plans w-dyn-list">
          <div role="list" class="collection-list-plans w-dyn-items">
            <div role="listitem" class="collection-item-plans left w-dyn-item">
              <div class="plan-wrapper">
                <div class="padding padding-medium cc-z-index">
                  <div class="layout-plan">
                    <div class="plan-top-content">
                      <h2 class="semi-heading">{prices.basic.title}</h2>
                      <div class="plan-price-wrapper">
                        <div class="plan-price-top-wrapper">
                          <div class="plan-price-text">{prices.basic.price}</div>
                          <!-- <div class="plan-price-kg">{prices.basic.notify}</div> -->
                        </div>
                        <div class="normal-text is__bold">{prices.basic.subTitle}</div>
                      </div>
                      <div class="padding-vertical padding-medium">
                        <p class="normal-text is__bold">{prices.basic.shortDesc}</p>
                      </div>
                      <div class="divider is__light"></div>
                      <div class="margin-vertical margin-medium">
                        <div class="plan-rich-text w-richtext">
                          <ul role="list">

                            {#each prices.basic.complect as item}
                              <li>{item}</li>
                            {/each}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="plan-bottom-content">
                      <a href="/" scroll="disable" class="std-button black is__bigger is__100 cc-plan-button w-button">Lorem Ipsum</a>
                      <div class="margin-top margin-xsmall">
                        <a href="/" class="std-button passiv is__bigger is__100 w-button">Lorem Ipsum is simply</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="featured-plan-background w-condition-invisible">
                  <div class="featured-background"></div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="collection-wrapper-plans w-dyn-list">
          <div role="list" class="collection-list-plans w-dyn-items">
            <div role="listitem" class="collection-item-plans w-dyn-item">
              <div id="w-node-_287d39ff-9b4e-1713-6eba-e5dd1e1b8169-4d36a21d" class="plan-wrapper">
                <div class="padding padding-medium cc-z-index">
                  <div class="layout-plan">
                    <div class="plan-top-content">
                      <h2 class="semi-heading">{prices.hacker.title}</h2>
                      <div class="plan-price-wrapper">
                        <div class="plan-price-top-wrapper">
                          <div class="plan-price-text">{prices.hacker.price}</div>
                          <!-- <div class="plan-price-kg">{prices.hacker.notify}</div> -->
                        </div>
                        <div class="normal-text is__bold">{prices.hacker.subTitle}</div>
                      </div>
                      <div class="padding-vertical padding-medium">
                        <p class="normal-text is__bold">{prices.hacker.shortDesc}</p>
                      </div>
                      <div class="divider"></div>
                      <div class="margin-vertical margin-medium">
                        <div class="plan-rich-text w-richtext">
                          <ul role="list">
                            {#each prices.hacker.complect as item}
                              <li>{item}</li>
                            {/each}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="plan-bottom-content">

                      <a href="/" scroll="disable" class="std-button black is__bigger is__100 cc-plan-button w-button">Lorem Ipsum is</a>
                      <div class="margin-top margin-xsmall">
                        <a href="/" class="std-button passiv is__bigger is__100 w-button">Lorem Ipsum is simply dummy</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="featured-plan-background">
                  <div class="featured-background"></div>
                </div>
              </div>
            </div>
          </div>
        </div>










        <div class="collection-wrapper-plans w-dyn-list">
          <div role="list" class="collection-list-plans w-dyn-items">
            <div role="listitem" class="collection-item-plans right w-dyn-item">
              <div id="w-node-a5584a08-a949-e9b4-a23a-5e575f0767f1-4d36a21d" class="plan-wrapper">
                <div class="padding padding-medium cc-z-index">
                  <div class="layout-plan">
                    <div class="plan-top-content">
                      <h2 class="semi-heading">{prices.geek.title}</h2>
                      <div class="plan-price-wrapper">
                        <div class="plan-price-top-wrapper">
                          <div class="plan-price-text">{prices.geek.price}</div>
                          <!-- <div class="plan-price-kg">{prices.geek.notify}</div> -->
                        </div>
                        <div class="normal-text is__bold">{prices.geek.subTitle}</div>
                      </div>
                      <div class="padding-vertical padding-medium">
                        <p class="normal-text is__bold">{prices.geek.shortDesc}</p>
                      </div>
                      <div class="divider is__light"></div>
                      <div class="margin-vertical margin-medium">
                        <div class="plan-rich-text w-richtext">
                          <ul role="list">
                            {#each prices.geek.complect as item}
                              <li>{item}</li>
                            {/each}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="plan-bottom-content">
                      <a href="/" scroll="disable" class="std-button black is__bigger is__100 cc-plan-button w-button">Lorem Ipsum is</a>
                      <div class="margin-top margin-xsmall">
                        <a href="/" class="std-button passiv is__bigger is__100 w-button">Lorem Ipsum is simply dummy</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="featured-plan-background w-condition-invisible">
                  <div class="featured-background"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="w-node-_272a35dc-b199-2873-0fb2-d89d8611df02-4d36a21d" class="fs-form-data-feed">
          <div class="w-dyn-list">
            <div role="list" class="w-dyn-items">
              <div role="listitem" class="w-dyn-item">
                <div fs-cmsselect-element="text-value">HOUSEBLEND medium roast</div>
              </div>
              <div role="listitem" class="w-dyn-item">
                <div fs-cmsselect-element="text-value">PAPUA-NEUGUINEA</div>
              </div>
              <div role="listitem" class="w-dyn-item">
                <div fs-cmsselect-element="text-value">GUATEMALA Golden Flakes</div>
              </div>
              <div role="listitem" class="w-dyn-item">
                <div fs-cmsselect-element="text-value">BRASILIEN Bella Giana</div>
              </div>
              <div role="listitem" class="w-dyn-item">
                <div fs-cmsselect-element="text-value">ACHTZIG ZWANZIG</div>
              </div>
              <div role="listitem" class="w-dyn-item">
                <div fs-cmsselect-element="text-value">ITALO POP</div>
              </div>
              <div role="listitem" class="w-dyn-item">
                <div fs-cmsselect-element="text-value">MAGDEBURG Kaffee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<style>

</style>
