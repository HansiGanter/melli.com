<script setup lang="ts">
import { fireCallbackOpenEvent, fireCallbackSentEvent, fireContactEvent } from '~/google-tag-manager'
const { t } = useI18n()

const socials = [
  {
    icon: 'i-lucide:mail',
    text: t('contact.email'),
    url: 'mailto:hallo@melli.com',
    desc: 'email',
  },
  {
    icon: 'i-bxl:whatsapp',
    text: t('contact.whatsapp'),
    url: 'https://wa.me/message/RXR37YZAHSGKB1',
    desc: 'whatsapp',
  },
]

const submitFunction = async () => {
  callbackModalOpen.value = true
  await nextTick()

  const formSubmit = document.querySelector('#sib-form');
  formSubmit?.addEventListener('submit', () => {
    const emailvalue = (document.querySelector('#EMAIL') as HTMLInputElement).value;
    const telvalue = (document.querySelector('#TELEFONNUMMER') as HTMLInputElement).value;
    const firstnamevalue = (document.querySelector('#VORNAME') as HTMLInputElement).value;
    const lastnamevalue = (document.querySelector('#NACHNAME') as HTMLInputElement).value;
    fireCallbackSentEvent(emailvalue, telvalue, firstnamevalue, lastnamevalue);
  })
  fireCallbackOpenEvent()
}
const callbackModalOpen = ref(false)
</script>

