<script setup lang="ts">
defineProps<{ email?: string }>()

onMounted(() => {
  function loadjQuery(e, t) {
    const n = document.createElement('script'); n.setAttribute('src', e); n.onload = t; n.onreadystatechange = function () {
      if (this.readyState == 'complete' || this.readyState == 'loaded')
        t()
    }; document.getElementsByTagName('head')[0].appendChild(n)
  } function main() {
    const $cr = jQuery.noConflict(); let old_src; $cr(document).ready(() => {
      $cr('.cr_form').submit(function () {
        $cr(this).find('.clever_form_error').removeClass('clever_form_error'); $cr(this).find('.clever_form_note').remove(); $cr(this).find('.musthave').find('input, textarea').each(function () {
          if (jQuery.trim($cr(this).val()) == '' || ($cr(this).is(':checkbox')) || ($cr(this).is(':radio'))) {
            if ($cr(this).is(':checkbox') || ($cr(this).is(':radio'))) { if (!$cr(this).parents('.cr_ipe_item').find(':checked').is(':checked')) { $cr(this).parents('.cr_ipe_item').addClass('clever_form_error') } }
            else { $cr(this).addClass('clever_form_error') }
          }
        }); if ($cr(this).attr('action').search(document.domain) > 0 && $cr('.cr_form').attr('action').search('wcs') > 0) {
          const cr_email = $cr(this).find('input[name=email]'); let unsub = false; if ($cr('input[\'name=cr_subunsubscribe\'][value=\'false\']').length)
            if ($cr('input[\'name=cr_subunsubscribe\'][value=\'false\']').is(':checked')) { unsub = true } if (cr_email.val() && !unsub) { $cr.ajax({ type: 'GET', url: $cr('.cr_form').attr('action').replace('wcs', 'check_email') + window.btoa($cr(this).find('input[name=email]').val()), success(data) { if (data) { cr_email.addClass('clever_form_error').before(`<div class='clever_form_note cr_font'>${data}</div>`); return false } }, async: false }) } const cr_captcha = $cr(this).find('input[name=captcha]'); if (cr_captcha.val())
            $cr.ajax({ type: 'GET', url: $cr('.cr_form').attr('action').replace('wcs', 'check_captcha') + $cr(this).find('input[name=captcha]').val(), success(data) { if (data) { cr_captcha.addClass('clever_form_error').after(`<div style='display:block' class='clever_form_note cr_font'>${data}</div>`); return false } }, async: false })
        } if ($cr(this).find('.clever_form_error').length) { return false } return true
      }); $cr('input[class*="cr_number"]').change(function () {
        if (isNaN($cr(this).val())) { $cr(this).val(1) } if ($cr(this).attr('min'))
          if (($cr(this).val() * 1) < ($cr(this).attr('min') * 1)) { $cr(this).val($cr(this).attr('min')) } if ($cr(this).attr('max')) {
          if (($cr(this).val() * 1) > ($cr(this).attr('max') * 1))
            $cr(this).val($cr(this).attr('max'))
        }
      }); old_src = $cr('div[rel=\'captcha\'] img:not(.captcha2_reload)').attr('src'); if ($cr('div[rel=\'captcha\'] img:not(.captcha2_reload)').length != 0)
        captcha_reload()
    }); function captcha_reload() { const timestamp = new Date().getTime(); $cr('div[rel=\'captcha\'] img:not(.captcha2_reload)').attr('src', ''); $cr('div[rel=\'captcha\'] img:not(.captcha2_reload)').attr('src', `${old_src}?t=${timestamp}`); return false }
  }
  if (typeof jQuery === 'undefined')
    loadjQuery('//ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js', main)
  else main()
})
</script>

<template>
  <Container class="py-5 sm:py-6 lg:py-8">
    <form class="layout_form cr_form cr_font max-w-lg" action="https://eu2.cleverreach.com/f/329911-336275/wcs/" method="post" target="_blank">
      <div class="cr_body cr_page cr_font formbox">
        <div class="non_sortable" style="text-align:left;" />
        <div class="editable_content grid gap-3" style="text-align:left;">
          <div id="7539403" rel="email" class="cr_form-component cr_form-component--email cr_ipe_item ui-sortable musthave">
            <div class="grid gap-1 cr_form-inputgroup--typeemail">
              <label for="text7539403">E-Mail-Adresse*</label>
              <input id="text7539403" class="cr_form-input" type="email" name="email" :value="email" placeholder="name@example.com">
            </div>
          </div>
          <div id="7539407" rel="text" class="cr_form-component cr_form-component--text cr_ipe_item ui-sortable musthave">
            <div class="grid gap-1 cr_form-inputgroup--typetext">
              <label for="cr_form-input--text7539407" class="itemname">Vorname*</label>
              <input id="cr_form-input--text7539407" class="cr_form-input" type="text" name="1011268" placeholder="">
            </div>
          </div>
          <div id="7539408" rel="text" class="cr_form-component cr_form-component--text cr_ipe_item ui-sortable musthave">
            <div class="grid gap-1 cr_form-inputgroup--typetext">
              <label for="cr_form-input--text7539408" class="itemname">Nachname*</label>
              <input id="cr_form-input--text7539408" class="cr_form-input" type="text" name="1011269" placeholder="">
            </div>
          </div>
          <div id="7539409" rel="text" class="cr_form-component cr_form-component--text cr_ipe_item ui-sortable">
            <div class="grid gap-1 cr_form-inputgroup--typetext">
              <label for="cr_form-input--text7539409" class="itemname">Telefonnummer</label>
              <input id="cr_form-input--text7539409" class="cr_form-input" type="text" name="1011270" placeholder="">
            </div>
          </div>
          <div id="7539429" rel="checkbox" class="cr_form-component cr_form-component--group cr_form-component--checkbox cr_ipe_item ui-sortable musthave" style=" margin-bottom:0px;">
            <div class="cr_form-component--group">
              <!-- FIXME: Nebeneinander, nicht untereinander -->
              <span class="cr_form-inputgroup cr_form-inputgroup--typecheckbox flex gap-2">
                <input id="17539429" class="cr_form-checkbox cr_ipe_checkbox" type="checkbox" name="1011271[]" value="1">
                <label for="17539429" class="label cr_form-component--header flex-1">Ich bin damit einverstanden, dass die meetap GmbH mir Informationen über Neuigkeiten, Promotions und Angebote zur Information über das Produkt und zum Abschluss eines Abonnements von Melli z.B. per E-Mail gemäß der Einwilligungserklärung zusendet und*</label>
              </span>&nbsp;
            </div>
          </div>
          <div id="7539405" rel="button" class="cr_form-component cr_form-component--submit cr_ipe_item ui-sortable  submit_container">
            <button type="submit" class="cr_form-block cr_button">
              Einsenden
            </button>
          </div>
        </div>
      </div>
    </form>
  </Container>
</template>
