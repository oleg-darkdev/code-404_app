<script>
  import { ftpCodesList, httpCodesList, smtpCodesList, navigation, sponsors, partners  } from '$lib/shared';

</script>


<footer class="section is__black">
  <div class="container cc-footer w-container">
    <a href="/" aria-current="page" class="footer-logo w-inline-block w--current">
      <img src="/images/logo.svg" loading="lazy" alt="404_code logo" class="footer-logo-image h-14">
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
            <a href="https:/goo.gl/maps/FtBWZhL5TDJgsuH89">
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


.footer-navigation {
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  border-bottom: 1px solid var(--grey);
  color: var(--white);
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  padding-bottom: 64px;
  display: grid;
}

.footer-link {
  color: var(--grey);
  text-transform: uppercase;
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: none;
  display: block;
}

.footer-link:hover {
  color: var(--purple);
}

.footer-link.cart {
  margin-right: 0;
}

.footer-link.nav-dropdown-link {
  width: 100%;
  margin-left: 0;
  padding-left: 21px;
  padding-right: 21px;
}

.footer-link.nav-dropdown-link:hover {
  color: var(--grey);
}

.footer-link.nav-dropdown-link.w--current {
  color: var(--black);
}

.footer-link.nav-dropdown-link.w--current:hover {
  color: var(--grey);
}

.footer-link.korb {
  padding-right: 0;
}

.footer-link.korb:hover {
  color: var(--white);
  text-decoration: none;
}

.footer-navlink-wrapper {
  flex-direction: column;
  align-items: flex-start;
  display: flex;
}

.footer-navlink-header {
  text-transform: uppercase;
  margin-bottom: 32px;
  font-weight: 700;
}

.footer-legal {
  margin-top: 64px;
  margin-bottom: 54px;
}

.footer-legal-wrapper {
  flex-flow: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  text-decoration: none;
  display: flex;
  position: relative;
}

.footer-small-link {
  color: var(--grey);
  margin-bottom: 6px;
  margin-right: 32px;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
}

.footer-small-link:hover {
  color: var(--purple);
}

.footer-small-link.cc-dasda {
  margin-right: 0;
  display: none;
}

.footer-small-link.no-text-wrapping {
  white-space: nowrap;
}

.footer-small-link.cookie-pref {
  cursor: pointer;
}

.copyright-code {
  color: var(--white);
  margin-bottom: 0;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.2;
}

.footer-logo {
  margin-bottom: 64px;
}

.footer-logo-image {
  filter: invert();
}

.footer-text-link {
  border-bottom: 1px solid rgba(222, 212, 255, .38);
  text-decoration: none;
}

.footer-text-link:hover {
  color: var(--violet-hover);
}

.footer-collection-categorys {
  flex-direction: column;
  align-items: flex-start;
  display: flex;
}


.footer-column-1 {
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 32px;
}

.footer-column-2 {
  flex-wrap: wrap;
  align-items: center;
  display: flex;
}

.footer-column-3 {
  position: absolute;
  top: 0%;
  bottom: auto;
  left: auto;
  right: 0%;
}

.footer-sponsor {
  background-color: var(--white);
  margin-left: -32px;
  margin-right: -32px;
  padding: 32px;
}

@media screen and (max-width: 991px) {
  .footer-link.desktop-only {
    display: none;
  }

  .footer-legal-wrapper {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-small-link.cc-dasda {
    position: static;
  }
  .footer-column-1 {
    margin-bottom: 10px;
  }

  .footer-column-3 {
    top: auto;
    bottom: 0%;
    left: auto;
    right: 0%;
  }
}

@media screen and (max-width: 767px) {
  .footer-navigation {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 42px;
  }

  .footer-legal {
    margin-top: 42px;
    margin-bottom: 24px;
  }

  .footer-sponsor {
    margin-left: -16px;
    margin-right: -16px;
    padding: 16px;
  }
}


@media screen and (max-width: 479px) {
  .footer-link {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .footer-small-link.cc-datenschutz {
    border-right-style: none;
  }

    .footer-column-3 {
    margin-top: 16px;
    position: static;
  }
}
</style>
