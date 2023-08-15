<script setup lang="ts">
import { fireInfoPackageSentEvent } from '~/google-tag-manager'

const props = defineProps<{
  show: boolean
  email?: string
}>()
const emit = defineEmits<{
  (event: 'close'): void
}>()

const onFormSubmit = async (e: Event) => {
  // reset messages
  const errorMsgElement = document.getElementById('error-message')
  if (errorMsgElement)
    errorMsgElement.style.display = 'none'

  const successMsgElement = document.getElementById('success-message')
  if (successMsgElement)
    successMsgElement.style.display = 'none'

  // track submit
  const emailvalue = (document.querySelector('#EMAIL') as HTMLInputElement).value
  const telvalue = (document.querySelector('#TELEFONNUMMER') as HTMLInputElement).value
  const firstnamevalue = (document.querySelector('#VORNAME') as HTMLInputElement).value
  const lastnamevalue = (document.querySelector('#NACHNAME') as HTMLInputElement).value
  fireInfoPackageSentEvent(emailvalue, telvalue, firstnamevalue, lastnamevalue)

  // send data
  const formElement = e.target as HTMLFormElement
  const formData = new FormData(formElement)
  const endpoint = formElement.action

  // will send a 302 redirect if successfull
  // we can't follow the redirect because of CORS, son instead we just load the success URL manually
  const response = await fetch(endpoint, { method: 'POST', body: formData, redirect: 'manual' })
  // status returns 0 instead of 302 if redirect hits
  if (response.status === 0 || response.status === 302) {
    const container = document.getElementById('sib-container')
    if (container)
      container.style.display = 'none'
    if (successMsgElement)
      successMsgElement.style.display = 'block'

    setTimeout(() => {
      // actually rediect
      // window.location.href = 'https://sibforms.com/confirmation/success/subscription/double?locale=de'
      emit('close')
    }, 1500)
  }
  else {
    if (errorMsgElement)
      errorMsgElement.style.display = 'block'
  }
}

watch(() => props.email, async (newEmail) => {
  await nextTick()
  const emailElement = document.getElementById('EMAIL') as HTMLInputElement
  if (emailElement)
    emailElement.value = newEmail ?? ''
})

watch(() => props.show, async () => {
  await nextTick()

  const elems = ['UTM_CONTENT', 'UTM_CAMPAIGN', 'UTM_SOURCE', 'UTM_MEDIUM', 'UTM_TERM', 'GCLID', 'FBCLID', 'MELLITBCLID', 'MELLIOBCLID']

  const currentParams: URLSearchParams = new URL(window.location.href).searchParams

  elems.forEach(elem => {
    const domElem = document.getElementById(elem) as HTMLInputElement
    if (domElem) {
      const currentValue = currentParams.get(elem.toLowerCase())
      const value = currentValue !== null ? currentValue : window.localStorage.getItem(elem.toLowerCase()) ?? ''
      domElem.value = value.substring(0, 170)
    }
  })
})
</script>

