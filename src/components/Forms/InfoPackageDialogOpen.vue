<script setup lang="ts">import { fireInfoPackageOpenEvent } from '~/google-tag-manager';

const email = ref('')
const showForm = ref(false)

const submitFunction = async (e: SubmitEvent) => {
  showForm.value = true

  await nextTick()

  const emailInput = document.querySelector('#EMAIL');
  (emailInput as HTMLInputElement).value = email.value
  if (e.submitter?.id === 'perPost') {
    (document.querySelectorAll('[name="INFOPAKET"]')[1] as HTMLInputElement).checked = true;
    (document.querySelector('#STRASSE_HAUSNUMMER') as HTMLInputElement).required = true;
    (document.querySelector('#PLZ') as HTMLInputElement).required = true;
    (document.querySelector('#STADT') as HTMLInputElement).required = true
  }
  if (e.submitter?.id === 'perEmail') {
    (document.querySelectorAll('[name="INFOPAKET"]')[0] as HTMLInputElement).checked = true;
    (document.querySelector('#STRASSE_HAUSNUMMER_DIV') as HTMLDivElement).style.display = 'none';
    (document.querySelector('#PLZ_DIV') as HTMLDivElement).style.display = 'none';
    (document.querySelector('#STADT_DIV') as HTMLDivElement).style.display = 'none'
  }

  (document.querySelector('#INFOPAKET_DIV') as HTMLDivElement).style.display = 'none'

  fireInfoPackageOpenEvent(email.value)
}
</script>

