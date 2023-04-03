<script setup lang="ts">
import { fireDipaFormOpenEvent, fireScrollToDipaEvent } from '~/google-tag-manager';

const email = ref('')
const showForm = ref(false)

const submitFunction = async () => {
  showForm.value = true
  await nextTick()

  const emailInput = document.querySelector('#EMAIL');
  (emailInput as HTMLInputElement).value = email.value
  fireDipaFormOpenEvent(email.value)
}
</script>

<template>
  <div class="grid md:grid-cols-2 rounded-3xl overflow-hidden">
    <img class="h-full object-cover" src="https://assets.melli.com/images/mockups/02_interior/device_interior_intro-tag-gestalten-2048.webp">

    <div class="flex flex-col gap-8 bg-primary-900 py-6 sm:py-18 px-6 sm:px-12">
      <div class="flex flex-col gap-4">
        <h2 class="font-semibold text-3xl text-center">
          <span class="text-white">Werde Melli-Tester!</span><br>
          <!-- <span class="text-primary-300">Als Dankeschön gibts 100€</span> -->
        </h2>
        <p class="text-center text-lg font-normal text-white">
          Melli gos DiPA (digitale Pflegeanwendung). Melli könnte bald für viele Senioren kostenlos zur Verfügung stehen. Dafür brauchen wir dich! Bewirb jetzt deine Oma, Opa, Mutter, Vater als Melli-Tester und nehmt an unserer DiPA-Studie teil.
        </p>
      </div>
      <div>
        <form class="flex flex-col gap-8 bg-primary-900" method="get" @submit.prevent="submitFunction()">
          <input
            id="email"
            v-model="email"
            class="w-100 border-2 rounded-full w-full max-w-112 px-4 py-2.5 mx-auto"
            placeholder="name@email.de"
            type="email"
            name="email"
            required
          >
          <div class="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 mx-auto">
            <button type="submit" class="text-white bg-primary-400 flex gap-2 items-center mx-auto px-4 py-2.5 rounded-lg w-fit text-center">
              <div class="i-carbon:user-favorite-alt w-6 h-6 shrink-0" />Jetzt bewerben
            </button>
            <RouterLink to="#becomeTestUser" class="text-white border-white border-1.5 flex gap-2 items-center mx-auto px-4 py-2.5 rounded-lg w-fit text-center" @click="fireScrollToDipaEvent()">
              <div class="i-lucide:plus w-6 h-6 shrink-0" />Mehr erfahren
            </RouterLink>
          </div>
        </form>

        <Modal :show="showForm" @close="showForm = false">
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
              <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:rgba(255,255,255,1); max-width:540px; border-radius:3px; border-width:0px; border-color:#C0CCD9; border-style:solid; direction:ltr">
                <form id="sib-form" method="POST" action="https://ccfae1fd.sibforms.com/serve/MUIEAJIrrYVnlhqvAjpgthkCAte0mILPuCzmO06dj-910Lx_0iW8v7Pv3B3pI89YkyBgWnpMBHfB685CoILZCPnVTqkgNe2Q_d2SxI3sBLKtF6gA6KVGYxDpgUOMOQDb6JkKTawv9OaEtO1jHSPSYAqSFWRpkTqrv4Am-wEKx-4mDrn4cnAH1SBdNjo7AbzmPIoJjVAyauI5Iis7" data-type="subscription">
                  <div style="padding: 8px 0;">
                    <div class="sib-form-block" style="font-size:32px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent; text-align:left">
                      <p>Werde jetzt Melli-Tester!</p>
                    </div>
                  </div>
                  <div style="padding: 8px 0;">
                    <div class="sib-form-block" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent; text-align:left">
                      <div class="sib-text-form-block">
                        <p>Bewirb dich, deine Eltern oder Großeltern jetzt als Melli-Tester und hilf uns dabei Melli als digitales Pflegemittel zu zertifizieren.</p>
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
                          <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;" for="EMAIL" data-required="*">Email-Adresse</label>

                          <div class="entry__field">
                            <input id="EMAIL" class="input " type="text" name="EMAIL" autocomplete="off" placeholder="max.mustermann@mail.de" data-required="true" required>
                          </div>
                        </div>

                        <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;" />
                        <label class="entry__specification" style="font-size:12px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#8390A4; text-align:left">
                          Geben Sie bitte Ihre E-Mail-Adresse für die Anmeldung an, z. B. abc@xyz.com.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div style="padding: 8px 0;">
                    <div class="sib-input sib-form-block">
                      <div class="form__entry entry_block">
                        <div class="form__label-row ">
                          <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;" for="TELEFONNUMMER">Telefonummer</label>

                          <div class="entry__field">
                            <input id="TELEFONNUMMER" class="input " maxlength="200" type="text" name="TELEFONNUMMER" autocomplete="off" placeholder="+49 170 12345678">
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
                          <label class="entry__label" style="font-weight: 700; text-align:left; font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;" for="QUESTION_ROLE" data-required="*">Wen möchtest du als Melli-Tester bewerben?</label>
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
                              /><span style="font-size:14px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent;"><p>Ich möchte zum Zwecke meiner Bewerbung als Melli-Tester kontaktiert werden, z.B. per Email und akzeptiere die Datenschutzbestimmungen.</p><span data-required="*" style="display: inline;" class="entry__label entry__label_optin" /></span> </label>
                          </div>
                        </div>
                        <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;" />
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
                                <input type="checkbox" class="input_replaced" name="lists_32[]" data-value="Ich möchte über Neuigkeiten, Angebote und weitere Themen rund um Melli auf dem Laufenden gehalten werden und stimme zu, dass die meetap GmbH mich zu diesem zwecke z.B. per Email kontaktieren darf. Es gelten die Datenschutzbestimmungen." value="7">
                                <span
                                  class="checkbox checkbox_tick_positive"
                                  style="margin-left:"
                                /><span style="font-size:14px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent;">Ich möchte über Neuigkeiten, Angebote und weitere Themen rund um Melli auf dem Laufenden gehalten werden und stimme zu, dass die meetap GmbH mich zu diesem zwecke z.B. per Email kontaktieren darf. Es gelten die Datenschutzbestimmungen.</span> </label>
                            </div>
                          </div>
                        </div>
                        <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;" />
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
      </div>
    </div>
  </div>
</template>