<template>
  <Modal :show="show" @close="() => emit('close')">
    <!-- Begin Brevo Form -->
    <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">
    <!--  END - We recommend to place the above code in head tag of your website html -->

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
        <div />
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
        <div />
        <div id="sib-container" class="sib-container--large sib-container--vertical"
          style="text-align:center; background-color:rgba(255,255,255,1); max-width:540px; border-radius:3px; border-width:0px; border-color:#C0CCD9; border-style:solid; direction:ltr">
          <form id="sib-form" method="POST"
            action="https://ccfae1fd.sibforms.com/serve/MUIFAL8ZboJTDHYeIZU-VXVvWMjjWhydgco7G8khFgeMsOZV5sMmW7BcbG_bKhYEssUDcl8sIE7j-7X2YPTgXIOGSq5Fc4MWLZyNUy5YIk6QHImGYr_MeOCuAb0fbGXqOFNZREdBMJlHx8pUrAgBl0btQyxXf9jjLQLZyGiPQO5q4JJg5s_xfyWG4uUdloBeFUbqHfiJGi1ECQy6"
            data-type="subscription" @submit.prevent="onFormSubmit">
            <div style="padding: 8px 0;">
              <div class="sib-form-block"
                style="font-size:32px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent; text-align:left">
                <p>Lass dir dein Melli-Infopaket zuschicken!</p>
              </div>
            </div>
            <div style="padding: 8px 0;">
              <div class="sib-form-block"
                style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent; text-align:left">
                <div class="sib-text-form-block">
                  <p>Melde dich zu unserem Melli-Newsletter an, um dein Infopaket zu erhalten.</p>
                </div>
              </div>
            </div>
            <div style="padding: 8px 0; display: none;">

              <input class="input " maxlength="200" type="text" id="UTM_SOURCE" name="UTM_SOURCE" autocomplete="off"
                placeholder="UTM_SOURCE" />
              <input class="input " maxlength="200" type="text" id="UTM_MEDIUM" name="UTM_MEDIUM" autocomplete="off"
                placeholder="UTM_MEDIUM" />
              <input class="input " maxlength="200" type="text" id="UTM_CAMPAIGN" name="UTM_CAMPAIGN" autocomplete="off"
                placeholder="UTM_CAMPAIGN" />
              <input class="input " maxlength="200" type="text" id="UTM_CONTENT" name="UTM_CONTENT" autocomplete="off"
                placeholder="UTM_CONTENT" />
              <input class="input " maxlength="200" type="text" id="GCLID" name="GCLID" autocomplete="off"
                placeholder="GCLID" />
              <input class="input " maxlength="200" type="text" id="FBCLID" name="FBCLID" autocomplete="off"
                placeholder="FBCLID" />
              <input class="input " maxlength="200" type="text" id="MELLITBCLID" name="MELLITBCLID" autocomplete="off"
                placeholder="MELLITBCLID" />
              <input class="input " maxlength="200" type="text" id="MELLIOBCLID" name="MELLIOBCLID" autocomplete="off"
                placeholder="MELLIOBCLID" />

            </div>
            <div style="padding: 8px 0;">
              <div class="sib-input sib-form-block">
                <div class="form__entry entry_block">
                  <div class="form__label-row ">
                    <label class="entry__label"
                      style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;"
                      for="VORNAME" data-required="*">Vorname</label>

                    <div class="entry__field">
                      <input id="VORNAME" class="input " maxlength="200" type="text" name="VORNAME" placeholder="Max"
                        data-required="true" required>
                    </div>
                  </div>

                  <label class="entry__error entry__error--primary"
                    style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;" />
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
                      <input id="NACHNAME" class="input " maxlength="200" type="text" name="NACHNAME"
                        placeholder="Mustermann" data-required="true" required>
                    </div>
                  </div>

                  <label class="entry__error entry__error--primary"
                    style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;" />
                </div>
              </div>
            </div>
            <div style="padding: 8px 0;">
              <div class="sib-input sib-form-block">
                <div class="form__entry entry_block">
                  <div class="form__label-row ">
                    <label class="entry__label"
                      style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;"
                      for="EMAIL" data-required="*">Email-Adresse</label>

                    <div class="entry__field">
                      <input id="EMAIL" class="input" type="email" name="EMAIL" placeholder="max.mustermann@mail.de"
                        data-required="true" required>
                    </div>
                  </div>

                  <label class="entry__error entry__error--primary"
                    style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;" />
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
                      <input id="TELEFONNUMMER" class="input " maxlength="200" type="text" name="TELEFONNUMMER"
                        placeholder="+49 170 12345678" data-required="true" required>
                    </div>
                  </div>

                  <label class="entry__error entry__error--primary"
                    style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;" />
                </div>
              </div>
            </div>
            <div style="padding: 8px 0;">
              <div class="sib-radiobutton-group sib-form-block" data-required="true">
                <div class="form__entry entry_mcq">
                  <div class="form__label-row ">
                    <label class="entry__label"
                      style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;"
                      for="QUESTION_ROLE" data-required="*">Für wen ist Melli gedacht?</label>
                    <div>
                      <div class="entry__choice" style="">
                        <label>
                          <input type="radio" name="QUESTION_ROLE" class="input_replaced" value="1" required>
                          <span class="radio-button" style="margin-left: " /><span
                            style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent;">mich
                            selbst</span> </label>
                      </div>
                      <div class="entry__choice" style="">
                        <label>
                          <input type="radio" name="QUESTION_ROLE" class="input_replaced" value="2" required>
                          <span class="radio-button" style="margin-left: " /><span
                            style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent;">einen
                            Angehörigen</span> </label>
                      </div>
                    </div>
                  </div>
                  <label class="entry__error entry__error--primary"
                    style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;" />
                </div>
              </div>
            </div>
            <div style="padding: 8px 0;">
              <div class="sib-form-block sib-divider-form-block">
                <div style="border: 0; border-bottom: 1px solid #E5EDF6" />
              </div>
            </div>
            <div style="padding: 8px 0;">
              <div class="sib-optin sib-form-block" data-required="true">
                <div class="form__entry entry_mcq">
                  <div class="form__label-row ">
                    <div class="entry__choice" style="">
                      <label>
                        <input id="OPT_IN" type="checkbox" class="input_replaced" value="1" name="OPT_IN" required>
                        <span class="checkbox checkbox_tick_positive" style="margin-left:" /><span
                          style="font-size:14px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent;">
                          <p>Ich möchte den melli.com Newsletter erhalten und akzeptiere die Datenschutzerklärung.</p>
                          <span data-required="*" style="display: inline;" class="entry__label entry__label_optin" />
                        </span> </label>
                    </div>
                  </div>
                  <label class="entry__error entry__error--primary"
                    style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;" />
                  <label class="entry__specification"
                    style="font-size:12px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#8390A4; text-align:left">
                    Du kannst den Newsletter jederzeit über den Link in unserem Newsletter abbestellen.
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
                  Infopaket anfordern
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
    <!-- End Brevo Form -->
  </Modal>
</template>

<style scoped>
@font-face {
  font-display: block;
  font-family: Roboto;
  src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
}

@font-face {
  font-display: fallback;
  font-family: Roboto;
  font-weight: 600;
  src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
}

@font-face {
  font-display: fallback;
  font-family: Roboto;
  font-weight: 700;
  src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
}

#sib-container input:-ms-input-placeholder {
  text-align: left;
  font-family: "Helvetica", sans-serif;
  color: #c0ccda;
}

#sib-container input::placeholder {
  text-align: left;
  font-family: "Helvetica", sans-serif;
  color: #c0ccda;
}

#sib-container textarea::placeholder {
  text-align: left;
  font-family: "Helvetica", sans-serif;
  color: #c0ccda;
}
</style>