<template>
  <form id="Form1" class="flex flex-col gap-4" method="get" @submit.prevent="e => submitFunction(e as SubmitEvent)">
    <input
      id="email"
      v-model="email"
      class="w-100 border-2 rounded-full w-full max-w-112 px-4 py-2.5 mx-auto"
      placeholder="name@email.de"
      type="email"
      name="email"
      required
    >
    <div class="flex gap-3 mx-auto">
      <button id="perPost" type="submit" class="text-white bg-primary-400 flex gap-2 items-center px-4 py-2.5 rounded-lg w-fit">
        <div class="i-lucide:package w-6 h-6 shrink-0" />Per Post erhalten
      </button>
      <button id="perEmail" type="submit" class="text-white bg-primary-400 flex gap-2 items-center px-4 py-2.5 rounded-lg w-fit">
        <div class="i-lucide:mail w-6 h-6 shrink-0" />Per Email erhalten
      </button>
    </div>
  </form>

  <Modal class="z-2" :show="showForm" @close="showForm = false">
    <!-- Begin Sendinblue Form -->
    <!-- START - We recommend to place the below code where you want the form in your website html  -->
    <div class="sib-form" style="text-align: center; background-color: #ffffff;">
      <div id="sib-form-container" class="sib-form-container">
        <div id="error-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;max-width:540px;">
          <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
            <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
              <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
            </svg>
            <span class="sib-form-message-panel__inner-text">
              Deine Anmeldung konnte nicht gespeichert werden. Bitte versuche es erneut.
            </span>
          </div>
        </div>
        <div />
        <div id="success-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66;max-width:540px;">
          <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
            <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
              <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
            </svg>
            <span class="sib-form-message-panel__inner-text">
              Deine Anmeldung war erfolgreich.
            </span>
          </div>
        </div>
        <div />
        <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:rgba(255,255,255,1); max-width:540px; border-radius:24px; border-width:0px; border-color:#c1cdda; border-style:solid; direction:ltr">
          <form id="sib-form" method="POST" action="https://ccfae1fd.sibforms.com/serve/MUIEAMtcwBoDSajeVyAFqcXanXXX_5DYtIBkCd8OHYnKn08yNzKkRmHqPa0R2_5qRo95ez3A_p53gcZ_lTZt0kitu4Or72Q-TVKRO7DnSpeG7jl1yMYJEfBwsyyx7crgaU6K3S3J32rP2D8-61wdaY7whnGk00ssJt3PwttbHvBDkbgXDnuBgute0z6QGrLEswRDd2V7MpINp6Be" data-type="subscription">
            <div style="padding: 8px 0;">
              <div class="sib-form-block" style="font-size:32px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent; text-align:left">
                <p>Melde dich zum Newsletter an um dein Infopaket zu erhalten.</p>
              </div>
            </div>
            <div style="padding: 8px 0;">
              <div class="sib-input sib-form-block">
                <div class="form__entry entry_block">
                  <div class="form__label-row ">
                    <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;" for="EMAIL" data-required="*">Email-Adresse</label>

                    <div class="entry__field">
                      <input id="EMAIL" class="input " type="text" name="EMAIL" autocomplete="off" placeholder="max.mustermann@mail.de" data-required="true" required>
                    </div>
                  </div>

                  <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;" />
                </div>
              </div>
            </div>
            <div style="padding: 8px 0;">
              <div class="sib-input sib-form-block">
                <div class="form__entry entry_block">
                  <div class="form__label-row ">
                    <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;" for="VORNAME" data-required="*">Vorname</label>

                    <div class="entry__field">
                      <input
                        id="VORNAME"
                        class="input "
                        maxlength="200"
                        type="text"
                        name="VORNAME"
                        autocomplete="off"
                        placeholder="Max"
                        data-required="true"
                        required
                      >
                    </div>
                  </div>

                  <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;" />
                </div>
              </div>
            </div>
            <div style="padding: 8px 0;">
              <div class="sib-input sib-form-block">
                <div class="form__entry entry_block">
                  <div class="form__label-row ">
                    <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;" for="NACHNAME" data-required="*">Nachname</label>

                    <div class="entry__field">
                      <input
                        id="NACHNAME"
                        class="input "
                        maxlength="200"
                        type="text"
                        name="NACHNAME"
                        autocomplete="off"
                        placeholder="Mustermann"
                        data-required="true"
                        required
                      >
                    </div>
                  </div>

                  <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;" />
                </div>
              </div>
            </div>
            <div style="padding: 8px 0;">
              <div class="sib-input sib-form-block">
                <div class="form__entry entry_block">
                  <div class="form__label-row ">
                    <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;" for="TELEFONNUMMER">Telefonnummer</label>

                    <div class="entry__field">
                      <input id="TELEFONNUMMER" class="input " maxlength="200" type="text" name="TELEFONNUMMER" autocomplete="off" placeholder="+49 170 12345678">
                    </div>
                  </div>

                  <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;" />
                </div>
              </div>
            </div>
            <div id="INFOPAKET_DIV" style="padding: 8px 0;">
              <div class="sib-radiobutton-group sib-form-block" data-required="true">
                <div class="form__entry entry_mcq">
                  <div class="form__label-row ">
                    <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;" for="INFOPAKET" data-required="*">Wie möchtest du das Infopaket erhalten?</label>
                    <div>
                      <div class="entry__choice" style="">
                        <label>
                          <input type="radio" name="INFOPAKET" class="input_replaced" value="1" required>
                          <span class="radio-button" style="margin-left: " /><span style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent;">per Email</span> </label>
                      </div>
                      <div class="entry__choice" style="">
                        <label>
                          <input type="radio" name="INFOPAKET" class="input_replaced" value="2" required>
                          <span class="radio-button" style="margin-left: " /><span style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent;">per Post</span> </label>
                      </div>
                    </div>
                  </div>
                  <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;" />
                </div>
              </div>
            </div>
            <div id="STRASSE_HAUSNUMMER_DIV" style="padding: 8px 0;">
              <div class="sib-input sib-form-block">
                <div class="form__entry entry_block">
                  <div class="form__label-row ">
                    <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;" for="STRASSE_HAUSNUMMER"><span>Straße, Hausnummer</span><span class="text-#FF4949">*</span></label>

                    <div class="entry__field">
                      <input id="STRASSE_HAUSNUMMER" class="input " maxlength="200" type="text" name="STRASSE_HAUSNUMMER" autocomplete="off" placeholder="Musterstraße 1">
                    </div>
                  </div>

                  <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;" />
                </div>
              </div>
            </div>
            <div id="PLZ_DIV" style="padding: 8px 0;">
              <div class="sib-input sib-form-block">
                <div class="form__entry entry_block">
                  <div class="form__label-row ">
                    <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;" for="PLZ"><span>PLZ</span><span class="text-#FF4949">*</span></label>

                    <div class="entry__field">
                      <input id="PLZ" class="input " maxlength="200" type="text" name="PLZ" autocomplete="off" placeholder="10101">
                    </div>
                  </div>

                  <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;" />
                </div>
              </div>
            </div>
            <div id="STADT_DIV" style="padding: 8px 0;">
              <div class="sib-input sib-form-block">
                <div class="form__entry entry_block">
                  <div class="form__label-row ">
                    <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;" for="STADT"><span>Ort</span><span class="text-#FF4949">*</span></label>

                    <div class="entry__field">
                      <input id="STADT" class="input " maxlength="200" type="text" name="STADT" autocomplete="off" placeholder="Musterstadt">
                    </div>
                  </div>

                  <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;" />
                </div>
              </div>
            </div>
            <div style="padding: 8px 0;">
              <div class="sib-radiobutton-group sib-form-block" data-required="true">
                <div class="form__entry entry_mcq">
                  <div class="form__label-row ">
                    <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;" for="QUESTION_ROLE" data-required="*">Für wen ist Melli gedacht?</label>
                    <div>
                      <div class="entry__choice" style="">
                        <label>
                          <input type="radio" name="QUESTION_ROLE" class="input_replaced" value="1" required>
                          <span class="radio-button" style="margin-left: " /><span style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent;">mich selbst</span> </label>
                      </div>
                      <div class="entry__choice" style="">
                        <label>
                          <input type="radio" name="QUESTION_ROLE" class="input_replaced" value="2" required>
                          <span class="radio-button" style="margin-left: " /><span style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent;">einen Angehörigen</span> </label>
                      </div>
                    </div>
                  </div>
                  <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;" />
                </div>
              </div>
            </div>
            <div style="padding: 8px 0;">
              <div class="sib-optin sib-form-block" data-required="true">
                <div class="form__entry entry_mcq">
                  <div class="form__label-row ">
                    <div class="entry__choice" style="">
                      <label>
                        <input id="OPT_IN" type="checkbox" class="input_replaced" value="1" name="OPT_IN" required>
                        <span
                          class="checkbox checkbox_tick_positive"
                          style="margin-left:"
                        /><span style="font-size:14px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent;"><p>Ich möchte den melli.com Newsletter erhalten und akzeptiere die Datenschutzerklärung.</p><span data-required="*" style="display: inline;" class="entry__label entry__label_optin" /></span> </label>
                    </div>
                  </div>
                  <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;" />
                  <label class="entry__specification" style="font-size:12px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#8390A4; text-align:left">
                    Du kannst den Newsletter jederzeit über den Link in unserem Newsletter abbestellen.
                  </label>
                </div>
              </div>
            </div>
            <div style="padding: 8px 0;">
              <div class="sib-form-block" style="text-align: left">
                <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#FFFFFF; background-color:#3E4857; border-radius:3px; border-width:0px;" form="sib-form" type="submit">
                  <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                    <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                  </svg>
                  ANMELDEN
                </button>
              </div>
            </div>

            <input type="text" name="email_address_check" value="" class="input--hidden">
            <input type="hidden" name="locale" value="de">
          </form>
        </div>
      </div>
    </div>
    <!-- END - We recommend to place the below code where you want the form in your website html  -->
    <!-- End Sendinblue Form -->
  </Modal>
</template>
