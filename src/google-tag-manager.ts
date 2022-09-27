export const fireShopEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-shop',
    // ignore params for now
    formType: 'NavBar',
    formPosition: 'NavBar',
  })
}

export const fireCartEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-cart',
    // ignore params for now
    formType: 'NavBar',
    formPosition: 'NavBar',
  })
}

export const firePlanEvent = (description: string) => {
  window.dataLayer.push({
    event: `melli-plan-${description}`,
    // ignore params for now
    formType: 'FAQ',
    formPosition: 'Footer',
  })
}

export const fireCallbackEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-callback-open',
    // ignore params for now
    formType: 'Callback',
    formPosition: 'Footer',
  })
}

export const fireJobAlertEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-job-alert-open',
    // ignore params for now
    formType: 'JobAlert',
    formPosition: 'Footer',
  })
}

export const fireContactEvent = (contact: string) => {
  window.dataLayer.push({
    event: `melli-cta-contact-${contact}`,
    // ignore params for now
    formType: 'Contact',
    formPosition: 'Footer',
  })
}

export const fireSocialEvent = (social: string) => {
  window.dataLayer.push({
    event: `melli-social-${social}`,
    // ignore params for now
    formType: 'Social',
    formPosition: 'Footer',
  })
}

export const fireNewsletterEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-newsletter-open',
    // ignore params for now
    formType: 'Newsletter',
    formPosition: 'Footer',
  })
}

export const fireFAQEvent = (description?: string) => {
  window.dataLayer.push({
    event: !description ? 'melli-cta-faq' : `melli-cta-faq-${description}`,
    // ignore params for now
    formType: 'FAQ',
    formPosition: 'Footer',
  })
}

export const fireFlipCardEvent = (card: string) => {
  window.dataLayer.push({
    event: `melli-flip-card-${card}`,
    // ignore params for now
    formType: 'FAQ',
    formPosition: 'Footer',
  })
}

export const fireOpenPositionEvent = (job?: string) => {
  window.dataLayer.push({
    event: !job ? 'melli-cta-karriere-jobangebote' : `melli-karriere-${job}`,
    // ignore params for now
    formType: 'Karriere',
    formPosition: 'Footer',
  })
}

export const fireJobFilterEvent = (filter: string) => {
  window.dataLayer.push({
    event: `melli-karriere-filter-${filter}`,
    // ignore params for now
    formType: 'Karriere',
    formPosition: 'Footer',
  })
}

export const fireJobApplyEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-karriere-apply',
    // ignore params for now
    formType: 'Karriere',
    formPosition: 'Footer',
  })
}

export const fireVideoEvent = (video: string) => {
  window.dataLayer.push({
    event: `melli-cta-video-${video}`,
    // ignore params for now
    formType: 'Video',
    formPosition: 'Footer',
  })
}

export const fireCallEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-testuser-callback-sent',
    // ignore params for now
    formType: 'Callback',
    formPosition: 'TestContact',
  })
}
