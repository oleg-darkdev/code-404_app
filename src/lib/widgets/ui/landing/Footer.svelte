<script>
  import { ftpCodesList, httpCodesList, smtpCodesList, navigation, sponsors, partners  } from '$lib/shared';

</script>


<footer class="section is__black">
  <div class="container cc-footer w-container">
    <a href="/" aria-current="page" class="footer-logo w-inline-block w--current">
      <img src="images/61377a11a321ba568513ce4d_KRO%CC%88M%20Kaffeero%CC%88sterei%20Magdeburg%20Logo%20light.svg" loading="lazy" alt="Logo der Kaffeerösterei Magdeburg" class="footer-logo-image">
    </a>
    <div class="footer-navigation">
      <div class="footer-navlink-wrapper">
        <div class="footer-navlink-header">Navigation</div>
        <div class="w-dyn-list">
          <div role="list" class="footer-collection-categorys w-dyn-items">
            {#each navigation as {title, link}}
            <div role="listitem" class="w-dyn-item">
              <a href="{link}" class="footer-link">{title}</a>
            </div>
            {/each}
            <div role="listitem" class="w-dyn-item">
              <a href="{httpCodesList.link}" target="_blank" class="footer-link">{httpCodesList.title}</a>
            </div>
            <div role="listitem" class="w-dyn-item">
              <a href="{smtpCodesList.link}" target="_blank" class="footer-link">{smtpCodesList.title}</a>
            </div>
            <div role="listitem" class="w-dyn-item">
              <a href="{ftpCodesList.link}" target="_blank" class="footer-link">{ftpCodesList.title}</a>
            </div>

          </div>
        </div>
      </div>
      <div class="footer-navlink-wrapper">
        <div class="footer-navlink-header">List of HTTP codes</div>
        {#each httpCodesList.allCodes as {title, link}}
        <a href="{link}" target="_blank" class="footer-link">{title}</a>
        {/each}
      </div>

      <div  class="footer-navlink-wrapper">
        <div class="footer-navlink-header">List of FTP codes</div>
        {#each smtpCodesList.allCodes as {title, link}}
        <a href="{link}" target="_blank" class="footer-link">{title}</a>
        {/each}


        <div class="mt-10 footer-navlink-header">List of SMTP codes</div>
        {#each ftpCodesList.allCodes as {title, link}}
        <a href="{link}" target="_blank" class="footer-link">{title}</a>
        {/each}
      </div>
      <div class="footer-navlink-wrapper">
        <div class="footer-navlink-header">Contact</div>


      <a name="">contact</a>
        <div class="rich-text-mono w-richtext">
          <p>
            <a href="">
              <strong>Lorem Ipsum is simply dummy <br>‍ </strong>
            </a>Do. 15:30-17:30 Uhr <br>
            <br>
            <a href="https://goo.gl/maps/FtBWZhL5TDJgsuH89">
              <strong>Lorem Ipsum is simply dummy <br>‍ </strong>
            </a>Mo. - Do. 11:00-18:00 Uhr <br>Fr. - Sa. 10:00-18:00 Uhr
          </p>
        </div>

        <div class="footer-navlink-header mt-10">Partners</div>
        {#each partners as {title, link}}
        <a href="/" target="_blank" class="footer-link">{title}</a>
        {/each}
      </div>



    </div>
    <div class="footer-legal">
      <div class="footer-legal-wrapper">
        <div class="footer-column-1">
          <div class="copyright-code w-embed w-script">Copyright © 2024, Lorem Ipsum is simply dummy </div>
        </div>
        <div class="footer-column-2">
          <a href="/" class="footer-small-link">Lorem </a>
          <a href="/" class="footer-small-link">Ipsum is </a>
          <a href="/" class="footer-small-link">simply dummy</a>
          <div class="footer-small-link cookie-pref">Lorem Ipsum is simply dummy</div>
        </div>
        <div class="footer-column-3">
          <a href="/" class="footer-small-link cc-dasda">by:dasda</a>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-sponsor">
    <div class="w-layout-blockcontainer container w-container">
      <div class='flex flex-row flex-wrap lg:justify-start md:justify-start justify-between'>
        {#each sponsors as sponsor}
          <a href="{sponsor.link}" class='h-16 w-auto lg:mr-14 md:mr-10 my-2 lg:my-0 md:my-0' target="_blank">
            <img src="{sponsor.logo}" loading="lazy" alt="{sponsor.title}" class="h-12 footer-sponsor-logo">
          </a>
        {/each}
      </div>
    </div>
  </div>
</footer>


<style>
/* .footer-sponsor-logo {
  width: 200px;
} */
</style>
