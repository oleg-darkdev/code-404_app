<script>
	// import {  } from '$lib/shared';
	// import {  } from '$lib/widgets';
  // import {  } from '$lib/entities'
</script>


<svelte:head>
  <title>CODE 404</title>
</svelte:head>


<div class="section cc-member-section">
      <header id="nav" class="reduced-navbar">
        <nav class="container navbar-container w-container">
          <div class="navbar-wrapper">
            <a href="/" class="nav-logo-static w-inline-block">
              <img src="images/61377a11a321ba568513ce4d_KRO%CC%88M%20Kaffeero%CC%88sterei%20Magdeburg%20Logo%20light.svg" loading="lazy" alt="Logo der Kaffeerösterei Magdeburg" class="logo">
            </a>
            <div class="register-link-wrapper">
              <div class="cc-konto-right-space">DU hast ein Konto?</div>
              <a href="/login" class="is__bold">Hier anmelden</a>
            </div>
          </div>
        </nav>
      </header>
      <div class="container cc-member-container w-container">
        <div data-w-id="77c3d046-4d48-a1c5-0896-88725d751819" class="form-content-wrapper">
          <div class="page-heading-wrapper has__subtext">
            <h1 class="big-heading">Werde KRÖM Mitglied</h1>
          </div>
          <div class="margin-bottom margin-huge">
            <p class="normal-text">Erstelle dein KRÖM-Profil und favorisiere Produkte, sehe deine Bestellungen ein und spare Zeit beim bezahlen.</p>
          </div>
          <div class="modal-form w-form">
            <form id="email-form" name="email-form" data-name="Email Form" method="get" class="modal-form-wrapper" data-wf-page-id="620e00cd02defe2fb77c27f7" data-wf-element-id="e0ac7b5b-0199-bcfe-c0aa-ee82af6f52cb">
              <div class="input-field-wrapper">
                <div class="is__bold has__all-caps form-heading">E-Mail Adresse <span class="text-span">*</span>
                </div>
                <div class="input-text-field-wrapper">
                  <img src="images/61911ba94627800035cce025_mail.svg" loading="lazy" width="19" alt="" class="input-field-icon">
                  <input class="input-text-field white-input is__shifted w-input" autofocus="true" maxlength="256" name="E-Mail-Adresse" data-name="E-Mail Adresse" placeholder="" type="email" id="user-email" required="">
                </div>
              </div>
              <div class="input-grid-2-columns">
                <div class="input-field-wrapper">
                  <div class="is__bold has__all-caps form-heading">Vorname <span class="text-span-2">*</span>
                  </div>
                  <div class="input-text-field-wrapper">
                    <input class="input-text-field white-input w-input" autofocus="true" maxlength="256" name="Vorname" data-name="Vorname" placeholder="" type="text" id="user-first-name" required="">
                  </div>
                </div>
                <div class="input-field-wrapper">
                  <div class="is__bold has__all-caps form-heading">nachname <span class="text-span-3">*</span>
                  </div>
                  <div class="input-text-field-wrapper">
                    <input class="input-text-field is__white w-input" autofocus="true" maxlength="256" name="Nachname" data-name="Nachname" placeholder="" type="text" id="user-last-name" required="">
                  </div>
                </div>
              </div>
              <div class="input-text-field-wrapper">
                <label id="user-field-b2b" class="w-checkbox b2b-checkbox-field">
                  <div class="w-checkbox-input w-checkbox-input--inputType-custom b2b-checkbox"></div>
                  <input type="checkbox" id="b2b-checkbox" name="checkbox" data-name="Checkbox" style="opacity:0;position:absolute;z-index:-1">
                  <span id="user-label-b2b" data-w-id="d91e825d-2240-3193-1721-dfdbc3acdb4c" class="b2b-checkbox-label w-form-label" for="checkbox">Unternehmenskonto eröffnen</span>
                </label>
              </div>
              <div style="display:none" class="b2b-fields-wrapper">
                <div class="input-field-wrapper">
                  <div class="is__bold has__all-caps form-heading">Unternehmen <span class="text-span">*</span>
                  </div>
                  <div class="input-text-field-wrapper">
                    <input class="input-text-field white-input w-input" autofocus="true" maxlength="256" name="Company" data-name="Company" placeholder="" type="text" id="user-company" required="">
                  </div>
                </div>
                <div class="input-field-wrapper">
                  <div class="is__bold has__all-caps form-heading">Umsatzsteuer-ID <span class="text-span"></span>
                  </div>
                  <div class="input-text-field-wrapper">
                    <input class="input-text-field white-input w-input" autofocus="true" maxlength="256" name="Company" data-name="Company" placeholder="" type="text" id="Tax-Information" required="">
                  </div>
                </div>
              </div>
              <div class="form-divider cc-after-name"></div>
              <div class="input-field-wrapper">
                <div class="is__bold has__all-caps form-heading">Straße und Nummer</div>
                <div class="input-text-field-wrapper">
                  <input class="input-text-field grey-input w-input" autofocus="true" maxlength="256" name="Stra-e" data-name="Straße" placeholder="" type="text" id="user-address-line">
                </div>
              </div>
              <div class="input-grid-2-columns">
                <div class="input-field-wrapper">
                  <div class="is__bold has__all-caps form-heading">PLZ</div>
                  <div class="input-text-field-wrapper">
                    <input class="input-text-field grey-input w-input" autofocus="true" maxlength="256" name="Postleitzahl" data-name="Postleitzahl" placeholder="" type="text" id="user-postal-code" required="">
                  </div>
                </div>
                <div class="input-field-wrapper">
                  <div class="is__bold has__all-caps form-heading">Ort</div>
                  <div class="input-text-field-wrapper">
                    <input class="input-text-field grey-input w-input" autofocus="true" maxlength="256" name="Ort" data-name="Ort" placeholder="" type="text" id="user-place">
                  </div>
                </div>
              </div>
              <div class="form-divider cc-before-password"></div>
              <div class="input-field-wrapper">
                <div class="is__bold has__all-caps form-heading">Passwort <span class="text-span">*</span>
                </div>
                <div class="input-text-field-wrapper">
                  <input class="input-text-field white-input is__shifted w-input" maxlength="256" name="Passwort" data-name="Passwort" placeholder="" data-w-id="e0ac7b5b-0199-bcfe-c0aa-ee82af6f52d1" type="password" id="user-password" required="">
                  <img src="images/61911ba9aaba4d54b6d0b987_lock.svg" loading="lazy" width="17" alt="" class="input-field-icon lock">
                </div>
              </div>
              <div class="input-field-wrapper">
                <div class="is__bold has__all-caps form-heading">Passwort wiederholen <span class="text-span">*</span>
                </div>
                <div class="input-text-field-wrapper">
                  <input class="input-text-field white-input is__shifted w-input" maxlength="256" name="Passwort-Wiederholung" data-name="Passwort Wiederholung" placeholder="" type="password" id="user-password-check" required="">
                  <img src="images/61911ba9aaba4d54b6d0b987_lock.svg" loading="lazy" width="17" alt="" class="input-field-icon lock">
                </div>
              </div>
              <div class="margin-bottom margin-small">
                <div class="smalll-text is__passiv">Indem du ein Konto erstellst, erklärst du dich mit der <a href="/datenschutz">Datenschutzrichtlinie</a> und den <a href="/allgemeine-geschaftsbedingungen">Geschäftsbedingungen</a> von KRÖM einverstanden. </div>
              </div>
              <a id="user-register-button" href="#" class="std-button is__bigger is__100 is__black w-button">Registrieren</a>
              <div id="email-sent" class="succeed-form-data-text">Wir haben dir eine E-Mail geschickt, in der du deine E-Mail Adresse bestätigen musst.</div>
              <div id="unequal-password" class="invalid-form-data-text">Die Passwörter stimmen nicht überein.</div>
              <div id="required-fields" class="invalid-form-data-text">Bitte fülle alle nötigen Felder aus.</div>
              <div id="weak-password" class="invalid-form-data-text">Passwort muss beinhalten: Min 8 Zeichen, 1 Großbuchstabe, 1 Zahl <br>Ungültige Sonderzeichen: " </div>
              <div id="invalid-email" class="invalid-form-data-text">Bitte gib eine gültige E-Mail Adresse ein.</div>
              <div id="email-already-exists" class="invalid-form-data-text">Diese E-Mail Adresse existiert bereits.</div>
              <div id="general-error" class="invalid-form-data-text">Huch, es ist ein Fehler aufgetreten. Bitte versuche es nochmal oder <a href="mailto:info@kaffeeröstereimagdeburg.de">kontaktiere</a> uns. </div>
            </form>
            <div class="hidden-wf-message w-form-done"></div>
            <div class="hidden-wf-message w-form-fail"></div>
          </div>
        </div>
      </div>
      <div class="member-side-image">
        <div class="sticky-french-press-lottie">
          <div data-is-ix2-target="1" class="herdkanne-lottie" data-w-id="304ad7eb-1a1b-58c6-e96f-9ad3c267b4c1" data-animation-type="lottie" data-src="https://cdn.prod.website-files.com/610cf33140aaf753c6f8f7bb/623e0629235faf9f57e6c677_herdkanne%20-%20login%20-%20violet.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="5.005004801146985" data-duration="0"></div>
        </div>
      </div>
    </div>




<style>

</style>
