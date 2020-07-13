// In src/prismic-configuration.js
export const linkResolver = (doc) => {

  if (doc.type === 'frames') {
    return `/frames/${doc.uid}`
  }

  if (doc.type === 'wheels') {
    return `/wheels/${doc.uid}`
  }

  if (doc.type === 'cranksets') {
    return `/cranksets/${doc.uid}`
  }

  if (doc.type === 'handlebars') {
    return `/handlebars/${doc.uid}`
  }

  if (doc.type === 'saddles') {
    return `/saddles/${doc.uid}`
  }

  if (doc.type === 'accessories') {
    return `/accessories/${doc.uid}`
  }
  // Backup for all other types
  return '/'
}
