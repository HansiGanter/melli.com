<script setup lang="ts">import { fireDipaFormOpenEvent, fireDipaFormSentEvent, fireVideoEvent } from '~/google-tag-manager';

interface DipaBenefits {
  title: string
  text: string
  icon: string
  bubbletype: 0 | 1 | 2 | 3
  bubble: string
}

const benefits: DipaBenefits[] = [
  {
    title: 'Mitgestalten und die Zukunft verändern',
    text: 'Als digitales Pflegeprodukt müssen Nutzer die Kosten für Melli nicht selbst tragen. Die digitale Begleiterin wird für mehr Senioren zugänglich.',
    icon: 'i-lucide:wrench w-12 h-12 text-gray-900',
    bubbletype: 1,
    bubble: 'text-primary-200',
  },
  {
    title: 'Melli für drei Monate kostenlos kennenlernen',
    text: 'Während des Testzeitraums kannst du und deine Eltern / Großeltern Melli auf Herz und Nieren testen. Am Ende entscheidet ihr ob die digitale Begleiterin zu euch passt.',
    icon: 'i-ph:handshake w-12 h-12 text-gray-900',
    bubbletype: 0,
    bubble: 'text-primary-200',
  },
  {
    title: 'Neues ausprobieren & aktiv werden',
    text: 'Der Alltag als Melli-Tester wird garantiert spannend. Deine Eltern / Großeltern testen immer als erstes neue Melli Funktionen und können uns von ihren Erfahrungen berichten.',
    icon: 'i-lucide:rocket w-12 h-12 text-gray-900',
    bubbletype: 3,
    bubble: 'text-primary-200',
  },
  // {
  //   title: 'Sichere dir 100€ als Dankeschön',
  //   text: 'Wir bedanken uns bei allen Studienteilnehmern für ihre Mühen mit 100€ Bonus.  ',
  //   icon: 'i-lucide:gift w-12 h-12 text-gray-900',
  //   bubbletype: 2,
  //   bubble: 'text-primary-200',
  // },
]

const email = ref('')
const showForm = ref(false)

const commercialVideo = ref<HTMLElement | null>(null)
const { isFullscreen } = useFullscreen(commercialVideo)

const isOpen = ref(false)
const activeVideo = ref('')

const submitFunction = async () => {
  showForm.value = true
  await nextTick()

  const emailInput = document.querySelector('#EMAIL');
  (emailInput as HTMLInputElement).value = email.value
  fireDipaFormOpenEvent(email.value)
}

function closeModal() {
  isOpen.value = false
  activeVideo.value = ''
}
function openModal(video: string) {
  activeVideo.value = video
  isOpen.value = true
  fireVideoEvent(video)
}
</script>

<template>
  <div class="flex flex-col gap-24">
    <div class="flex flex-col gap-12 text-white mx-auto max-w-200">
      <h1 class="text-4xl sm:text-5xl font-semibold max-w-160 sm:text-center mx-auto">
        Darum sollten Oma & Opa Melli-Tester werden:
      </h1>
      <p class="text-2xl font-normal leading-8 sm:text-center mx-auto">
        Melli goes DiPA (digitale Pflegeanwendung). Melli könnte bald für viele Senioren kostenlos zur Verfügung stehen. Dafür brauchen wir dich! Bewirb jetzt deine Oma, Opa, Mutter, Vater als Melli-Tester und nehmt an unserer DiPA-Studie teil.
      </p>
      <form class="flex flex-col gap-8 bg-primary-900 text-gray-900" method="get" @submit.prevent="submitFunction()">
        <input
          id="email"
          v-model="email"
          class="w-100 border-2 rounded-full w-full max-w-112 px-4 py-2.5 mx-auto"
          placeholder="name@email.de"
          type="email"
          name="email"
          required
        >
        <button type="submit" class="text-white bg-primary-400 flex gap-2 items-center mx-auto px-4 py-2.5 rounded-lg w-fit text-center">
          <div class="i-carbon:user-favorite-alt w-6 h-6 shrink-0" />Werde Melli Tester
        </button>
      </form>
    </div>
    <div>
      <div class="grid md:grid-cols-2 gap-6 sm:gap-9 bg-primary-100 px-6 sm:px-12 pt-16 pb-16 sm:pt-15 sm:pb-48">
        <div v-for="benefit in benefits" :key="benefit.title" class="flex flex-col gap-3">
          <BubbleIcon :bubble-type="benefit.bubbletype" :bubble="benefit.bubble" :icon="benefit.icon" />
          <div class="text-lg font-normal leading-7">
            <strong>{{ benefit.title }}</strong>
            <p>{{ benefit.text }}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-6 lg:gap-15 bg-primary-800 rounded-3xl shadow-xl p-12 border-2 border-primary-300 sm:max-w-80% mx-auto items-center mt-12 sm:-mt-24">
        <div class="w-50 h-50 shrink-0 relative cursor-pointer" @click="openModal('https://videos.melli.com/testimonial-gertrud-group.webm')">
          <img class="aspect-square rounded-full object-cover" src="https://assets.melli.com/images/images/commercials/portrait-oma-gertrud.webp">
          <div class="absolute flex gap-1.5 text-white items-center justify-center top-0 left-0 bottom-0 right-0">
            <div class="i-lucide:play-circle text-2xl" /><span>ansehen</span>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <P class="text-2xl lg:text-3xl font-medium text-white text-center sm:text-left">
            Oma Gertrud (91) ist bereits Melli-Testerin. Sieh dir an, wie ihr die Melli-Gruppenstunde so gefällt.
          </P>
          <button class="text-primary-300 font-medium flex gap-2 w-fit items-center mx-auto sm:mx-0" @click="openModal('https://videos.melli.com/testimonial-gertrud-group.webm')">
            <div class="i-lucide:arrow-right w-6 h-6" />Video ansehen
          </button>
        </div>
      </div>
    </div>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-10" @close="closeModal">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center py-4 text-center" @click="closeModal">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <video
              id="commercialVideo"
              ref="commercialVideo"
              :class=" isFullscreen ? 'lg:object-contain' : 'object-cover'"
              class="lg:object-cover h-screen"
              autoplay
              controls
              :loop="!isFullscreen"
            >
              <source :src="activeVideo" type="video/mp4">
            </video>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

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
          <form id="sib-form" method="POST" action="https://ccfae1fd.sibforms.com/serve/MUIEAJIrrYVnlhqvAjpgthkCAte0mILPuCzmO06dj-910Lx_0iW8v7Pv3B3pI89YkyBgWnpMBHfB685CoILZCPnVTqkgNe2Q_d2SxI3sBLKtF6gA6KVGYxDpgUOMOQDb6JkKTawv9OaEtO1jHSPSYAqSFWRpkTqrv4Am-wEKx-4mDrn4cnAH1SBdNjo7AbzmPIoJjVAyauI5Iis7" data-type="subscription" @submit="fireDipaFormSentEvent()">
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
</template>
