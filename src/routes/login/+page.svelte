<script>
	// import {  } from '$lib/shared';
	// import {  } from '$lib/widgets';
  // import {  } from '$lib/entities'
</script>


<svelte:head>
  <title>Status 404</title>
</svelte:head>




    <div id="animation-click-trigger" data-w-id="8bc04369-9677-8ef1-530c-d8af52fa1d31" class="password-animation-click-trigger"></div>
    <div class="section cc-member-section">
      <header id="nav" class="reduced-navbar">
        <nav class="container navbar-container w-container">
          <div class="navbar-wrapper">
            <a href="/" class="nav-logo-static w-inline-block">
              <img src="images/61377a11a321ba568513ce4d_KRO%CC%88M%20Kaffeero%CC%88sterei%20Magdeburg%20Logo%20light.svg" loading="lazy" alt="Logo der Kaffeerösterei Magdeburg" class="logo">
            </a>
            <div class="register-link-wrapper">
              <div class="cc-konto-right-space">Kein Konto?</div>
              <a href="/registrieren" class="is__bold">Jetzt registrieren</a>
            </div>
          </div>
        </nav>
      </header>
      <div class="container cc-member-container w-container">
        <div data-w-id="77c3d046-4d48-a1c5-0896-88725d751819" class="form-content-wrapper">
          <div class="page-heading-wrapper has__subtext">
            <h1 class="big-heading">Anmelden</h1>
          </div>
          <div class="margin-bottom margin-huge">
            <p class="normal-text">Dein Konto für alles bei KRÖM.</p>
          </div>
          <div id="user-log-in-popup" class="modal-form w-form">
            <form id="wf-form-user-log-in-popup" name="wf-form-user-log-in-popup" data-name="user-log-in-popup" method="get" data-wf-page-id="620e00cd02defe12577c27f6" data-wf-element-id="e0ac7b5b-0199-bcfe-c0aa-ee82af6f52cb">
              <div class="input-field-wrapper">
                <div class="is__bold has__all-caps form-heading">E-Mail Adresse <span class="text-span">*</span>
                </div>
                <div class="input-text-field-wrapper">
                  <img src="images/61911ba94627800035cce025_mail.svg" loading="lazy" width="19" alt="" class="input-field-icon">
                  <input class="input-text-field white-input is__shifted w-input" autofocus="true" maxlength="256" name="E-Mail-Adresse" data-name="E-Mail Adresse" placeholder="E-EMAIL ADRESSE" type="email" id="user-email" required="">
                </div>
              </div>
              <div class="input-field-wrapper">
                <div class="is__bold has__all-caps form-heading">Passwort <span class="text-span">*</span>
                </div>
                <div class="input-text-field-wrapper">
                  <input class="input-text-field white-input is__shifted w-input" maxlength="256" name="Passwort" data-name="Passwort" placeholder="PASSWORT" data-w-id="e0ac7b5b-0199-bcfe-c0aa-ee82af6f52d1" type="password" id="user-password" required="">
                  <img src="images/61911ba9aaba4d54b6d0b987_lock.svg" loading="lazy" width="17" alt="" class="input-field-icon lock">
                </div>
              </div>
              <div class="lost-pw-div">
                <a data-w-id="5dca87b0-6c5e-de0c-dde1-91a038d5d1e1" href="#" class="lost-password-link">Passwort vergessen</a>
              </div>
              <div class="margin-bottom margin-small">
                <div class="smalll-text is__passiv">Indem du dich einloggst, erklärst du dich mit der <a href="/datenschutz">Datenschutzrichtlinie</a> und den <a href="/allgemeine-geschaftsbedingungen">Allgemeinen Geschäftsbedingungen</a> von KRÖM einverstanden. </div>
              </div>
              <a id="user-login-button" href="#" class="std-button is__black is__bigger is__100 w-button">Einloggen</a>
              <div id="required-fields-login" class="invalid-form-data-text">Bitte fülle alle nötigen Felder aus.</div>
              <div id="user-login-value-incorrect" class="invalid-form-data-text">Deine E-Mail Adresse oder das Passwort ist falsch.</div>
              <div id="general-error" class="invalid-form-data-text">Huch, da ist leider etwas schief gelaufen. Bitte versuche es nochmal oder versuch es später wieder.</div>
              <div class="margin-top margin-medium">
                <a href="/registrieren" class="std-button is__bigger is__100 is__violet has__no-borders w-button">Jetzt registrieren</a>
              </div>
            </form>
            <div class="hidden-wf-message w-form-done"></div>
            <div class="hidden-wf-message w-form-fail"></div>
          </div>
        </div>
        <div class="form-content-wrapper password-reset">
          <div class="page-heading-wrapper has__subtext has__top-toggle">
            <h1 class="big-heading">Passwort zurück­setzen</h1>
            <div data-w-id="05723153-6d35-be11-906d-dc8d0a42e5f9" class="top-toggle">
              <div class="is__bold is__underlined">Login</div>
            </div>
          </div>
          <div class="margin-bottom margin-huge">
            <p class="normal-text">Gib deine E-Mail-Adresse ein und wir senden dir Anweisungen zur Zurücksetzung deines Kennworts zu.</p>
          </div>
          <div id="forgot-password-form" class="reset-form w-form">
            <form id="wf-form-" name="wf-form-" data-name="" method="get" data-wf-page-id="620e00cd02defe12577c27f6" data-wf-element-id="5a39531f-03cf-44db-bdb0-6e265cb8f850">
              <div class="input-field-wrapper">
                <div class="is__bold has__all-caps form-heading">E-Mail Adresse <span class="text-span">*</span>
                </div>
                <div class="input-text-field-wrapper">
                  <img width="19" loading="lazy" alt="" src="images/61911ba94627800035cce025_mail.svg" class="input-field-icon">
                  <input class="input-text-field white-input is__shifted w-input" autofocus="true" maxlength="256" name="E-Mail-Adresse" data-name="E-Mail Adresse" placeholder="E-EMAIL ADRESSE" type="email" id="user-mail-reset-pasword" required="">
                </div>
              </div>
              <div class="input-field-wrapper"></div>
              <a id="reset-password-button" href="#" class="std-button is__black is__bigger is__100 w-button">Zurücksetzen</a>
              <div id="invalid-email-reset-password" class="invalid-form-data-text">Bitte gib eine gültige E-Mail Adresse ein.</div>
              <div id="required-fields-reset-password" class="invalid-form-data-text">Bitte fülle alle nötigen Felder aus.</div>
              <div id="email-address-not-found" class="invalid-form-data-text">Ein Account mit dieser E-Mail Adresse existiert nicht.</div>
              <div id="succeed-form-message" class="succeed-form-data-text">Wir haben dir eine E-Mail zugesendet, mit der du dein Passwort zurücksetzen kannst. <br>Bitte siehe auch in dem Spam-Ordner nach. </div>
            </form>
            <div class="hidden-wf-message w-form-done"></div>
            <div class="hidden-wf-message w-form-fail"></div>
          </div>
        </div>
      </div>
      <div class="member-side-image">
        <div class="sticky-french-press-lottie">
          <div data-is-ix2-target="1" class="french-press-animation" data-w-id="534c4466-5fae-1f50-0249-02c49e1fa78d" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/610cf33140aaf753c6f8f7bb/623e02ef365c98317c7a6729_french%20press%20-%20registration%20-%20violet.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="7.707707393766356" data-duration="0"></div>
        </div>
      </div>
    </div>
   


<style>

</style>
