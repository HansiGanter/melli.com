import md5 from 'md5'

export const fireShopEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-shop',
  })
  console.log('melli-cta-shop')
}

export const fireBuyEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-buy',
  })
  console.log('melli-cta-buy')
}

export const firePaymentSuccess = () => {
  window.dataLayer.push({
    event: 'melli-cta-payment-success',
  })
  console.log('melli-cta-payment-success')
}

export const fireCartEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-cart',
  })
  console.log('melli-cta-cart')
}

export const firePlanEvent = (description: string) => {
  window.dataLayer.push({
    event: `melli-plan-${description}`,
  })
  console.log(`melli-plan-${description}`)
}

export const fireCallbackEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-callback-open',
  })
  console.log('melli-cta-callback-open')
}
export const fireOpenJobAlertEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-job-alert-open',
  })
  console.log('melli-cta-job-alert-open')
}

export const fireJobAlertEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-job-alert-sent',
  })
  console.log('melli-cta-job-alert-sent')
}

export const fireContactEvent = (contact: string) => {
  window.dataLayer.push({
    event: `melli-cta-contact-${contact}`,
  })
  console.log(`melli-cta-contact-${contact}`)
}

export const fireSocialEvent = (social: string) => {
  window.dataLayer.push({
    event: `melli-social-${social}`,
  })
  console.log(`melli-social-${social}`)
}

export const fireNewsletterOpenEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-newsletter-open',
  })
  console.log('melli-cta-newsletter-open')
}

export const fireNewsletterSentEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-newsletter-sent',
  })
  console.log('melli-cta-newsletter-sent')
}

export const fireFAQEvent = (description?: string) => {
  window.dataLayer.push({
    event: !description ? 'melli-cta-faq' : `melli-cta-faq-${description}`,
  })
  console.log(!description ? 'melli-cta-faq' : `melli-cta-faq-${description}`)
}

export const fireFlipCardEvent = (card: string) => {
  window.dataLayer.push({
    event: `melli-flip-card-${card}`,
  })
  console.log(`melli-flip-card-${card}`)
}

export const fireOpenPositionEvent = (job?: string) => {
  window.dataLayer.push({
    event: !job ? 'melli-cta-karriere-jobangebote' : `melli-karriere-${job}`,
  })
  console.log(!job ? 'melli-cta-karriere-jobangebote' : `melli-karriere-${job}`)
}

export const fireJobFilterEvent = (filter: string) => {
  window.dataLayer.push({
    event: `melli-karriere-filter-${filter}`,
  })
  console.log(`melli-karriere-filter-${filter}`)
}

export const fireJobApplyEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-karriere-apply',
  })
  console.log('melli-cta-karriere-apply')
}

export const fireVideoEvent = (video: string) => {
  window.dataLayer.push({
    event: `melli-cta-video-${video}`,
  })
  console.log(`melli-cta-video-${video}`)
}

export const fireCallEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-callback-sent',
  })
  console.log('melli-cta-callback-sent')
}

export const fireLoginEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-app-login',
  })
  console.log('melli-cta-app-login')
}

export const fireBlogEvent = (blog?: string) => {
  window.dataLayer.push({
    event: !blog ? 'melli-cta-blog' : `melli-blog-${blog}`,
  })
  console.log(!blog ? 'melli-cta-blog' : `melli-blog-${blog}`)
}

export const fireKarriereEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-karriere',
  })
  console.log('melli-cta-karriere')
}

export const fireTestuserOpenSubscriptionEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-testuser-subscription-form-open',
  })
  console.log('melli-cta-testuser-subscription-form-open')
}

export const fireTestuserSubscriptionEvent = (email?: string) => {
  window.dataLayer.push({
    event: 'melli-cta-testuser-subscription-sent',
    emailhash: md5(email),
  })
  console.log('melli-cta-testuser-subscription-sent')
  console.log(md5(email))
}
