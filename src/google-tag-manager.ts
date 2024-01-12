/* eslint-disable no-console */
import { sha256 } from 'js-sha256';

export const fireShopEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-go-to-shop',
  });
  console.log('melli-cta-go-to-shop');
};

export const fireMelliDemoEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-go-to-melli-demo',
  });
  console.log('melli-cta-go-to-melli-demo');
};

export const fireBuyEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-stripe-checkout',
  });
  console.log('melli-cta-stripe-checkout');
};

export const firePaymentSuccess = () => {
  window.dataLayer.push({
    event: 'melli-cta-payment-success',
  });
  console.log('melli-cta-payment-success');
};

export const fireCartEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-cart',
  });
  console.log('melli-cta-cart');
};

export const firePlanEvent = (description: string) => {
  window.dataLayer.push({
    event: `melli-plan-${description}`,
  });
  console.log(`melli-plan-${description}`);
};

export const fireCallbackOpenEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-callback-open',
  });
  console.log('melli-cta-callback-open');
};

export const fireContactEvent = (contact: string) => {
  window.dataLayer.push({
    event: `melli-cta-contact-${contact}`,
  });
  console.log(`melli-cta-contact-${contact}`);
};

export const fireSocialEvent = (social: string) => {
  window.dataLayer.push({
    event: `melli-social-${social}`,
  });
  console.log(`melli-social-${social}`);
};

export const fireFAQEvent = (description?: string) => {
  window.dataLayer.push({
    event: !description ? 'melli-cta-faq' : `melli-cta-faq-${description}`,
  });
  console.log(!description ? 'melli-cta-faq' : `melli-cta-faq-${description}`);
};

export const fireFlipCardEvent = (card: string) => {
  window.dataLayer.push({
    event: `melli-flip-card-${card}`,
  });
  console.log(`melli-flip-card-${card}`);
};

export const fireVideoEvent = (video: string) => {
  window.dataLayer.push({
    event: `melli-cta-video-${video}`,
  });
  console.log(`melli-cta-video-${video}`);
};

export const fireCallbackSentEvent = (email?: string, phone?: string, firstName?: string, LastName?: string) => {
  window.dataLayer.push({
    event: 'melli-cta-callback-sent',
    em: email ? sha256(email?.toLowerCase()) : '',
    ph: phone ? sha256(phone?.replace(/[\(\)\-\s]+/g, '')) : '',
    fn: firstName ? sha256(firstName?.toLowerCase()) : '',
    ln: LastName ? sha256(LastName?.toLowerCase()) : '',
  });
  console.log('melli-cta-callback-sent');
};

export const fireLoginEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-app-login',
  });
  console.log('melli-cta-app-login');
};

export const fireGoToBlogEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-go-to-blog',
  });
  console.log('melli-cta-go-to-blog');
};

export const fireGoToPflegeeinrichtungenEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-go-to-pflegeeinrichtungen',
  });
  console.log('melli-cta-go-to-pflegeeinrichtungen');
};

export const fireGoToAppEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-go-to-app',
  });
  console.log('melli-cta-go-to-app');
};

export const fireBlogEvent = (blog?: string) => {
  window.dataLayer.push({
    event: `melli-blog-${blog}`,
  });
  console.log(`melli-blog-${blog}`);
};

export const fireScrollToDipaEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-dipa-scroll-to-dipa'
  });
  console.log('melli-cta-dipa-scroll-to-dipa');
};

export const fireDipaFormOpenEvent = (email?: string) => {
  window.dataLayer.push({
    event: 'melli-cta-dipa-form-open',
    em: email ? sha256(email?.toLowerCase()) : '',
  });
  console.log('melli-cta-dipa-form-open');
};

export const fireDipaFormSentEvent = (email?: string) => {
  window.dataLayer.push({
    event: 'melli-cta-dipa-form-sent',
    em: email ? sha256(email?.toLowerCase()) : '',
  });
  console.log('melli-cta-dipa-form-sent');
};

export const fireGoToLiveDemoEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-go-to-live-demo',
  });
  console.log('melli-cta-go-to-live-demo');
};

export const fireLiveDemoOpenEvent = (email?: string) => {
  window.dataLayer.push({
    event: 'melli-cta-live-demo-open',
    em: email ? sha256(email?.toLowerCase()) : '',
  });
  console.log('melli-cta-live-demo-open');
};

export const fireLiveDemoSentEvent = (email?: string, phone?: string, firstName?: string, LastName?: string) => {
  window.dataLayer.push({
    event: 'melli-cta-live-demo-sent',
    em: email ? sha256(email?.toLowerCase()) : '',
    ph: phone ? sha256(phone?.replace(/[\(\)\-\s]+/g, '')) : '',
    fn: firstName ? sha256(firstName?.toLowerCase()) : '',
    ln: LastName ? sha256(LastName?.toLowerCase()) : '',
  });
  console.log('melli-cta-live-demo-sent');
};

export const fireGoToInfoPackageEvent = () => {
  window.dataLayer.push({
    event: 'melli-cta-go-to-info-package',
  });
  console.log('melli-cta-go-to-info-package');
};

export const fireInfoPackageOpenEvent = (email?: string) => {
  window.dataLayer.push({
    event: 'melli-cta-info-package-open',
    em: email ? sha256(email?.toLowerCase()) : '',
  });
  console.log('melli-cta-info-package-open');
};

export const fireInfoPackageSentEvent = (email?: string, phone?: string, firstName?: string, LastName?: string) => {
  window.dataLayer.push({
    event: 'melli-cta-info-package-sent',
    em: email ? sha256(email?.toLowerCase()) : '',
    emk: email?.toLowerCase(),
    ph: phone ? sha256(phone?.replace(/[\(\)\-\s]+/g, '')) : '',
    fn: firstName ? sha256(firstName?.toLowerCase()) : '',
    ln: LastName ? sha256(LastName?.toLowerCase()) : '',
  });
  console.log('melli-cta-info-package-sent');
};

export const firePillEvent = (name?: string) => {
  window.dataLayer.push({
    event: !name ? 'melli-pill' : `melli-pill-${name}`,
  });
  console.log(`melli-pill-${name}`);
};

export const fireChatShopEvent = (name?: string) => {
  window.dataLayer.push({
    event: `melli-abo-chat-${name}`
  });
  console.log(`melli-abo-chat-${name}`);
};

