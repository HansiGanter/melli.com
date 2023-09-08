export function mergeObjectLists<
  T extends { [key: string]: any },
  S extends Partial<T>,
>(list1: T[], list2: S[], getId: (x: T | S) => any = x => x.id): (T & S)[] {
  return list1.map(a => ({ ...a, ...list2.find(b => getId(a) === getId(b)) } as (T & S)))
}

const NBSP = '\u00A0' // non-breaking space unicode
export const displayPrice = (price: number) => `€${NBSP}${price.toLocaleString('de', { useGrouping: false, minimumFractionDigits: 2 })}`
export const customParams = ['gclid', 'fbclid', 'mellitbclid', 'melliobclid']
export const utmParams = ['utm_source', 'utm_medium', 'utm_content', 'utm_campaign', 'utm_term']
export const paramsToStore = customParams.concat(utmParams)