<template>
  <div class="flex flex-col gap-8 sm:items-center">
    <div class="flex flex-col gap-6 max-w-200">
      <h3 class="text-4xl text-primary-300 font-semibold sm:text-center">
        {{ t('contact.heading') }}
      </h3>
      <p class="font-medium text-xl text-white sm:text-center">
        {{ t('contact.text') }}
      </p>
    </div>
    <div class="flex flex-col sm:flex-row gap-8 items-center">
      <div v-for="social in socials" :key="social.text" class="flex flex-col gap-5 items-center">
        <div class="w-12 h-12 shrink-0 text-primary-300" :class="social.icon" />
        <a :href="social.url" target="_blank"
          class="bg-primary-400 rounded-lg py-2.5 px-4 w-fit font-medium text-white text-base text-center"
          @click="fireContactEvent(social.desc)">
          {{ social.text }}
        </a>
      </div>
      <div class="flex flex-col gap-5 items-center">
        <div class="i-lucide:phone-call w-12 h-12 shrink-0 text-primary-300" />
        <button class="bg-primary-400 rounded-lg py-2.5 px-4 w-fit font-medium text-white text-base text-center"
          @click="submitFunction()">
          {{ t('contact.phone') }}
        </button>
      </div>
    </div>
  </div>
  <Modal :show="callbackModalOpen" @close="callbackModalOpen = false">
    <!-- Begin Sendinblue Form -->
    <!-- START - We recommend to place the below code where you want the form in your website html  -->
    <div class="sib-form" style="text-align: center;
             background-color: #ffffff;                                 ">
      <div id="sib-form-container" class="sib-form-container">
        <div id="error-message" class="sib-form-message-panel"
          style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;max-width:540px;">
          <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
            <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
              <path
                d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
            </svg>
            <span class="sib-form-message-panel__inner-text">
              Deine Anmeldung konnte nicht gespeichert werden. Bitte versuche es erneut.
            </span>
          </div>
        </div>
        <div></div>
        <div id="success-message" class="sib-form-message-panel"
          style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66;max-width:540px;">
          <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
            <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
              <path
                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
            </svg>
            <span class="sib-form-message-panel__inner-text">
              Deine Anmeldung war erfolgreich.
            </span>
          </div>
        </div>
        <div></div>
        <div id="sib-container" class="sib-container--large sib-container--vertical"
          style="text-align:center; background-color:rgba(255,255,255,1); max-width:540px; border-radius:3px; border-width:0px; border-color:#C0CCD9; border-style:solid; direction:ltr">
          <form id="sib-form" method="POST"
            action="https://ccfae1fd.sibforms.com/serve/MUIEALvek7hDxwsISEQ5sU7dgtDeuvc2DMYu05-KQwbsfPPtHFgRoqbsH2LJuN9yAgqciWRAHKn0CQD8k7fnrcD8x73UgHuM1D5Rjab9RTIQeThzTzU9OOShJpf0LOZVmjeMvUvL_7msWTNw_2D-t1QhayHFLdtBinJyGburC2zhtamefmvNiXYmvB5KoZvUkAhrOAe5-BnAhZdE"
            data-type="subscription">
            <div style="padding: 8px 0;">
              <div class="sib-form-block"
                style="font-size:32px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent; text-align:left">
                <p>Vereinbare einen Rückruf!</p>
              </div>
            </div>
            <div style="padding: 8px 0;">
              <div class="sib-form-block"
                style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent; text-align:left">
                <div class="sib-text-form-block">
                  <p>Gerne klären wir all deine Fragen rund um Melli telefonisch mit dir. Um dich zu kontaktieren,
                    benötigen wir lediglich die unten stehenden Informationen.</p>
                </div>
              </div>
            </div>
            <div style="padding: 8px 0;">
              <div class="sib-input sib-form-block">
                <div class="form__entry entry_block">
                  <div class="form__label-row ">
                    <label class="entry__label"
                      style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;"
                      for="VORNAME" data-required="*">Vorname</label>

                    <div class="entry__field">
                      <input class="input " maxlength="200" type="text" id="VORNAME" name="VORNAME" autocomplete="off"
                        placeholder="Max" data-required="true" required />
                    </div>
                  </div>

                  <label class="entry__error entry__error--primary"
                    style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
                  </label>
                </div>
              </div>
            </div>
            <div style="padding: 8px 0;">
              <div class="sib-input sib-form-block">
                <div class="form__entry entry_block">
                  <div class="form__label-row ">
                    <label class="entry__label"
                      style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;"
                      for="NACHNAME" data-required="*">Nachname</label>

                    <div class="entry__field">
                      <input class="input " maxlength="200" type="text" id="NACHNAME" name="NACHNAME" autocomplete="off"
                        placeholder="Mustermann" data-required="true" required />
                    </div>
                  </div>

                  <label class="entry__error entry__error--primary"
                    style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
                  </label>
                </div>
              </div>
            </div>
            <div style="padding: 8px 0;">
              <div class="sib-input sib-form-block">
                <div class="form__entry entry_block">
                  <div class="form__label-row ">
                    <label class="entry__label"
                      style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;"
                      for="TELEFONNUMMER" data-required="*">Telefonnummer</label>

                    <div class="entry__field">
                      <input class="input " maxlength="200" type="text" id="TELEFONNUMMER" name="TELEFONNUMMER"
                        autocomplete="off" placeholder="+49 170 12345678" data-required="true" required />
                    </div>
                  </div>

                  <label class="entry__error entry__error--primary"
                    style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
                  </label>
                </div>
              </div>
            </div>
            <div style="padding: 8px 0;">
              <div class="sib-input sib-form-block">
                <div class="form__entry entry_block">
                  <div class="form__label-row ">
                    <label class="entry__label"
                      style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;"
                      for="EMAIL" data-required="*">Email</label>

                    <div class="entry__field">
                      <input class="input " type="text" id="EMAIL" name="EMAIL" autocomplete="off"
                        placeholder="max.mustermann@mail.de" data-required="true" required />
                    </div>
                  </div>

                  <label class="entry__error entry__error--primary"
                    style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
                  </label>
                </div>
              </div>
            </div>
            <div style="padding: 8px 0;">
              <div class="sib-input sib-form-block">
                <div class="form__entry entry_block">
                  <div class="form__label-row ">
                    <label class="entry__label"
                      style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;"
                      for="FREIFELD" data-required="*">Wann bist du am besten erreichbar?</label>

                    <div class="entry__field">
                      <input class="input " maxlength="200" type="text" id="FREIFELD" name="FREIFELD" autocomplete="off"
                        placeholder="12:00 - 16:00" data-required="true" required />
                    </div>
                  </div>

                  <label class="entry__error entry__error--primary"
                    style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
                  </label>
                </div>
              </div>
            </div>
            <div style="padding: 8px 0;">
              <div class="sib-optin sib-form-block" data-required="true">
                <div class="form__entry entry_mcq">
                  <div class="form__label-row ">
                    <div class="entry__choice" style="">
                      <label>
                        <input type="checkbox" class="input_replaced" value="1" id="OPT_IN" name="OPT_IN" required />
                        <span class="checkbox checkbox_tick_positive" style="margin-left:"></span><span
                          style="font-size:14px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent;">
                          <p>Ich möchte von Melli.com telefonisch kontaktiert werden.</p><span data-required="*"
                            style="display: inline;" class="entry__label entry__label_optin"></span>
                        </span> </label>
                    </div>
                  </div>
                  <label class="entry__error entry__error--primary"
                    style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
                  </label>
                </div>
              </div>
            </div>
            <div style="padding: 8px 0;">
              <div class="sib-checkbox-group sib-form-block">
                <div class="form__entry entry_mcq">
                  <div class="form__label-row ">
                    <div style="">
                      <div class="entry__choice">
                        <label class="checkbox__label">
                          <input type="checkbox" class="input_replaced" name="lists_32[]"
                            data-value="Ich möchte den Newsletter von Melli.com erhalten und akzeptiere die Datenschutzbestimmungen."
                            value="7" />
                          <span class="checkbox checkbox_tick_positive" style="margin-left:"></span><span
                            style="font-size:14px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent;">Ich
                            möchte den Newsletter von Melli.com erhalten und akzeptiere die
                            Datenschutzbestimmungen.</span> </label>
                      </div>
                    </div>
                  </div>
                  <label class="entry__error entry__error--primary"
                    style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
                  </label>
                </div>
              </div>
            </div>
            <div style="padding: 8px 0;">
              <div class="sib-form-block" style="text-align: left">
                <button class="sib-form-block__button sib-form-block__button-with-loader"
                  style="font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#FFFFFF; background-color:#3E4857; border-radius:3px; border-width:0px;"
                  form="sib-form" type="submit">
                  <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                    <path
                      d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                  </svg>
                  Rückrufbitte abschicken
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
