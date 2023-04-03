/* eslint-disable no-console */
import { sha256 } from 'js-sha256'

// declare global {
//   interface Window { dataLayer: any[] }
// }
// window.dataLayer = window.dataLayer || {}

export const fireShopEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-go-to-shop',
  })
  console.log('melli-cta-go-to-shop')
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

export const fireCallbackOpenEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-callback-open',
  })
  console.log('melli-cta-callback-open')
}

// export const fireOpenJobAlertEvent = () => {
//   window.dataLayer.push({
//     event: 'melli-cta-job-alert-open',
//   })
//   console.log('melli-cta-job-alert-open')
// }

// export const fireJobAlertEvent = () => {
//   window.dataLayer.push({
//     event: 'melli-cta-job-alert-sent',
//   })
//   console.log('melli-cta-job-alert-sent')
// }

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

// export const fireNewsletterOpenEvent = () => {
//   window.dataLayer.push({
//     event: 'melli-cta-newsletter-open',
//   })
//   console.log('melli-cta-newsletter-open')
// }

// export const fireNewsletterSentEvent = () => {
//   window.dataLayer.push({
//     event: 'melli-cta-newsletter-sent',
//   })
//   console.log('melli-cta-newsletter-sent')
// }

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

// export const fireOpenPositionEvent = (job?: string) => {
//   window.dataLayer.push({
//     event: !job ? 'melli-cta-karriere-jobangebote' : `melli-karriere-${job}`,
//   })
//   console.log(!job ? 'melli-cta-karriere-jobangebote' : `melli-karriere-${job}`)
// }

// export const fireJobFilterEvent = (filter: string) => {
//   window.dataLayer.push({
//     event: `melli-karriere-filter-${filter}`,
//   })
//   console.log(`melli-karriere-filter-${filter}`)
// }

// export const fireJobApplyEvent = () => {
//   window.dataLayer.push({
//     event: 'melli-cta-karriere-apply',
//   })
//   console.log('melli-cta-karriere-apply')
// }

export const fireVideoEvent = (video: string) => {
  window.dataLayer.push({
    event: `melli-cta-video-${video}`,
  })
  console.log(`melli-cta-video-${video}`)
}

export const fireCallbackSentEvent = (email?: string, phone?: string, firstName?: string, LastName?: string) => {
  window.dataLayer.push({
    event: 'melli-cta-callback-sent',
    em: email ? sha256(email?.toLowerCase()) : '',
    ph: phone ? sha256(phone?.replace(/[\(\)\-\s]+/g, '')) : '',
    fn: firstName ? sha256(firstName?.toLowerCase()) : '',
    ln: LastName ? sha256(LastName?.toLowerCase()) : '',
  })
  console.log('melli-cta-callback-sent')
}

export const fireLoginEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-app-login',
  })
  console.log('melli-cta-app-login')
}

export const fireGoToBlogEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-go-to-blog',
  })
  console.log('melli-cta-go-to-blog')
}

export const fireGoToAppEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-go-to-app',
  })
  console.log('melli-cta-go-to-app')
}

export const fireBlogEvent = (blog?: string) => {
  window.dataLayer.push({
    event: `melli-blog-${blog}`,
  })
  console.log(`melli-blog-${blog}`)
}

// export const fireKarriereEvent = () => {
//   window.dataLayer.push({
//     event: 'melli-cta-karriere',
//   })
//   console.log('melli-cta-karriere')
// }

// export const fireTestuserOpenSubscriptionEvent = () => {
//   window.dataLayer.push({
//     event: 'melli-cta-testuser-subscription-form-open',
//   })
//   console.log('melli-cta-testuser-subscription-form-open')
// }

// export const fireTestuserSubscriptionEvent = (email?: string) => {
//   window.dataLayer.push({
//     event: 'melli-cta-testuser-subscription-sent',
//     em: md5(email),
//   })
//   console.log('melli-cta-testuser-subscription-sent')
//   console.log(md5(email))
// }

export const fireScrollToDipaEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-dipa-scroll-to-dipa'
  })
  console.log('melli-cta-dipa-scroll-to-dipa')
}

export const fireDipaFormOpenEvent = (email?: string) => {
  window.dataLayer.push({
    event: 'melli-cta-dipa-form-open',
    em: email ? sha256(email?.toLowerCase()) : '',
  })
  console.log('melli-cta-dipa-form-open')
}

export const fireDipaFormSentEvent = (email?: string) => {
  window.dataLayer.push({
    event: 'melli-cta-dipa-form-sent',
    em: email ? sha256(email?.toLowerCase()) : '',
  })
  console.log('melli-cta-dipa-form-sent')
}

export const fireGoToLiveDemoEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-go-to-live-demo',
  })
  console.log('melli-cta-go-to-live-demo')
}

export const fireLiveDemoOpenEvent = (email?: string) => {
  window.dataLayer.push({
    event: 'melli-cta-live-demo-open',
    em: email ? sha256(email?.toLowerCase()) : '',
  })
  console.log('melli-cta-live-demo-open')
}

export const fireLiveDemoSentEvent = (email?: string, phone?: string, firstName?: string, LastName?: string) => {
  window.dataLayer.push({
    event: 'melli-cta-live-demo-sent',
    em: email ? sha256(email?.toLowerCase()) : '',
    ph: phone ? sha256(phone?.replace(/[\(\)\-\s]+/g, '')) : '',
    fn: firstName ? sha256(firstName?.toLowerCase()) : '',
    ln: LastName ? sha256(LastName?.toLowerCase()) : '',
  })
  console.log('melli-cta-live-demo-sent')
}

export const fireGoToInfoPackageEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-go-to-info-package',
  })
  console.log('melli-cta-go-to-info-package')
}

export const fireInfoPackageOpenEvent = (email?: string) => {
  window.dataLayer.push({
    event: 'melli-cta-info-package-open',
    em: email ? sha256(email?.toLowerCase()) : '',
  })
  console.log('melli-cta-info-package-open')
}

export const fireInfoPackageSentEvent = (email?: string, phone?: string, firstName?: string, LastName?: string) => {
  window.dataLayer.push({
    event: 'melli-cta-info-package-sent',
    em: email ? sha256(email?.toLowerCase()) : '',
    ph: phone ? sha256(phone?.replace(/[\(\)\-\s]+/g, '')) : '',
    fn: firstName ? sha256(firstName?.toLowerCase()) : '',
    ln: LastName ? sha256(LastName?.toLowerCase()) : '',
  })
  console.log('melli-cta-info-package-sent')
}

export const firePillEvent = (name?: string) => {
  window.dataLayer.push({
    event: `melli-pill-${name}`
  })
  console.log(`melli-pill-${name}`)
}

export const fireChatShopEvent = (name?: string) => {
  window.dataLayer.push({
    event: `melli-abo-chat-${name}`
  })
  console.log(`melli-abo-chat-${name}`)
}